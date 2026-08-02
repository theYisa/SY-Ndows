import { useState } from 'react';
import { LuBookOpen, LuUsers, LuChartArea } from "react-icons/lu";

export default function Tcommentcard({ onSelectClass }) {
  const assignedClasses = [
    { id: 1, subject: "Physics", grade: "G11 Science A", students: 42, pending: 5 },
    { id: 2, subject: "Further Maths", grade: "G12 Science C", students: 38, pending: 12 },
    { id: 3, subject: "Basic Science", grade: "G9 JSS 2", students: 55, pending: 0 },
  ];

  return (
    <div className="hub-grid">
      {assignedClasses.map((item) => (
        <div key={item.id} className="subject-icon-card" onClick={() => onSelectClass(item)}>
          <div className="card-top">
            <div className="icon-box"><LuBookOpen /></div>
            <div className={`status-badge ${item.pending === 0 ? 'done' : 'work'}`}>
              {item.pending === 0 ? "Complete" : `${item.pending} Left`}
            </div>
          </div>
          
          <div className="card-body">
            <h3>{item.subject}</h3>
            <p><LuUsers /> {item.grade}</p>
          </div>

          <div className="card-footer">
            <span>{item.students} Students</span>
            <button className="enter-btn">Open Sheet <LuChartArea /></button>
          </div>
        </div>
      ))}
    </div>
  );
}