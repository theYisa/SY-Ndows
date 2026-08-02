import './bulletin.css';
import { LuCalendar, LuMegaphone, LuArrowRight, LuTrophy, LuBookOpen } from "react-icons/lu";

export default function Bulletin() {
  const events = [
    { date: "Mar 15", title: "Inter-House Athletics", type: "Sports", color: "#16a34a" },
    { date: "Mar 22", title: "Term 2 Exams Begin", type: "Academic", color: "#dc2626" },
    { date: "Apr 05", title: "Easter Break Starts", type: "Holiday", color: "#B8860B" }, // Gold for holidays
  ];

  const notices = [
    { 
      id: 1, 
      category: "URGENT", 
      title: "Mid-Term Assessment", 
      text: "Reports are now available for pickup at the Admin office or via the digital portal.",
      type: "urgent" 
    },
    { 
      id: 2, 
      category: "CLUBS & SOCIETIES", 
      title: "Debate Club Finals", 
      text: "Join us this Friday in the Main Hall for the Inter-School debating championship.",
      type: "info" 
    },
    { 
      id: 3, 
      category: "ACADEMIC", 
      title: "WASSCE Prep Sessions", 
      text: "Extra weekend classes for Senior Secondary students begin this Saturday at 9:00 AM.",
      type: "reminder" 
    }
  ];

  return (
    <div className="news-page">
      <div className="sizedbox"></div>

      {/* --- HERO SECTION: GOLD THEME --- */}
      <section className="news-hero">
        <div className="news-hero-content">
          <h1>Campus <span className="highlight-gold">Bulletin</span></h1>
          <p>The heartbeat of Ndows Comprehensive Senior High School.</p>
        </div>
      </section>

      {/* --- MAIN UPDATES GRID --- */}
      <section className="updates-container">
        
        {/* LEFT: TIMELINE CALENDAR */}
        <div className="timeline-section">
          <div className="section-header">
            <LuCalendar size={28} color="#B8860B" />
            <h2>School Timeline</h2>
          </div>
          <div className="timeline-list">
            {events.map((ev, i) => (
              <div className="timeline-item" key={i}>
                <div className="time-dot" style={{ backgroundColor: ev.color }}></div>
                <div className="time-content">
                  <span className="time-date">{ev.date}</span>
                  <h4>{ev.title}</h4>
                  <small>{ev.type}</small>
                </div>
              </div>
            ))}
          </div>
          <button className="download-btn">
             Download 2026 Calendar (PDF)
          </button>
        </div>

        {/* RIGHT: DIGITAL NOTICE BOARD */}
        <div className="notice-board-section">
          <div className="section-header">
            <LuMegaphone size={28} className="pulse-icon" color="#B8860B" />
            <h2>Notice Board</h2>
          </div>
          <div className="notices-grid">
            {notices.map((note) => (
              <div className={`notice-card ${note.type}`} key={note.id}>
                <div className="pin"></div>
                <span className="note-tag">{note.category}</span>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
                <div className="note-footer">
                  Read Full Notice <LuArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}