import { useState, useEffect } from 'react';
import "./apply.css";
import { LuCamera, LuCircleAlert } from 'react-icons/lu';

export default function Apply() {
  const baseUrl = 'http://localhost:5000/std';
  let apiMessage;

  const [stdInfo, changeStdInfo] = useState({
    imgStd: '', 
    firstName: '', 
    middleName: '', 
    lastName: '', 
    dob: '', 
    nationality: 'Gambian', 
    gender:'', 
    aspClass:'Nursery', 
    department:'Science', 
    prevSchool: '', 
    fathertName:'', 
    motherName:'', 
    guardianName: '', 
    guardianPhone:'', 
    homeAdress: '', 
    eDate: new Date().toLocaleDateString(),
    email: '', 
    status: 'Pending', 
    role: 'Student'
  });

  function handleChange (v){
    const {name, value} = v.target;
    changeStdInfo({...stdInfo, [name]: value});
  }
  const handlePhoto = (v) => {
    if (v.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => changeStdInfo({...stdInfo, imgStd: reader.result});
      reader.readAsDataURL(v.target.files[0]);
    }
  };
  useEffect(() => {
    const nationality = stdInfo.nationality;
    const aspiringClass = stdInfo.aspClass;

    const feeMatrix = {
      Nursery: { Gambian: 5500, International: 8500 },
      Primary: { Gambian: 7200, International: 11000 },
      Secondary: { Gambian: 9500, International: 15000 },
    };
    let category = aspiringClass.includes("Nursery") ? "Nursery" : 
                   aspiringClass.includes("Primary") ? "Primary" : "Secondary";
    setPrice(feeMatrix[category][nationality]);
  }, [stdInfo.nationality, stdInfo.aspClass]);
  const [submitted, setSubmitted] = useState(false);
  const [price, setPrice] = useState(5500);


  async function registerNewStudent(e){
    e.preventDefault();
    try{
      const res = await fetch(`${baseUrl}/reg-std`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({stdInfo})
      });
      const response = await res.json();
      if (response.success == true){
        apiMessage = response.message;
        setSubmitted(true);
      } else {
      alert(response.message || "Submission failed");
    }
    } catch(e){     
      apiMessage = e.message;
      alert(`Unstable Network: ${apiMessage}`);
    }
  }

  return (
    <div className="full-reg-container">
      <header className="reg-header-green">
        <h1>Student Admission Portal</h1>
        <p>Complete the form below. Current Term Tuition: <span className="price-tag">D{price.toLocaleString()}</span></p>
      </header>

      <form className="master-form" onSubmit={(e) => { registerNewStudent(e) }}>
        
        {/* --- SECTION 1: IDENTITY --- */}
        <section className="form-section">
          <h3 className="section-title">1. Applicant Identity</h3>
          <div className="identity-layout">
            <div className="photo-upload-wrapper">
              <label htmlFor="passport" className="photo-upload-box"> 
                {stdInfo.imgStd ? <img src={stdInfo.imgStd} alt="Passport" /> : 
                <div className="placeholder"><LuCamera size={30} /><p>Upload Passport</p></div>}
              </label>
              <input name='imgUser' type="file" id="passport" hidden onChange={handlePhoto} accept="image/*" />
            </div>
            
            <div className="fields-grid">
              <div className="f-group"><label>First Name</label><input type="text" name='firstName' required onChange={handleChange}/></div>
              <div className="f-group"><label>Middle Name</label><input type="text" name='middleName' onChange={handleChange}/></div>
              <div className="f-group"><label>Last Name</label><input type="text" name='lastName'required onChange={handleChange}/></div>
              <div className="f-group"><label>Date of Birth</label><input type="date" name='dob' required onChange={handleChange}/></div>
              <div className="f-group">
                <label>Nationality</label>
                <select value={stdInfo.nationality} name='nationality' onChange={handleChange}>
                  <option value="Gambian">Gambian</option>
                  <option value="International">International</option>
                </select>
              </div>
              <div className="f-group"><label>Gender</label>
                <select name='gender' required onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: ACADEMICS --- */}
        <section className="form-section">
          <h3 className="section-title">2. Academic Placement</h3>
          <div className="fields-grid">
            <div className="f-group">
              <label>Aspiring Class</label>
              <select value={stdInfo.aspClass} name='aspClass' onChange={handleChange} required>
                <option value="Nursery">Nursery 1-3</option>
                <option value="Primary">Primary (Grade 1-6)</option>
                <option value="Secondary">Secondary (Form 1-5)</option>
              </select>
            </div>
            {stdInfo.aspClass === "Secondary" && (
              <div className="f-group animate-in">
                <label>Department</label>
                <select name='department' required onChange={handleChange}>
                  <option>Science</option>
                  <option>Commercial</option>
                  <option>Arts</option>
                </select>
              </div>
            )}
            <div className="f-group"><label>Previous School</label><input type="text" name='prevSchool' placeholder="Last school attended" onChange={handleChange}/></div>
          </div>
        </section>

        {/* --- SECTION 3: FAMILY --- */}
        <section className="form-section">
          <h3 className="section-title">3. Family & Emergency Contacts</h3>
          <div className="fields-grid">
            <div className="f-group"><label>Father's Name</label><input name='fathertName' type="text" onChange={handleChange}/></div>
            <div className="f-group"><label>Mother's Name</label><input name='motherName' type="text" onChange={handleChange}/></div>
            <div className="f-group"><label>Guardian's Name</label><input name='guardianName' type="text" onChange={handleChange}/></div>
            <div className="f-group"><label>Guardian Phone</label><input type="tel" name='guardianPhone' required onChange={handleChange}/></div>
            <div className="f-group full-width"><label>Home Address</label><input type="text" name='homeAdress' required onChange={handleChange}/></div>
            <div className="f-group full-width"><label>Primary Email</label><input type="email" name='email' required onChange={handleChange}/></div>
          </div>
        </section>

        <button type="submit" className="master-submit-btn">PROCEED TO REGISTRATION</button>
      </form>

      {submitted && (
        <div className="modal-overlay">
          <div className="success-modal">
            <LuCircleAlert size={50} color="#16a34a" />
            <h2>Application Successful!</h2>
            <p>Your data for <strong>D{price.toLocaleString()}</strong> has been saved. Visit the bursar to finalize.</p>
            <button className="close-btn" onClick={() => setSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}