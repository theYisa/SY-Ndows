import { useState } from 'react';
import "./tattendance.css";
import { LuCalendar, LuCheck, LuChevronLeft, LuFilter, LuSave, LuX } from 'react-icons/lu';

export default function Tattendance() {
  const [viewMode, setViewMode] = useState('class'); // 'class' or 'subject'
  
  // Sample Student Data
  const [students, setStudents] = useState([
    { id: 1, name: "Amadou Diallo", morning: true, noon: true, lesson: null },
    { id: 2, name: "Binta Bah", morning: true, noon: false, lesson: null },
    { id: 3, name: "Fatoumatta Jallow", morning: false, noon: false, lesson: null },
    { id: 4, name: "Ousman Sowe", morning: true, noon: true, lesson: null },
  ]);

  const toggleAttendance = (id, session) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, [session]: !s[session] } : s
    ));
  };

  return (
    <div className="at-container">
      <div className="at-glass-header">
        <div className="at-header-left">
          <button className="at-back-btn"><LuChevronLeft /> Back</button>
          <div>
            <h1>Attendance Register</h1>
            <p>Grade 11 Science • {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="at-mode-toggle">
          <button 
            className={viewMode === 'class' ? 'active' : ''} 
            onClick={() => setViewMode('class')}
          >
            Class Teacher (Home)
          </button>
          <button 
            className={viewMode === 'subject' ? 'active' : ''} 
            onClick={() => setViewMode('subject')}
          >
            Subject Teacher (Physics)
          </button>
        </div>
      </div>

      <div className="at-matrix-card">
        <div className="at-gliding-shine"></div>
        
        <div className="at-table-actions">
          <div className="at-info">
            <LuCalendar /> <span>Wednesday, 11th March 2026</span>
          </div>
          <div className="at-btns">
            <button className="at-filter-btn"><LuFilter /> Filter</button>
            <button className="at-save-btn"><LuSave /> Save Register</button>
          </div>
        </div>

        <div className="at-table-wrapper">
          <table className="at-table">
            <thead>
              <tr>
                <th>Student Name</th>
                {viewMode === 'class' && (
                  <>
                    <th className="center">Morning (8:00 AM)</th>
                    <th className="center">Noon (1:30 PM)</th>
                  </>
                )}
                {viewMode === 'subject' && (
                  <th className="center">Lesson Period</th>
                )}
                <th className="center">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="st-name">{student.name}</td>
                  
                  {viewMode === 'class' && (
                    <>
                      <td className="center">
                        <button 
                          className={`at-check-btn ${student.morning ? 'present' : 'absent'}`}
                          onClick={() => toggleAttendance(student.id, 'morning')}
                        >
                          {student.morning ? <LuCheck /> : <LuX />}
                        </button>
                      </td>
                      <td className="center">
                        <button 
                          className={`at-check-btn ${student.noon ? 'present' : 'absent'}`}
                          onClick={() => toggleAttendance(student.id, 'noon')}
                        >
                          {student.noon ? <LuCheck /> : <LuX />}
                        </button>
                      </td>
                    </>
                  )}

                  {viewMode === 'subject' && (
                    <td className="center">
                      <button 
                        className={`at-check-btn ${student.lesson ? 'present' : 'absent'}`}
                        onClick={() => toggleAttendance(student.id, 'lesson')}
                      >
                        {student.lesson ? <LuCheck /> : <LuX />}
                      </button>
                    </td>
                  )}

                  <td className="center">
                    <span className={`at-pill ${student.morning && student.noon ? 'active' : 'warning'}`}>
                      {student.morning ? 'Present' : 'Absent'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}