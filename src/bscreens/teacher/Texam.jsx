import { useState } from 'react';
import "./texam.css";
import { LuBook, LuCirclePlus, LuClock, LuDownload, LuEye, LuFileSpreadsheet, LuImage, LuPlus, LuSave, LuSmilePlus, LuTrash2, LuType, LuUsers } from 'react-icons/lu';
import { TfiLayoutAccordionSeparated } from 'react-icons/tfi';

export default function Texam() {
  const [method, setMethod] = useState('manual'); // 'excel' or 'manual'
  const [questions, setQuestions] = useState([
    { id: 1, type: 'obj', q: '', a: '', b: '', c: '', d: '', correct: 'A', img: null }
  ]);
  const [theories, setTheories] = useState([{ id: 1, q: '' }]);

  // Add new Objective Question
  const addObj = () => {
    setQuestions([...questions, { id: Date.now(), type: 'obj', q: '', a: '', b: '', c: '', d: '', correct: 'A', img: null }]);
  };

  // Add new Theory Question
  const addTheory = () => {
    setTheories([...theories, { id: Date.now(), q: '' }]);
  };

  return (
    <div className="ex-container">
      {/* 1. Header & Setup */}
      <div className="ex-glass-header">
        <div className="ex-title-group">
          <h1>Exam Architect</h1>
          <p>Create WASSCE/GABECE Standard Papers</p>
        </div>
        
        <div className="ex-method-switch">
          <button className={method === 'excel' ? 'active' : ''} onClick={() => setMethod('excel')}>
            <LuFileSpreadsheet /> Excel Import
          </button>
          <button className={method === 'manual' ? 'active' : ''} onClick={() => setMethod('manual')}>
            <LuType /> Manual Entry
          </button>
        </div>
      </div>

      <div className="ex-config-bar">
        <div className="ex-input-wrap">
          <LuBook /> <input type="text" placeholder="Subject (e.g. Physics)" />
        </div>
        <div className="ex-input-wrap">
          <LuUsers /> <select><option>Grade 11 Science</option></select>
        </div>
        <div className="ex-input-wrap">
          <LuClock /> <input type="text" placeholder="Duration (e.g. 2hrs 30mins)" />
        </div>
      </div>

      {/* 2. Method: Excel Import */}
      {method === 'excel' && (
        <div className="ex-excel-card">
          <div className="ex-gliding-shine"></div>
          <TfiLayoutAccordionSeparated className="big-icon" />
          <h3>Import Exam Data</h3>
          <p>Download our template, fill it, and re-upload.</p>
          <div className="ex-excel-btns">
            <button className="ex-download-btn"><LuDownload /> Download Template</button>
            <button className="ex-upload-btn"><LuPlus /> Select Filled Excel</button>
          </div>
        </div>
      )}

      {/* 3. Method: Manual List Builder */}
      {method === 'manual' && (
        <div className="ex-manual-layout">
          <div className="ex-questions-list">
            <h3 className="section-divider">Part I: Objective (Multiple Choice)</h3>
            
            {questions.map((q, index) => (
              <div key={q.id} className="ex-q-card">
                <div className="ex-q-header">
                  <span>Question {index + 1}</span>
                  <button onClick={() => setQuestions(questions.filter(item => item.id !== q.id))}><LuTrash2 /></button>
                </div>
                <textarea placeholder="Enter question text here..."></textarea>
                
                <div className="ex-img-upload">
                  <LuImage /> <span>Add Diagram/Image</span>
                </div>

                <div className="ex-options-grid">
                  <div className="opt"><span className="tag">A</span><input type="text" placeholder="Option A" /></div>
                  <div className="opt"><span className="tag">B</span><input type="text" placeholder="Option B" /></div>
                  <div className="opt"><span className="tag">C</span><input type="text" placeholder="Option C" /></div>
                  <div className="opt"><span className="tag">D</span><input type="text" placeholder="Option D" /></div>
                </div>
              </div>
            ))}
            
            <button className="ex-add-btn" onClick={addObj}><LuCirclePlus /> Add Another Objective</button>

            <h3 className="section-divider" style={{marginTop: '50px'}}>Part II: Theory (Essay)</h3>
            {theories.map((t, index) => (
              <div key={t.id} className="ex-q-card theory">
                <div className="ex-q-header">
                  <span>Essay Question {index + 1}</span>
                  <button onClick={() => setTheories(theories.filter(item => item.id !== t.id))}><LuTrash2 /></button>
                </div>
                <textarea placeholder="Enter theory question or instructions..."></textarea>
              </div>
            ))}
            <button className="ex-add-btn" onClick={addTheory}><LuSmilePlus /> Add Theory Question</button>
          </div>

          {/* 4. Sticky Preview Sidebar */}
          <div className="ex-preview-sidebar">
            <div className="ex-gliding-shine"></div>
            <h3>Exam Summary</h3>
            <div className="summary-stat">Objectives: <strong>{questions.length}</strong></div>
            <div className="summary-stat">Theories: <strong>{theories.length}</strong></div>
            <hr />
            <button className="ex-preview-trigger"><LuEye /> Full Preview</button>
            <button className="ex-save-trigger"><LuSave /> Finalize & Send</button>
          </div>
        </div>
      )}
    </div>
  );
}