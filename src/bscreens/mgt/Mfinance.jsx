import React, { useState } from 'react';
import { 
  LuWallet, LuTrendingUp, LuTrendingDown, LuUsers, 
  LuShoppingBag, LuArrowUpRight, LuArrowDownRight, LuActivity, 
  LuCircleCheck
} from 'react-icons/lu';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import './mfinance.css';

export default function Mfinance() {
  // Mock Data: Monthly performance
  const monthlyData = [
    { month: 'Jan', revenue: 45000, payroll: 28000, expenses: 5000 },
    { month: 'Feb', revenue: 52000, payroll: 28000, expenses: 7000 },
    { month: 'Mar', revenue: 48000, payroll: 30000, expenses: 4000 },
  ];

  return (
    <div className="fin-container">
      <header className="fin-header">
        <div>
          <h1>Financial Insights</h1>
          <p>Real-time monitor of school revenue, payroll, and expenditures</p>
        </div>
        <div className="current-period glass-box">
          <LuActivity className="icon-blue" />
          <span>Period: **Term 2 - 2026**</span>
        </div>
      </header>

      {/* TOP STATS CARDS */}
      <div className="fin-summary-grid">
        <div className="stat-card glass-box">
          <div className="stat-icon rev"><LuTrendingUp /></div>
          <div className="stat-info">
            <span>Student Fees Collected</span>
            <h2>D 145,000.00</h2>
            <small className="up"><LuArrowUpRight /> 12% vs last term</small>
          </div>
        </div>

        <div className="stat-card glass-box">
          <div className="stat-icon pay"><LuUsers /></div>
          <div className="stat-info">
            <span>Staff Payroll (Total)</span>
            <h2>D 88,000.00</h2>
            <small>Fixed monthly cost</small>
          </div>
        </div>

        <div className="stat-card glass-box">
          <div className="stat-icon exp"><LuShoppingBag /></div>
          <div className="stat-info">
            <span>Operating Expenses</span>
            <h2>D 12,400.00</h2>
            <small className="down"><LuArrowDownRight /> 5% saved</small>
          </div>
        </div>
      </div>

      <div className="fin-main-grid">
        {/* CHART SECTION */}
        <div className="chart-area glass-box">
          <h3>Revenue vs. Expenditure</h3>
          <div className="chart-h">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="revenue" fill="var(--dark-accent-m)" radius={[4, 4, 0, 0]} name="School Fees" />
                <Bar dataKey="payroll" fill="#00bf20" radius={[4, 4, 0, 0]} name="Salaries" />
                <Bar dataKey="expenses" fill="#dc143c" radius={[4, 4, 0, 0]} name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RECENT TRANSACTIONS / ALERTS */}
        <div className="fin-alerts glass-box">
          <h3>Critical Alerts</h3>
          <div className="alert-list">
            <div className="alert-item warn">
              <LuWallet />
              <div>
                <strong>15 Students Unpaid</strong>
                <p>Total Outstanding: D 22,500</p>
              </div>
            </div>
            <div className="alert-item success">
              <LuCircleCheck />
              <div>
                <strong>Payroll Disbursed</strong>
                <p>March Salaries paid successfully</p>
              </div>
            </div>
          </div>

          <h3 className="sub-h">Recent Expenditures</h3>
          <div className="mini-table">
            <div className="m-row"><span>New Lab Equipment</span> <strong>-D 2,500</strong></div>
            <div className="m-row"><span>Electricity Bill</span> <strong>-D 1,200</strong></div>
            <div className="m-row"><span>Printing Paper (Bulk)</span> <strong>-D 800</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}