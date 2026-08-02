import { useState } from 'react';
import { 
  LuCircleCheck, LuCircleX, LuAxis3D, LuHistory, 
  LuTriangleAlert, LuDollarSign, LuUserCheck, LuSend 
} from 'react-icons/lu';
import './mexpenses.css';

export default function Mexpenses() {
  const [activeTab, setActiveTab] = useState('payroll');

  // Mock Data: Professores aguardando pagamento
  const payrollList = [
    { id: "T-001", name: "Alami Jallow", role: "Math Teacher", base: 25000, bonus: 2000, status: "Pending" },
    { id: "T-042", name: "Sarah Cole", role: "English HOD", base: 35000, bonus: 0, status: "Paid" },
  ];

  // Mock Data: Reclamações de despesas
  const complaints = [
    { id: 1, staff: "Lamin Touray", type: "Missing Bonus", detail: "Exame de laboratório extra não pago", amount: 1500, date: "16 Mar 2026" }
  ];

  return (
    <div className="payroll-container">
      <header className="pay-header">
        <div>
          <h1>Expense & Payroll Operations</h1>
          <p>Authorize payments and resolve financial disputes</p>
        </div>
        <div className="pay-actions">
          <button className="btn-secondary"><LuHistory /> Payment History</button>
          <button className="btn-primary"><LuUserCheck /> Approve All Payroll</button>
        </div>
      </header>

      {/* TABS PARA ALTERNAR ENTRE FOLHA E RECLAMAÇÕES */}
      <div className="pay-tabs">
        <button className={activeTab === 'payroll' ? 'active' : ''} onClick={() => setActiveTab('payroll')}>
          Staff Payroll
        </button>
        <button className={activeTab === 'complaints' ? 'active' : ''} onClick={() => setActiveTab('complaints')}>
          Disputes & Complaints <span className="badge-count">1</span>
        </button>
      </div>

      <div className="pay-content glass-box">
        {activeTab === 'payroll' ? (
          <table className="pay-table">
            <thead>
              <tr>
                <th>Staff Member</th>
                <th>Base Salary</th>
                <th>Bonus/Allow.</th>
                <th>Total Gross</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payrollList.map(staff => (
                <tr key={staff.id}>
                  <td>
                    <div className="s-info">
                      <strong>{staff.name}</strong>
                      <span>{staff.role}</span>
                    </div>
                  </td>
                  <td>D {staff.base}</td>
                  <td className="editable-cell">
                    D {staff.bonus} <LuAxis3D className="edit-icon" title="Adjust Bonus" />
                  </td>
                  <td><strong>D {staff.base + staff.bonus}</strong></td>
                  <td>
                    <span className={`status-tag ${staff.status.toLowerCase()}`}>
                      {staff.status}
                    </span>
                  </td>
                  <td className="pay-btns">
                    {staff.status === 'Pending' && (
                      <button className="btn-pay-now">Process Payment</button>
                    )}
                    <button className="btn-icon"><LuCircleX /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="complaints-view">
            {complaints.map(item => (
              <div key={item.id} className="complaint-card">
                <div className="comp-header">
                  <div className="staff-meta">
                    <LuTriangleAlert className="warn-icon" />
                    <strong>{item.staff}</strong>
                  </div>
                  <span>{item.date}</span>
                </div>
                <div className="comp-body">
                  <h4>{item.type}</h4>
                  <p>{item.detail}</p>
                  <div className="adjustment-box">
                    <label>Suggested Adjustment:</label>
                    <input type="number" defaultValue={item.amount} />
                    <button className="btn-apply-fix"><LuSend /> Apply Correction</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}