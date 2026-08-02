import { useState } from 'react';
import { 
  LuMessageSquare, LuUser, LuGlobe, LuClock, 
  LuCircleCheck, LuReply, LuFilter, LuFlipHorizontal, LuCircleAlert 
} from 'react-icons/lu';
import './menquires.css';

export default function Menquires() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock Data: Incoming requests from different sources
  const inquiries = [
    { 
      id: 1, 
      sender: "Musa Baldeh", 
      email: "musa@web.com",
      source: "Landing Page", 
      subject: "Admission Inquiry - Grade 10", 
      message: "I would like to know the requirements for enrolling my son in the science department for the next term.",
      status: "new",
      priority: "medium",
      date: "10 mins ago"
    },
    { 
      id: 2, 
      sender: "Isatou Sallah", 
      email: "isatou.s@portal.edu",
      source: "Student Portal", 
      subject: "Password Reset Issue", 
      message: "I am unable to access my e-learning dashboard since this morning. Please help.",
      status: "pending",
      priority: "high",
      date: "2 hours ago"
    },
    { 
      id: 3, 
      sender: "Lamin Touray", 
      email: "lamin@ndows.com",
      source: "Landing Page", 
      subject: "School Bus Route", 
      message: "Do you have a bus route that covers the Brikama area?",
      status: "resolved",
      priority: "low",
      date: "1 day ago"
    }
  ];

  return (
    <div className="enquiry-container">
      <header className="enq-header">
        <div>
          <h1>Enquiries & Support Feed</h1>
          <p>Manage interactions from prospective parents and current students</p>
        </div>
        <div className="enq-stats glass-box">
          <div className="stat-item"><strong>12</strong> <span>New</span></div>
          <div className="stat-item"><strong>5</strong> <span>Pending</span></div>
        </div>
      </header>

      <div className="enq-content">
        {/* FILTERS */}
        <aside className="enq-sidebar glass-box">
          <h3>Filters</h3>
          <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => setActiveFilter('all')}>
            <LuMessageSquare size={18}/> All Messages
          </button>
          <button className={activeFilter === 'new' ? 'active' : ''} onClick={() => setActiveFilter('new')}>
            <LuCircleAlert size={18}/> New Requests
          </button>
          <button className={activeFilter === 'resolved' ? 'active' : ''} onClick={() => setActiveFilter('resolved')}>
            <LuCircleCheck size={18}/> Resolved
          </button>
          <hr />
          <div className="source-filter">
            <label>Source</label>
            <div className="source-tag"><LuGlobe /> Landing Page</div>
            <div className="source-tag"><LuUser /> Student Portal</div>
          </div>
        </aside>

        {/* FEED LIST */}
        <main className="enq-feed">
          {inquiries.map(item => (
            <div key={item.id} className={`enq-card glass-box ${item.status}`}>
              <div className="enq-card-header">
                <div className="sender-meta">
                  <div className="source-icon">
                    {item.source === "Landing Page" ? <LuGlobe title="Public" /> : <LuUser title="Student" />}
                  </div>
                  <div>
                    <strong>{item.sender}</strong>
                    <span>{item.email}</span>
                  </div>
                </div>
                <div className="enq-time">
                   <LuClock size={14}/> {item.date}
                </div>
              </div>

              <div className="enq-body">
                <h4>{item.subject}</h4>
                <p>{item.message}</p>
              </div>

              <div className="enq-footer">
                <span className={`prio-tag ${item.priority}`}>{item.priority} priority</span>
                <div className="enq-actions">
                  {item.status !== 'resolved' && (
                    <button className="btn-reply"><LuReply /> Reply</button>
                  )}
                  <button className="btn-icon"><LuFlipHorizontal /></button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}