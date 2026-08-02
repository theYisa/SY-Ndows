import { useState } from 'react';
import "./tresult.css";
import { LuArrowRight, LuSearch, LuBookOpen, LuUsers, LuGraduationCap } from 'react-icons/lu';

export default function Tresult() {
  const [classes] = useState([
    { id: 1, subject: "Physics", grade: "Grade 11 Science A", students: 42 },
    { id: 2, subject: "Further Maths", grade: "Grade 12 Science C", students: 38 },
    { id: 3, subject: "Basic Science", grade: "Grade 9 JSS", students: 55 },
  ]);

  return (
    <div className="sr-container">
      <div className="sr-glass-header">
        <div className="sr-welcome">
          <h1>Result Management</h1>
          <p>Select a class to record continuous assessments and exams.</p>
        </div>
        
        {/* Top Right: View Any Student Result */}
        <div className="sr-global-search">
          <div className="sr-search-bar">
            <LuSearch />
            <input type="text" placeholder="View Student Results (Global)..." />
          </div>
          <button className="sr-view-btn"><LuGraduationCap /> View</button>
        </div>
      </div>

      <div className="sr-grid">
        {classes.map((item) => (
          <div key={item.id} className="sr-class-card">
            <div className="tp-gliding-shine"></div>
            <div className="sr-card-icon"><LuBookOpen /></div>
            <div className="sr-card-info">
              <h3>{item.subject}</h3>
              <p><LuUsers /> {item.grade}</p>
              <span>{item.students} Students Apportioned</span>
            </div>
            <button className="sr-enter-btn" onClick={() => window.location.href='/Tresultinputs'}>
              Manage Scores <LuArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}