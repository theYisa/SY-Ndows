import React, { useState } from 'react';
import './ateachentry.css';
import { 
  LuSave, LuUserPlus, LuHistory, LuCircleArrowDown, 
  LuAccessibility, LuFilter, LuArrowUpDown, LuTrash2 
} from "react-icons/lu";

export default function Ateachentry() {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  // Example Staff List for Sorting/Vetting
  const [staff] = useState([
    { id: 'T-044', name: 'Ousman Jallow', dept: 'Science', status: 'Unpaid' },
    { id: 'T-012', name: 'Fatima Gomez', dept: 'Arts', status: 'Paid' },
    { id: 'T-089', name: 'Abdoulaye Sow', dept: 'Languages', status: 'Issue' },
  ]);

  return (
    <div className="payroll-page">
      <header className="payroll-header">
        <div>
          <h1>Payroll Management</h1>
          <p>Record salary disbursements and apply institutional sanctions.</p>
        </div>
        <button className="btn-history"><LuHistory /> View Payment History</button>
      </header>

      <div className="payroll-grid">
        
        {/* --- SECTION 1: ENTRY FORM --- */}
        <section className="entry-form-container glass">
          <h3><LuUserPlus /> Record Teacher Payment</h3>
          <form className="payroll-form">
            <div className="form-row">
              <div className="input-group">
                <label>Select Teacher</label>
                <select>
                  <option>Select by ID or Name</option>
                  {staff.map(s => <option key={s.id}>{s.name} ({s.id})</option>)}
                </select>
              </div>
              <div className="input-group">
                <label>Payment Date</label>
                <input type="date" defaultValue="2026-03-31" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Basic Salary (D)</label>
                <input type="number" placeholder="e.g. 25000" />
              </div>
              <div className="input-group">
                <label>Allowances (D)</label>
                <input type="number" placeholder="e.g. 5000" />
              </div>
            </div>

            {/* --- SECTION 2: DEDUCTIONS / SANCTIONS --- */}
            <div className="sanction-section">
              <h4><LuCircleArrowDown color="#ef4444" /> Deductions & Sanctions</h4>
              <div className="form-row">
                <div className="input-group">
                  <label>Sanction Reason</label>
                  <select className="sanction-select">
                    <option>None</option>
                    <option>Late to Duty</option>
                    <option>Absent without Leave</option>
                    <option>Tax Deduction</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Amount to Deduct (D)</label>
                  <input type="number" className="neg-input" placeholder="0.00" />
                </div>
              </div>
            </div>

            <div className="form-footer">
              <div className="total-calc">
                <span>Net Payable:</span>
                <strong>D0.00</strong>
              </div>
              <button type="submit" className="btn-save"><LuSave /> Commit to Ledger</button>
            </div>
          </form>
        </section>

        {/* --- SECTION 3: SORTING & STAFF LIST --- */}
        <section className="staff-sorting-container glass">
          <div className="sorting-header">
            <h3>Staff List</h3>
            <div className="sort-controls">
              <button className="btn-sort"><LuFilter /> Filter</button>
              <button className="btn-sort"><LuArrowUpDown /> Sort by Dept</button>
            </div>
          </div>
          
          <div className="staff-scroll-list">
            {staff.map((teacher) => (
              <div className="teacher-item" key={teacher.id}>
                <div className="t-main">
                  <strong>{teacher.name}</strong>
                  <small>{teacher.id} • {teacher.dept}</small>
                </div>
                <div className={`t-status ${teacher.status.toLowerCase()}`}>
                  {teacher.status}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}