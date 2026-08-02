import { useEffect, useState } from 'react';
import './sprofile.css'
import { LuMail, LuMapPin, LuCalendar, LuShieldCheck, LuMessageSquare, LuLock, LuCamera } from "react-icons/lu";

export default function Sprofile() {
  const [user, changeUser] = useState({});
  const [comments, changeComments] = useState ([]);

  useEffect(()=>{
    const savedUser = localStorage.getItem('stUser');
    if (savedUser){
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);
      changeUser(currentUser);

      async function commentsAPI(user){

      const isExist = await fetch(`http://localhost:3000/comments?studentId=${user}`);
      if (isExist){
        const resIsExist = await isExist.json();
        console.log(resIsExist);
        changeComments(resIsExist);
      }
    }   commentsAPI(currentUser.id);
    };
      
  }, []);

  

  return (
    <div className="p-full">
      <div className="p-grid">
        
        <aside>
          <div className= {`id-card glass-box`}>
            <div className="glide-shine"></div>
            <div className="avatar-wrapper">
              <div className="profile-avatar">
              { user.profilePicture ? <img src={user.profilePicture}/>  : 'AB'}
              </div>
              <button className="edit-avatar"><LuCamera /></button>
            </div>
            <div className="id-details">
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <span className="id-tag">{user.id}</span>
            </div>
            
            <div className="info-list">
              <div className="info-item"><LuMail /> {user.email}</div>
              <div className="info-item"><LuMapPin /> {user.address}</div>
              <div className="info-item"><LuCalendar /> Born {user.dob}</div>
              <div className="info-item"><LuShieldCheck /> Enrolled {user.enrollmentYear}</div>
            </div>

            <button className="change-pass-btn"><LuLock /> Change Password </button>
          </div>
          <div className={`house-box glass-box`}>
            <div className="glide-shine"></div>
             <h4>School House</h4>
             <div className={`house-badge ${user.sportHouse == 'Red Dragons' ? 'r' : user.sportHouse == 'Blue Sharks' ? 'b' : user.sportHouse == 'Yellow Tigers' ? 'y' : 'g'}`}>{user.sportHouse}</div>
          </div>
        </aside>
        <main className="comments-col">
          <div className="section-header">
            <div className="commentFetch">
              <h3><LuMessageSquare /> Teacher Comments & Remarks</h3>
            </div> <p>Recent feedback from your subject instructors</p> </div>

            <div className="comments-timeline">
              {comments.map((e, i) => (
                <div key={i} className="comment-bubble glass-box">
                  <div className="comment-meta">
                    <strong>{e.teacherName}</strong>
                    <span className="sub-tag">{e.role}</span>
                    <span className="time-ago">2 ago ago</span>
                  </div>
                  <p className="comment-text">"{e.text}"</p>
                </div>
              ))}
            </div>
        </main>

      </div>
    </div>
  );
}