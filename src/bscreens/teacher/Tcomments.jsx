import { useState } from 'react';
import Tcommentcard from '../../components/Tcommentcard';
import './tcomments.css'
import { LuUser, LuHistory, LuQuote, LuCircleCheck, LuArrowLeft, LuChevronRight } from "react-icons/lu";

export default function Tcomments() {
  const [view, setView] = useState('hub'); // 'hub' or 'entry'
  const [activeClass, setActiveClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="comm-container">
      <div className="comm-layout">
        
        {/* LEFT: CLASS TEACHER HUB (Guidance View) */}
        <aside className="comm-sidebar">
          <div className="comm-card-header">
            <h3><LuUser /> My Class (G11A)</h3>
            <p>Insights from other teachers</p>
          </div>
          
          <div className="student-list">
            {/* Student list items here... */}
            <div className="student-item active" onClick={() => setSelectedStudent({name: "Amadou Diallo"})}>
              <span>Amadou Diallo</span>
              <LuChevronRight />
            </div>
          </div>

          {selectedStudent && (
            <div className="peer-insights-wall">
               <h4><LuHistory /> Feedback for {selectedStudent.name}</h4>
               <div className="peer-note">
                  <strong>Mathematics</strong> • <span>Mr. Sow</span>
                  <p><LuQuote /> Great logic, needs better punctuality.</p>
               </div>
               {/* Final Class Teacher Remark Box */}
            </div>
          )}
        </aside>

        {/* RIGHT: SUBJECT TEACHER HUB (Entry View) */}
        <main className="comm-main">
          {view === 'hub' ? (
            <>
              <div className="comm-card-header">
                <h3>Select Class to Comment</h3>
              </div>
              <Tcommentcard onSelectClass={(cls) => {
                setActiveClass(cls);
                setView('entry');
              }} />
            </>
          ) : (
            <div className="entry-view">
              <button className="back-link" onClick={() => setView('hub')}>
                <LuArrowLeft /> Back to Classes
              </button>
              <div className="entry-header">
                <h2>{activeClass.subject} - {activeClass.grade}</h2>
              </div>

              <table className="entry-table">
                <thead>
                  <tr><th>Student</th><th>Weekly Comment</th><th>Done</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amadou Diallo</td>
                    <td><textarea placeholder="Write comment..."></textarea></td>
                    <td><button className="btn-check"><LuCircleCheck /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}