import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, changePassword] = useState('')
  const [studentUser, changeStudentUser] = useState({})
  const navigate = useNavigate();

  async function authLogin(e){
    e.preventDefault();
                      // navigate('/sdash')


    if (userId.includes('2') && userId.length == 6){
                  navigate('/sdash')

      // try{
      //   let isExist = await fetch(`http://localhost:3000/profiles?id=${userId}`);
      //   let resIsExist = await isExist.json();
      //   if (resIsExist.length > 0){
      //     let apiData = resIsExist[0];
      //     console.log(apiData);

      //     if (apiData.password === password){
      //       changeStudentUser(apiData)
      //       localStorage.setItem('stUser', JSON.stringify(apiData));
      //       navigate('/sdash')
      //       } else{
      //       alert('Incorrect Password!')
      //     } 
      //     } else{
      //     alert('Invalid ID Format. Please check your credentials')
      //     } 
      //     }catch (e){
      //        alert('Your JSON server has issues')
      //   }


          } else if(userId.startsWith('TLB' || 'TSC' || 'TSS')){
            navigate('/tdash')
          } else if (userId.startsWith('an')){
            navigate('/adash')
          }else if (userId.startsWith('mn')){
            navigate('/mdash')
          }else if (userId.startsWith('b')){
            navigate('/bdash')
          }
    }

   

  return (
    <div className="login-wrapper">
      <div className="abstract-circle one"></div>
      <div className="abstract-circle two"></div>
      
      <div className="login-card">
        <div className="login-header">
          <h1 className="abr">NSCHS</h1>
          <h2>Portal Login</h2>
          <div className="orange-line"></div>
        </div>

        {/* Change: onSubmit goes HERE */}
        <form className="login-form" onSubmit={authLogin}>
          <div className="input-field">
            <span>Student or Staff ID</span>
            <input 
              type="text" placeholder="Enter ID number" required value={userId} onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="input-field">
            <span>Password</span>
            <input type="password" placeholder="••••••••" required value={password} onChange={(e)=> changePassword(e.target.value)}/>
          </div>

          <div className="form-help">
            <Link className='f-pass' href="#">Forget Password?</Link>
            <label><input type="checkbox" /> Stay logged in</label>
          </div>

          {/* Type="submit" now triggers the form's onSubmit */}
          <button type="submit" className="portal-btn">
            ENTER DASHBOARD
          </button>
        </form>

        <div className="login-footer">
          <p>Nursery • Primary • Secondary • Senior</p>
          <span>Official Ndows Comprehensive Portal</span>
        </div>
      </div>
    </div>
  );
}