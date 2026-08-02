import { LuPlus, LuCalendarCheck, LuAward, LuClipboardPen, LuCloudUpload, LuFileChartColumnIncreasing, LuTriangleAlert} from "react-icons/lu";
import "./tdashboard.css";


export default function Tmain(){
    
    const handleExcelImport = () => {
        fileInputRef.current.click();
    };
    const teacherData = {
      name: "Modou Sarr",
      role: "Class Teacher (G11 Science)",
      stats: [
        { label: "Today's Attendance", val: "94%", icon: <LuCalendarCheck />, color: "var(--tp-accent)" },
        { label: "Pending Grading", val: "28", icon: <LuClipboardPen />, color: "var(--tp-gold)" },
        { label: "Materials Uploaded", val: "15", icon: <LuCloudUpload />, color: "#22c55e" }
      ]
    };

    return <>
          <main className="tp-main">
        <header className="tp-header">
          <div className="tp-welcome">
            <p>{teacherData.role}</p>
            <h1>Welcome back, {teacherData.name}</h1>
          </div>
          <div className="tp-header-actions">
            <button className="tp-btn-primary" onClick={() => alert("Initializing Class Session...")}>
              <LuPlus /> Start Session
            </button>
            <div className="tp-avatar">MS</div>
          </div>
        </header>

        <div className="tp-stats-grid">
          {teacherData.stats.map((s, i) => (
            <div key={i} className="tp-stat-card">
              <div className="tp-gliding-shine"></div>
              <div className="tp-stat-icon" style={{color: s.color, backgroundColor: `${s.color}15`}}>{s.icon}</div>
              <div>
                <span>{s.label}</span>
                <h3>{s.val}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="tp-dashboard-grid">
          <div className="tp-glass-card tp-main-panel">
            <div className="tp-gliding-shine"></div>
            <div className="tp-panel-head">
              <h3>Management Console</h3>
              <div className="tp-badge">Term 1 • 2026</div>
            </div>

            <div className="tp-action-grid">
              <div className="tp-action-tile">
                <h4>Examination System</h4>
                <p>Upload your WASSCE/GABECE standard questions.</p>
                <div className="tp-tile-btns">
                  <button onClick={handleExcelImport}><LuFileChartColumnIncreasing /> Import Excel</button>
                  <button className="outline" onClick={() => setShowExamModal(true)}>Type Manual</button>
                </div>
              </div>

              <div className="tp-action-tile">
                <h4>Grade Computation</h4>
                <p>Assignment(5) + Test(15) + HW(5) + Att(5) + Exam(70)</p>
                <button className="tp-btn-full" onClick={() => alert("Opening Gradebook...")}>
                  Launch Score Sheet
                </button>
              </div>
            </div>
          </div>

          <div className="tp-glass-card tp-side-panel">
            <h3>Management Feedback</h3>
            <div className="tp-status-list">
              <div className="tp-status-item award">
                <LuAward />
                <div><strong>Outstanding Teacher</strong><span>Feb 2026</span></div>
              </div>
              <div className="tp-status-item warning">
                <LuTriangleAlert />
                <div><strong>Submission Query</strong><span>Late Result Entry</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
}