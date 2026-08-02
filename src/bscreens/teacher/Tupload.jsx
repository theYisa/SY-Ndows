import { useState } from 'react';
import "./tupload.css";
import { 
  LuFilePlus, LuFileText, LuTrash2, LuDownload, 
  LuSearch, LuBook, LuFolder, LuCheck, 
  LuCloudUpload
} from "react-icons/lu";

export default function Tupload() {
  const [files, setFiles] = useState([
    { id: 1, name: "Physics_Term1_Syllabus.pdf", size: "1.2 MB", type: "PDF", date: "2026-03-10" },
    { id: 2, name: "WASSCE_Past_Questions_2025.docx", size: "4.5 MB", type: "DOCX", date: "2026-02-28" },
    { id: 3, name: "Electric_Circuits_Diagram.jpg", size: "800 KB", type: "IMG", date: "2026-03-01" },
  ]);

  const [isUploading, setIsUploading] = useState(false);

  const deleteFile = (id) => {
    if(window.confirm("Are you sure you want to delete this material?")) {
      setFiles(files.filter(f => f.id !== id));
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      alert("Material uploaded successfully!");
    }, 2000);
  };

  return (
    <div className="mat-container">
      <div className="mat-glass-header">
        <div className="mat-title">
          <h1>Resource Vault</h1>
          <p>Manage textbooks, notebooks, and study guides</p>
        </div>
        
        <div className="mat-search-wrap">
          <LuSearch />
          <input type="text" placeholder="Search your library..." />
        </div>
      </div>

      <div className="mat-layout">
        {/* LEFT: UPLOAD SECTION */}
        <aside className="mat-upload-card">
          <div className="tp-gliding-shine"></div>
          <h3><LuFilePlus /> New Upload</h3>
          <p>Drag and drop files here or click to browse.</p>
          
          <div className="drop-zone">
            <LuCloudUpload className="upload-icon" />
            <input type="file" id="fileIn" hidden />
            <label htmlFor="fileIn">Select File</label>
          </div>

          <div className="upload-meta">
            <select className="mat-select">
              <option>Select Subject</option>
              <option>Physics</option>
              <option>Further Maths</option>
            </select>
            <select className="mat-select">
              <option>Select Class</option>
              <option>Grade 11 Science</option>
              <option>Grade 12 Science</option>
            </select>
          </div>

          <button 
            className={`upload-btn ${isUploading ? 'loading' : ''}`} 
            onClick={handleUpload}
          >
            {isUploading ? "Uploading..." : <><LuCheck /> Upload to Library</>}
          </button>
        </aside>

        {/* RIGHT: LIBRARY LIST */}
        <main className="mat-library">
          <div className="library-header">
            <h3><LuFolder /> My Materials ({files.length})</h3>
          </div>

          <div className="file-list">
            {files.map((file) => (
              <div key={file.id} className="file-item">
                <div className="file-info">
                  <div className="file-icon"><LuFileText /></div>
                  <div className="file-details">
                    <span className="file-name">{file.name}</span>
                    <span className="file-meta">{file.type} • {file.size} • Uploaded {file.date}</span>
                  </div>
                </div>
                
                <div className="file-actions">
                  <button className="btn-down"><LuDownload /></button>
                  <button className="btn-del" onClick={() => deleteFile(file.id)}><LuTrash2 /></button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}