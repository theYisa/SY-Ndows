import { useState } from 'react';
import './mupload.css';
import { LuDownload, LuFileText, LuFileUp, LuFolderOpen, LuSearch, LuTrash2 } from 'react-icons/lu';

export default function Mupload() {
  const [uploadType, setUploadType] = useState('Transcript');
  const [recipient, setRecipient] = useState('Student');

  // Mock Data for Files already Online
  const existingFiles = [
    { id: 1, name: "Grade10_Broadsheet.pdf", type: "Result", target: "10A Students", date: "12 Mar 2026", size: "2.4MB" },
    { id: 2, name: "Employment_Contract_Jallow.pdf", type: "HR", target: "Staff: Alami J.", date: "10 Mar 2026", size: "1.1MB" },
    { id: 3, name: "InterSchool_Report.docx", type: "Admin", target: "Ndows HQ", date: "05 Mar 2026", size: "850KB" },
  ];

  return (
    <div className="upload-container">
      <header className="up-header">
        <div>
          <h1>File Management Portal</h1>
          <p>Securely upload and distribute school documents</p>
        </div>
      </header>

      <div className="upload-grid">
        {/* LEFT SIDE: UPLOAD NEW DOCUMENT */}
        <section className="upload-section glass-box">
          <h3><LuFileUp className="icon-blue" /> Upload New Document</h3>
          
          <div className="drop-zone">
            <LuFileUp size={40} />
            <p>Drag and drop files here or <span>Browse</span></p>
            <input type="file" className="file-input-hidden" />
          </div>

          <div className="upload-form">
            <div className="up-group">
              <label>Document Type</label>
              <select value={uploadType} onChange={(e) => setUploadType(e.target.value)}>
                <option value="Transcript">Student Transcript</option>
                <option value="Syllabus">Curriculum / Syllabus</option>
                <option value="ID">Identification Cards</option>
                <option value="Contract">Staff Contract</option>
                <option value="Notice">Official Notice</option>
              </select>
            </div>

            <div className="up-group">
              <label>Recipient Category</label>
              <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                <option value="Student">Specific Student</option>
                <option value="Teacher">Specific Teacher</option>
                <option value="Class">Entire Class (e.g. 10A)</option>
                <option value="NdowsBranch">Another Ndows School</option>
                <option value="HQ">Big Manager (HQ)</option>
              </select>
            </div>

            <div className="up-group">
              <label>Specific Target Name / ID</label>
              <input type="text" placeholder="Search by name, ID or branch..." />
            </div>

            <button className="btn-primary up-full-btn">Process & Upload</button>
          </div>
        </section>

        {/* RIGHT SIDE: RECENTLY UPLOADED (ONLINE) */}
        <section className="library-section glass-box">
          <div className="lib-header">
            <h3><LuFolderOpen className="icon-green" /> Online Repository</h3>
            <div className="lib-search">
              <LuSearch />
              <input type="text" placeholder="Filter files..." />
            </div>
          </div>

          <div className="file-list">
            {existingFiles.map(file => (
              <div className="file-item" key={file.id}>
                <div className="file-icon">
                   <LuFileText size={22} />
                </div>
                <div className="file-info">
                  <strong>{file.name}</strong>
                  <span>To: {file.target} • {file.size}</span>
                </div>
                <div className="file-meta">
                   <span>{file.date}</span>
                   <div className="file-actions">
                     <button title="Download"><LuDownload /></button>
                     <button title="Delete" className="del-btn"><LuTrash2 /></button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}