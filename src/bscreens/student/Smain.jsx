import { useEffect, useState } from "react";
import "./smain.css";
import { LuBell, LuChevronRight } from 'react-icons/lu';

export default function Smain(){
  const [finance, changeFinance] = useState(null);
  const [user, changeUser] = useState(null);

  useEffect(()=>{
    const savedUser = localStorage.getItem('stUser');
    if (savedUser){
      const student = JSON.parse(savedUser);
      changeUser(student);

    async function fetchFinanceAPI(userId){
      const baseUrl = `http://localhost:3000/finances?studentId=${userId}`;
      const exist = await fetch(baseUrl);
      if (exist){
        const existRes = await exist.json();
        console.log(existRes[0]);
        changeFinance(existRes[0])
      }
    } 
    fetchFinanceAPI(student.id);
    }
  }, [])





      // Mock data for the student
  const student = {
    stats: {
      attendance: "92%",
      average: "84%"
    }
  };
    return <>
        <main className="student-content">
        <header className="glass-header">
          <div className="user-welcome">
            <p>Welcome back,</p>
            <h1>{`${user? user.firstName : 'Loading...'} ${user ?user.lastName : ''}`}</h1>
          </div>

          <div className="header-actions">
            <div className="notification-bell"><LuBell /></div>
            <div className="profile-circle">{user ? user.firstName.charAt(0) : ''}</div>
          </div>
        </header>

        <section className="stat-engraved-grid">
          <div className="engraved-card card-gold">
            <span>Tuition Paid</span>
            <h3>{finance ? finance.percentPaid : 'Wait...' }%</h3>
            <div className="progress-bar"><div className="fill" style={{width: `${finance ? finance.percentPaid : 0}%`}}></div></div>
          </div>
          <div className="engraved-card card-blue">
            <span>Attendance</span>
            <h3>{student.stats.attendance}</h3>
            <p>On Track</p>
          </div>
          <div className="engraved-card card-purple">
            <span>GPA Average</span>
            <h3>{student.stats.average}</h3>
            <p>Top 10% of Class</p>
          </div>
        </section>

        <div className="main-grid-area">
          <div className="action-center glass-box">
            <h3>Quick Actions</h3>
            <div className="quick-links">
              <div className="q-link">Print Report Card <LuChevronRight /></div>
              <div className="q-link">Take Mock Quiz <LuChevronRight /></div>
              <div className="q-link">Class Timetable <LuChevronRight /></div>
              <div className="q-link">Lodge Complaint <LuChevronRight /></div>
            </div>
          </div>

          <div className="announcement-box glass-box">
            <h3>School Notices</h3>
            <div className="notice-item">
              <span className="date">Mar 15</span>
              <p>WASSCE Prep classes start Monday at 3 PM.</p>
            </div>
            <div className="notice-item">
              <span className="date">Mar 18</span>
              <p>Inter-house Sports Day: Remember your jerseys!</p>
            </div>
          </div>
        </div>
      </main>
    </>
}