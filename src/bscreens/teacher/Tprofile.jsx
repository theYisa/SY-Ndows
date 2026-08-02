import React, { useState } from 'react';
import './tprofile.css';
import { 
  LuUser, LuFingerprint, LuCalendarDays, LuWallet, LuFileCheck, 
  LuAward, LuTriangleAlert, LuBadgeInfo, LuDownload,
  LuTrainFrontTunnel, 
  LuShield
} from "react-icons/lu";

export default function Tprofile() {
  // Data structure matching your backend requirements
  const [teacherInfo] = useState({
    name: "Ousman Jallow",
    regDate: "12th Jan 2024",
    loginID: "NSCHS/2026/T-044",
    bio: "Bachelor’s in HRM (UNILORIN). Graduate Member of NIM. Specialized in Flutter Development.",
    assignedClasses: ["G11 Science A", "G12 Science C", "G10 Science B"],
    dutyWeeks: ["Week 4", "Week 12", "Week 20"],
    financials: {
      basicPay: "D25,000",
      allowances: "D5,500",
      total: "D30,500"
    }
  });

  const [salaries] = useState([
    { month: "February 2026", date: "28/02/2026", ref: "PAY-9920", amount: "D30,500" },
    { month: "January 2026", date: "30/01/2026", ref: "PAY-8142", amount: "D30,500" },
  ]);

  return (
    <div className="profile-container">
      
      {/* 1. IDENTITY HEADER */}
      <div className="identity-header">
        <div className="t-profile-pic">
           <img src="https://ui-avatars.com/api/?name=Ousman+Jallow&background=0f172a&color=fff&size=150" alt="Teacher" />
        </div>
        <div className="t-core-info">
          <h1>{teacherInfo.name}</h1>
          <p className="t-bio-txt">{teacherInfo.bio}</p>
          <div className="t-meta-grid">
            <div className="meta-item">
              <LuFingerprint /> <span><strong>T-Number:</strong> {teacherInfo.loginID}</span>
            </div>
            <div className="meta-item">
              <LuCalendarDays /> <span><strong>Registered:</strong> {teacherInfo.regDate}</span>
            </div>
          </div>
        </div>
        <div className="t-status-zone">
            <span className="status-pill">Active Staff</span>
        </div>
      </div>

      <div className="profile-details-grid">
        
        {/* LEFT COLUMN */}
        <div className="profile-column">
          <section className="p-card">
            <h3><LuShield /> Class Apportionment</h3>
            <div className="class-tags">
              {teacherInfo.assignedClasses.map((cls, i) => (
                <span key={i} className="cls-tag">{cls}</span>
              ))}
            </div>
          </section>

          <section className="p-card">
            <h3><LuCalendarDays /> Duty Weeks</h3>
            <div className="duty-list">
              {teacherInfo.dutyWeeks.map((week, i) => (
                <div key={i} className="duty-item">Scheduled for: <strong>{week}</strong></div>
              ))}
            </div>
          </section>
          
          <section className="p-card">
            <h3><LuBadgeInfo /> Personnel Info</h3>
            <div className="info-grid">
               <div className="info-row"><span>Gender:</span> <strong>Male</strong></div>
               <div className="info-row"><span>Nationality:</span> <strong>Nigerian</strong></div>
               <div className="info-row"><span>State of Origin:</span> <strong>Kwara</strong></div>
               <div className="info-row"><span>Next of Kin:</span> <strong>Mrs. Jallow</strong></div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="profile-column">
          <section className="p-card">
            <h3><LuWallet /> Salary & Allowances</h3>
            <div className="pay-breakdown">
              <div className="pay-line"><span>Basic Salary:</span> <strong>{teacherInfo.financials.basicPay}</strong></div>
              <div className="pay-line"><span>Allowances:</span> <strong>{teacherInfo.financials.allowances}</strong></div>
              <div className="pay-line total"><span>Net Payable:</span> <strong>{teacherInfo.financials.total}</strong></div>
            </div>
          </section>

          <section className="p-card">
            <h3><LuFileCheck /> Salary Receipts</h3>
            <div className="receipt-list">
              {salaries.map((pay, i) => (
                <div key={i} className="receipt-item">
                  <div className="r-info">
                    <strong>{pay.month}</strong>
                    <small>{pay.ref}</small>
                  </div>
                  <button className="btn-dl-receipt"><LuDownload /></button>
                </div>
              ))}
            </div>
          </section>

          <section className="p-card">
            <h3><LuAward /> Award & Sanction</h3>
            <div className="record-entry award">
              <LuAward />
              <div>
                <strong>Excellence in Tech</strong>
                <small>Principal's Commendation - 2026</small>
              </div>
            </div>
            <div className="record-entry sanction">
              <LuTriangleAlert />
              <div>
                <strong>Late to Duty</strong>
                <small>Caution Issued - Jan 2026</small>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}