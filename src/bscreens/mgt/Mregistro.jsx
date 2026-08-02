import { useEffect, useState } from 'react';
import './mregistro.css';
import { LuCircleAlert, LuKey, LuSearch, LuUserPen, LuUserPlus, LuUserX, LuX } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import './edituser.css';

export default function Mregistro() {
  const [usersList, changeUsersList] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [wordSearch, changeWordSearch] = useState('');
  const [editActive, changeEditActive] = useState(false);
 
  const baseUrl = 'http://localhost:5000/';

  // Conseguir todos Úsuarios'
   useEffect (()=>{
    async function fetchUsersAPI() {
      const resTCH = await fetch(`${baseUrl}tch/all-teachers`, { method: 'GET', headers: {"content-type": "application/json"} });
      const resSTD = await fetch(`${baseUrl}std/all-students`, { method: 'GET', headers: {"content-type": "application/json"} });
      const responseT = await resTCH.json();
      const responseS = await resSTD.json();
      if (responseT.success === true && responseS.success === true ){
        const dataT = responseT.message;
        const dataS = responseS.message;
        changeUsersList([...dataT, ...dataS]);
      } else{
        alert (`${responseT} and ${responseS}`);
      }
    }
    fetchUsersAPI();
  }, [])

  // Excluir uma Conta de Úsuario 
  async function deleteUserApi({userId, idNo}){
    if (window.confirm(`Delete Account of ${idNo}?`)){
      
      try{
      if (idNo?.includes('TLB') || idNo?.includes('TJS') || idNo?.includes('TSS')){
        const res = await fetch(`${baseUrl}tch/delete-teacher`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({id: userId})
          });
          const response = await res.json();
          if (response.success === true){
            changeUsersList(prev => prev.filter(k => k._id !== userId));
            alert('Account Deleted Successfully');
          } else{
            alert(`Server said: ${response.message}`);
          }
      } else {
        const res = await fetch(`${baseUrl}std/delete-student`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({id: userId})
          });
          const response = await res.json();
          if (response.success === true){
            changeUsersList(prev => prev.filter(k => k._id !== userId));
            alert('Account Deleted Successfully');
          } else{
            alert(`Server said: ${response.message}`);
          }
      }
        
      } catch (e){
        alert(`The error is ${e.message}`);
      }
    }
  }

  // Mudar o Status de Úsuarios 
  async function changeStatusAPI({userId, ndowsID, newStatus}){
      if (window.confirm(`Proceed to ${newStatus} User ${ndowsID}?`)){

        try{
              if (ndowsID?.includes('TLB') || ndowsID?.includes('TJS') || ndowsID?.includes('TSS')){
                  const res = await fetch(`${baseUrl}tch/update-status`, {
                      method: 'PATCH',
                      headers: {'content-type': 'application/json'},
                      body: JSON.stringify({idNo: userId, status: newStatus})
                  });
                  const response = await res.json();
                  if (response.success === true){
                    changeUsersList(prev => prev.map(user => 
                        user._id === userId ? { ...user, status: newStatus } : user
                      ));
                      alert(`Account is now ${newStatus}`);
                    }
              } else{
                  const res = await fetch(`${baseUrl}std/update-status`, {
                      method: 'PATCH',
                      headers: {'content-type': 'application/json'},
                      body: JSON.stringify({idNo: userId, status: newStatus})
                  });
                  const response = await res.json();
                  if (response.success === true){
                    changeUsersList(prev => prev.map(user => 
                        user._id === userId ? { ...user, status: newStatus } : user
                      ));
                      alert(`Account is now ${newStatus}`);
                    }
                  }
            } catch (e){
             alert(e.message);
        }
      }

    }


  const pendingCount = usersList.filter(e => 
    e.status?.toLowerCase().includes('pending') || 
    e.eType?.toLowerCase().includes('probation')
  ).length;

  const filteredUser = usersList.filter((e)=>{
    const searched = wordSearch.trim().toLowerCase();
    const fullName = `${e.firstName} ${e.middleName} ${e.lastName}`.toLowerCase();
    const exist = fullName.includes(searched);

    let sortTab = false;
    if (activeTab =='all'){
      sortTab = true;
    } else if (activeTab == 'pending'){
      sortTab = e.eType?.toLowerCase().includes('unverified') || e.eType?.toLowerCase().includes('probation');
    } else if (activeTab == 'teachers'){
      sortTab = e.role?.toLowerCase().includes('teacher')
    } 
    return sortTab && exist;
  })

  // -------------------------------------------------------------------------------------------------------------
  // Mudar uma coisa sobre um estudante ou outro usuario

    const { mId, nId } = useParams(); 
  const navigate = useNavigate();
  const [userData, changeUserData] = useState({});

  function handleSubmit(e){
    const { name, value } = e.target;
    changeUserData({ ...userData, [name]: value});
  }

  function handleFileChange(e){
    const file = e.target.files[0];
    if (file){
      const reader = new FileReader();
      reader.onloadend = function(){
        changeUserData({...userData, img: reader.result});
      };
      reader.readAsDataURL(file);
    }
  }

  const isTeacher = nId?.includes('TLB') || nId.includes('TJS') || nId.includes('TSS');

  useEffect(() => {
    async function getUserAPI() {
      const path = isTeacher ? 'tch/all-teachers' : 'std/all-students';

      const res = await fetch(`${baseUrl}${path}`, {headers: {'content-type': 'application/json'},method: 'GET',});
      const response = await res.json();
      if (response.success) {
        const user = response.message.find(u => u._id === mId);
        alert(JSON.stringify(user));
        changeUserData({...user, password: '********'});
      }
      
    }
    if (mId && nId) getUserAPI();
  }, [mId, nId]);

  async function updateUserAPI() {
    try {

      const path = isTeacher ? '/update-teacher' : '/update-student';
      const res = await fetch(`${baseUrl}${path}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: mId, update: userData })
      });
      const data = await res.json();
      if (data.success) {
        alert(`${isTeacher ? 'Teacher' : 'Student'} updated successfully!`);
        navigate('/mdash/registry');
      }
    } catch (err) {
      alert("Error updating: " + err.message);
    }
  }

  const teacherFormList = [
    {title: 'Staff Photo', action: 'img'},
    {title: 'idNo', action: 'idNo'},

    {title: 'Salutation', action: 'salutation'},
    {title: 'First Name', action: 'firstName'},
    {title: 'Middle Name', action: 'middleName'},
    {title: 'Last Name', action: 'lastName'},
    {title: 'Email', action: 'email'},
    {title: 'Phone', action: 'phone'},
    {title: 'Gender', action: 'gender'},
    {title: 'Designation', action: 'designation'},
    {title: 'Type of Employment', action: 'eType'},
    {title: 'Date of Employment', action: 'eDate'},
    {title: 'Grade Level', action: 'gLevel'},
    {title: 'Activation Status', action: 'status'},
    {title: 'School', action: 'school'},
    {title: 'Teachers Qualifications', action: 'qualifications'},
    {title: 'Password', action: 'password'},
    {title: 'Date of Birth', action: 'dob'},
 
  ];

    const studentFormList = [
    {title: 'Student Photo', action: 'img'},
    {title: 'idNo', action: 'idNo'},
    {title: 'First Name', action: 'firstName'},
    {title: 'Middle Name', action: 'middleName'},
    {title: 'Last Name', action: 'lastName'},
    {title: 'Email', action: 'email'},
    {title: 'Phone', action: 'phone'},
    {title: 'Gender', action: 'gender'},
    {title: 'Activation Status', action: 'status'},
    {title: 'School', action: 'school'},
    {title: 'Password', action: 'password'},
    {title: 'Date of Birth', action: 'dob'},
    {title: 'Nationality', action: 'nationality'},
    {title: 'Aspiring Class', action: 'aspClass'},
    {title: 'Current Class', action: 'currentClass'},
    {title: 'Department', action: 'department'},
    {title: 'Previous School', action: 'prevSchool'},
    {title: 'Father Name', action: 'fathertName'},
    {title: 'Mother Name', action: 'motherName'},
    {title: 'Guardian Name', action: 'guardianName'},
    {title: 'Guardian Phone', action: 'guardianPhone'},
    {title: 'Home Adress', action: 'homeAdress'},
    {title: 'Registration Date', action: 'eDate'},
    {title: 'House', action: 'hous'},

  ];

  let formList = isTeacher  ? teacherFormList : studentFormList;


  return (
    <div className="mr-container">
    <header className="mr-head">
        <div className='heads'>
          <h1>Account Registry</h1>
          <p>Manage, Approve, and Amend Student & Staff credentials</p>
        </div>
        <Link className="btn-primary" to='/mdash/registry/register'>
          <LuUserPlus /> <span>Register New Teacher</span>
        </Link>
      </header>

      <div className="filter-bar glass-box">
        <div className="search-input">
          <LuSearch />
          <input type="text" placeholder="Search by name, ID, or email..." onChange={(k)=> changeWordSearch(k.target.value)}/>
        </div>
        <div className="tabs">
          {['all', 'pending', 'teachers'].map(tab => (
            <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)} >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === 'pending' && <span className={`badge ${pendingCount > 0 ? 'countActive' : ''}`} >{pendingCount > 0 ? pendingCount : ''}</span>}
            </button>
          ))}
        </div>
      </div>
      
    <div className="full-table glass-box">
      <div className="wrapper-table">
        <table>
            <tr>
              <th>User</th>
              <th>ID / Type</th>
              <th>Joined Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            {filteredUser.length > 0  ? filteredUser.map((e)=> <tr>
            <td>
                <div className="user-info">
                  <div className="user-avatar">{e.firstName ? `${e.firstName.charAt(0)} ${e.lastName.charAt(0)}` : '...'}</div>
                  <div>
                    <strong>{e.lastName ? `${e.salutation ?? ''} ${e.firstName} ${e.lastName}` : '...'}</strong>
                    <span>{e.email ? e.email : '...'}</span>
                  </div>
                </div>
              </td>
            <td><span className={`type-pill ${e.role ? e.role: ''}`} >{e.role ? `${e.role.charAt(0).toUpperCase()}${e.role.slice(1)}` : '...'}</span></td>
            <td>{e.eDate}</td>
            <td><span className={`status-pill ${e.status ? e.status.toLowerCase() : 'pending'}`}>{e.status}</span></td>
              <td className="actions">
                <button title="Edit User Details" className="action-btn edit" onClick={`/mdash/registry/edit/${e._id}/${e.idNo}`}><LuUserPen /></button>
                <button title="Deactivate Account" className="action-btn deactivate" onClick={()=> changeStatusAPI({userId: e._id, ndowsID: e.idNo, newStatus: e.status === 'Active' ? 'Pending' : 'Active'})}><LuCircleAlert /></button>
                <button title="Delete" className="action-btn delete" onClick={()=> deleteUserApi({userId: e._id, idNo: e.idNo})}><LuX /></button>
              </td>
            </tr>) 
            : <tr><td colSpan="5" style={{padding: '20px', textAlign: 'center'}}>
                  {wordSearch.length > 0 ? "No result online found for this search" : "Nothing to Show for Now... Kindly Refresh!"}
                </td></tr>}
        </table>
      </div>
    </div>
        
    
    <div className="edit-container">
      <h2 className='edit-head'>{isTeacher ? `Update Teacher:` : `Update Student`} {userData.idNo ?? 'Applicant'}</h2>
      

      <form className='edit-form' onSubmit={updateUserAPI}>
        {formList.map((e, i)=> i == 0 ? <label className='edit-label'>
                              <div className="updatecolumn"> <span>New Image?</span> <input type='file' accept='image/*' onChange={handleFileChange}/> </div>
                              {userData.img && <img src={userData.img} alt="Preview" className="mini-preview" />}
                            </label>
                    :<label className='label-row'>{e.title}
                        <input type="text" value={userData[e.action] || ''} name={e.action} onChange={handleSubmit} placeholder={e.title} readOnly={e.action === 'idNo'}/>
                      </label>
        )}
        <input type="text" value={isTeacher ? userData.primaryAssign : userData.House} name='primaryAssign' onChange={handleSubmit} placeholder='Primary Assignments'/>

        <div className="form-actions">
          <button type="submit" className="btn-save">Save Changes</button>
          <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
    </div>
  );
}