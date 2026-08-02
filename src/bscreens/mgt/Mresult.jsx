import { useState } from 'react';
import './mresult.css';
import { LuFileSpreadsheet, LuLock, LuPrinter, LuSearch, LuTriangleAlert, LuUser } from 'react-icons/lu';

export default function Mresult() {
  const [viewScope, setViewScope] = useState('class');

  // RAW DATA EXAMPLE (Place inside the function for easy mapping)
  const rawData = {
    subjects: ["Math", "English", "Physics", "Chemistry", "Biology", "ICT"],
    students: [
      { id: "ND-102-A", name: "Alieu Mansaray", class: "10A", grade: "10", scores: { Math: 85, English: 72, Physics: 90, Chemistry: 88, Biology: 94, ICT: 82 }, amended: ["Physics"] },
      { id: "ND-105-A", name: "Fatou Jallow", class: "10A", grade: "10", scores: { Math: 45, English: 50, Physics: 38, Chemistry: 42, Biology: 55, ICT: 60 }, amended: [] },
      { id: "ND-201-B", name: "John Doe", class: "11B", grade: "11", scores: { Math: 70, English: 65, Physics: 60, Chemistry: 55, Biology: 80, ICT: 75 }, amended: [] }
    ]
  };

  return (
    <div className="results-container">
      <header className="res-header">
        <div>
          <h1>
            {viewScope === 'student' && "Student Transcript"}
            {viewScope === 'class' && "Class Broad Sheet"}
            {viewScope === 'grade' && "Grade Level Overview"}
            {viewScope === 'school' && "School-Wide Performance"}
          </h1>
          <p>Review and manage academic performance data</p>
        </div>
        <div className="res-actions">
          <button className="btn-outline"><LuPrinter /> Print</button>
          <button className="btn-primary"><LuFileSpreadsheet /> Export</button>
        </div>
      </header>

      {/* FILTER SYSTEM */}
      <div className="res-filter-bar glass-box">
        <div className="filter-group">
          <label>View Scope</label>
          <select value={viewScope} onChange={(e) => setViewScope(e.target.value)}>
            <option value="student">Individual Student</option>
            <option value="class">Specific Class</option>
            <option value="grade">Full Grade</option>
            <option value="school">Entire School</option>
          </select>
        </div>

        {viewScope !== 'school' && (
          <div className="filter-group">
            <label>{viewScope === 'grade' ? 'Select Grade' : 'Select Class'}</label>
            <select>
              <option>Grade 10A</option>
              <option>Grade 11B</option>
            </select>
          </div>
        )}

        <div className="search-box">
          <LuSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* DYNAMIC TABLE */}
      <div className="sheet-container glass-box">
        <div className="sheet-scroll">
          <table className="broad-sheet">
            <thead>
              <tr>
                <th className="sticky-col">Student Name</th>
                {/* School view might show Class/Grade columns instead of all subjects */}
                {viewScope === 'school' && <th>Class</th>}
                
                {rawData.subjects.map(sub => <th key={sub}>{sub}</th>)}
                
                <th>Total</th>
                <th>Avg</th>
                {viewScope !== 'student' && <th>Pos.</th>}
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rawData.students
                .filter(s => {
                   if(viewScope === 'class') return s.class === "10A"; // Example Filter
                   if(viewScope === 'grade') return s.grade === "10";
                   return true;
                })
                .map((student, index) => {
                  const scoreVals = Object.values(student.scores);
                  const total = scoreVals.reduce((a, b) => a + b, 0);
                  const avg = (total / rawData.subjects.length).toFixed(1);

                  return (
                    <tr key={student.id}>
                      <td className="sticky-col">
                        <div className="s-name">
                          <strong>{student.name}</strong>
                          <span>{student.id}</span>
                        </div>
                      </td>

                      {viewScope === 'school' && <td>{student.class}</td>}

                      {rawData.subjects.map(sub => (
                        <td key={sub}>
                          <div className={`editable-score ${student.amended.includes(sub) ? 'amended' : ''}`}>
                            {student.scores[sub]}
                            {student.amended.includes(sub) && <span className="amend-dot"></span>}
                          </div>
                        </td>
                      ))}

                      <td><strong>{total}</strong></td>
                      <td><strong>{avg}%</strong></td>
                      {viewScope !== 'student' && <td>{index + 1}</td>}
                      <td>
                        <span className={`res-pill ${avg >= 50 ? 'pass' : 'fail'}`}>
                          {avg >= 50 ? 'Passed' : 'Probation'}
                        </span>
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="res-footer glass-box">
        <div className="audit-note">
          <LuTriangleAlert className="warn-icon" />
          <p>Principal Override Mode is <strong>Active</strong></p>
        </div>
        <div className="lock-status">
          <button className="lock-btn active"><LuLock /> Results Locked</button>
        </div>
      </footer>
    </div>
  );
}