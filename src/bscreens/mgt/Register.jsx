import { useState } from 'react';
import { LuUserPlus, LuBriefcase, LuBookOpen, LuSave, LuChevronLeft } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

export default function Register() { 
  const navigate = useNavigate(); 

  const [teacherData, changeTeachData] = useState({ 
    idNo: '', img: '', salutation: 'Mr.', firstName: '', middleName: '', lastName: '', email: '', phone: '', gender: 'Male', designation: 'Subject Teacher', 
    eType: 'Full-Time', eDate: new Date().toLocaleDateString(), dob:'', gLevel: '', status: 'Action', school: 'Ndows Lower Basic', primaryAssign: '', qualifications: '', password: '' 
  });
  
  function handleChange(e){
      const {name, value} = e.target;
      changeTeachData({...teacherData, [name]: value});
  }
  
  function handleFileChange(e){
    const file = e.target.files[0];
    if (file){
      const reader = new FileReader();
      reader.onloadend = function(){
        changeTeachData({...teacherData, img: reader.result})
      };
      reader.readAsDataURL(file);
    }
  }

  const baseUrl = 'http://localhost:5000/tch';

  async function teacherRegisterAPI(e){
    e.preventDefault();
    try{
        const dataToSend = { 
          ...teacherData, 
          qualifications: teacherData.qualifications ? teacherData.qualifications.split(',').map(q => q.trim()) : [] , 
          primaryAssign: teacherData.primaryAssign ? teacherData.primaryAssign.split(',').map(e=> e.trim()) : []
        };
    
        const sendInfo = await fetch(`${baseUrl}/reg-tch`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(dataToSend) })

        const result = await sendInfo.json();

        if (result.success === true) {
          console.log(result.message);
          alert(`The teacher with ${teacherData.idNo} saved successfully`); 
          navigate(-1);
        } else {
          alert("Error: " + result.message);
        }
      } catch(e){
        console.error("Error in connection:", e);
        alert("Servidor Offline ou Erro de Rede");
      }
  }

  async function generateStaffIdAPI(e){
    e.preventDefault();
    const res = await fetch(`${baseUrl}/generateID`, { method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({school: teacherData.school})});
    const response = await res.json();
    if (response.success === true){
      changeTeachData(prevState => ({
          ...prevState,
          idNo: response.message
        }));    
      } else{
      alert (response.message);
    }
  }

  const profileList = [
    {label: 'Staff Photo', type: 'file', placeholder: '', name: 'img'},
    {label: 'Salutation', type: 'text', placeholder: '', name: 'salutation',},
    {label: 'First Name', type: 'text', placeholder: 'e.g. Yusuf', name: 'firstName', condition: true},
    {label: 'Middle Name', type: 'text', placeholder: 'e.g. Olamitunji', name: 'middleName', condition: false},
    {label: 'Last Name', type: 'text', placeholder: 'e.g. Yisa', name: 'lastName', condition: true},
    {label: 'Email', type: 'email', placeholder: 'e.g. official.email@ndows.edu', name: 'email', condition: false},
    {label: 'Phone', type: 'tel', placeholder: '+220 648 68 48', name: 'phone', condition: true},
    {label: 'Gender', type: '', placeholder: '', name: 'gender', condition: true},
    {label: 'Date of Birth', type: '', placeholder: '', name: 'dob', condition: false},
];

    const academicList = [
    {label: 'Assigned Institution', type: 'text', placeholder: '', name: 'school',},
    {label: 'Primary Subject Specialisation', type: 'text', placeholder: 'e.g. Mathematics, Physics', name: 'primaryAssign', condition: true},
    {label: 'Qualifications', type: 'text', placeholder: 'e.g. B.Sc, M.Ed, PGDE', name: 'qualifications', condition: false},
    {label: 'Choosen Password', type: 'text', placeholder: 'e.g. Yisa1201', name: 'password', condition: true},
  ];

  return (
    <div className="form-full">
      <header className="form-header">
        <Link className='form-back' to={-1}> <LuChevronLeft/> Back to Registry</Link>
        <div className="form-head-title">
          <h1>Staff Onboarding</h1>
          <p>Register new faculty members (Primary - Senior Secondary)</p>
        </div>
      </header>

      <form className="t-reg-form" onSubmit={teacherRegisterAPI}>
        <div className="t-form-section glass-box">
          <h3><LuUserPlus /> Personal Profile</h3> 
          <div className="t-input-grid"> {profileList.map((e, i)=>
            i == 0 ? <div className="t-input-group"> <label>{e.label}</label> <input type={e.type} accept='image/*' onChange={handleFileChange} /> </div> :
            i == 1 ? <div className="t-input-group"> <label>Salutation</label> <select name={e.name} onChange={handleChange}> <option>Mr.</option> <option>Mrs.</option> <option>Dr.</option> <option>Prof.</option> </select> </div> :
            i < 7 ? <div className="t-input-group"> <label>{e.label}</label> <input type={e.type} placeholder={e.placeholder} name={e.name} required={e.condition} onChange={handleChange} /> </div>:
            i == 7 ? <div className="t-input-group"> <label>{e.label}</label> <select name={e.gender} onChange={handleChange}> <option>Male</option> <option>Female</option> </select> </div>:
            <div className="t-input-group"> <label>{e.label}</label> <input type="date"  name='dob' onChange={handleChange}/> </div>
          )}
          </div>
        </div>

        <div className="t-form-section glass-box">
          <h3><LuBriefcase /> Employment & Contract</h3>
          <div className="t-input-grid triple">
            <div className="t-input-group"> <label>Designation</label> <select name='designation' onChange={handleChange}> <option>Subject Teacher</option> <option>Head of Department (HOD)</option> <option>Class Teacher</option> <option>Lab Instructor</option> </select> </div>
            <div className="t-input-group"> <label>Employment Type</label> <select name='eType' onChange={handleChange}> <option>Full-Time</option> <option>Part-Time / Contract</option> <option>Probation</option> </select> </div>
            <div className="t-input-group"> <label>Staff ID Number</label> <input type="text" value={teacherData.idNo} name='idNo' onChange={handleChange} readOnly/> <button type='button' onClick={generateStaffIdAPI}>Generate</button> </div>
            <div className="t-input-group"> <label>Assigned Salary Grade</label> <input type="text" placeholder="e.g. Grade 8 / Step 2"  name='gLevel' onChange={handleChange}/> </div>
            <div className="t-input-group"> <label>Status of Teacher</label> <input type="text" placeholder="Activated"  name='status' onChange={handleChange} readOnly/> </div>
          </div>
        </div>

        <div className="t-form-section glass-box">
          <h3><LuBookOpen /> Academic Assignment</h3>
          <div className="t-input-grid">
            {academicList.map((e, i)=>
              i == 0 ? <div className="t-input-group"> <label>{e.label}</label> <select name={e.name} onChange={handleChange}> <option>Ndows Lower Basic</option> <option>Ndows Junior Secondary</option> <option>Ndows Senior Secondary</option> </select> </div>
              : <div className="t-input-group"> <label>{e.label}</label> <input type={e.type} placeholder={e.placeholder}  name={e.name} onChange={handleChange} required={e.condition}/> </div>
            )}
          </div>
        </div>

        <div className="form-actions"> <button type="submit" className="save-staff-btn"> <LuSave /> Complete Registration </button> </div>
      </form>
    </div>
  );
}