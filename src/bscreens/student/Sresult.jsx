import React, { useState } from 'react';
import { LuSearch, LuChevronDown, LuChevronUp, LuFilter, LuTrendingUp, LuDna } from "react-icons/lu";
import './sresult.css'

export default function Sresult () {
  const [activeSubject, setActiveSubject] = useState(null);

  const academicData = {
    currentSession: "2025/2026",
    currentTerm: "Second Term",
    gpa: "3.72",
    subjects: [
      {
        id: 1,
        name: "English Language",
        total: 82,
        grade: "A1",
        breakdown: [
          { title: "Assignment 1", score: 10, max: 10 },
          { title: "Assignment 2", score: 8, max: 10 },
          { title: "Test 1 (Continuous Assessment)", score: 12, max: 15 },
          { title: "Mid-Term Test", score: 13, max: 15 },
          { title: "Final Examination", score: 39, max: 50 }
        ]
      },
      {
        id: 2,
        name: "Mathematics",
        total: 78,
        grade: "B2",
        breakdown: [
          { title: "Assignment 1", score: 9, max: 10 },
          { title: "Weekly Quiz", score: 7, max: 10 },
          { title: "Mid-Term Exam", score: 22, max: 30 },
          { title: "Final Examination", score: 40, max: 50 }
        ]
      }
    ]
  };

  return (
    <div className="r-full">

      <header className="r-header glass-box">
        <div className="header-text">
          <h2>Academic Records</h2>
          <p>Detailed performance breakdown for {academicData.currentSession}</p>
        </div>
        
        <div className="filter-group">
          <div className="select-wrapper"> <LuFilter className="filter-icon" />
            <select className="archive-select">
              <option>2025/2026 Session</option>
              <option>2024/2025 Session</option>
              <option>2023/2024 Session</option>
              <option>2022/2023 Session</option>
            </select>
          </div>
          <div className="select-wrapper">
            <select className="archive-select">
              <option>Second Term</option>
              <option>First Term</option>
              <option>Third Term</option>
            </select>
          </div>
        </div>
      </header>

      <div className="gpa-card glass-box">
        <div className="gpa-info">
          <span>Current Term GPA</span>
          <h3>{academicData.gpa}</h3>
        </div>
        <LuTrendingUp className="trend-icon" />
      </div>

      <div className="subjects-archive-list">
        {academicData.subjects.map((subject) => (
          <div key={subject.id} className={`subject-item glass-box ${activeSubject === subject.id ? 'open' : ''}`}>
            <div className="subject-summary" onClick={() => setActiveSubject(activeSubject === subject.id ? null : subject.id)}>
              <div className="sub-main">
                <div className="sub-icon"><LuDna /></div>
                <div className='subject'>
                  <h4>{subject.name}</h4>
                  <span className="sub-status">Completed</span>
                </div>
              </div>
              <div className="sub-score">
                <span className={`grade-tag ${subject.grade.charAt(0)}`}>{subject.grade}</span>
                <span className="total-percent">{subject.total}%</span>
                {activeSubject === subject.id ? <LuChevronUp /> : <LuChevronDown />}
              </div>
            </div>

            {activeSubject === subject.id && (
              <div className="subject-details">
                <div className="detail-table">
                  <div className="detail-header">
                    <span>Assessment Type</span>
                    <span>Score</span>
                  </div>
                  {subject.breakdown.map((item, index) => (
                    <div key={index} className="detail-row">
                      <span>{item.title}</span>
                      <span className="score-val"><strong>{item.score}</strong> / {item.max}</span>
                    </div>
                  ))}
                  <div className="detail-footer">
                    <span>Total Weighted Score</span>
                    <span>{subject.total}/100</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}