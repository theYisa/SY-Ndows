import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { LuTrendingUp, LuCircleAlert, LuCircleCheck, LuUsers, LuWallet, LuSearch, LuFilter, LuMoveHorizontal, LuZap } from "react-icons/lu";
import './adashboard.css';

export default function Adashboard() {
  const [activeTab, setActiveTab] = useState('students');
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const chartData = [
    { name: 'Wk 1', collected: 120000, target: 150000 },
    { name: 'Wk 2', collected: 210000, target: 150000 },
    { name: 'Wk 3', collected: 180000, target: 150000 },
    { name: 'Wk 4', collected: 250000, target: 150000 },
  ];

  return (
    <div className="finance-app">
      {/* --- ZONE 1: INTERACTIVE PULSE TILES --- */}
      <header className="finance-header">
        <div className="title-area">
          <h1>Financial Audit Command</h1>
          <p>Real-time oversight for 2026 Academic Session</p>
        </div>
        <div className="quick-actions">
          <button className="btn-primary"><LuZap /> Generate Term Report</button>
        </div>
      </header>

      <div className="pulse-grid">
        {[
          { id: 'revenue', label: 'Total Revenue', value: 'D1,450,000', icon: <LuTrendingUp />, color: '#10b981', trend: '+14.2%' },
          { id: 'debt', label: 'Outstanding', value: 'D320,500', icon: <LuCircleAlert />, color: '#ef4444', trend: 'High Priority' },
          { id: 'staff', label: 'Payroll Pool', value: 'D840,000', icon: <LuWallet />, color: '#3b82f6', trend: 'Ready' }
        ].map((tile) => (
          <div 
            key={tile.id}
            className={`pulse-tile glass ${hoveredMetric === tile.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredMetric(tile.id)}
            onMouseLeave={() => setHoveredMetric(null)}
          >
            <div className="pulse-icon" style={{ backgroundColor: `${tile.color}20`, color: tile.color }}>
              {tile.icon}
            </div>
            <div className="pulse-info">
              <span>{tile.label}</span>
              <h3>{tile.value}</h3>
              <small style={{ color: tile.color }}>{tile.trend}</small>
            </div>
          </div>
        ))}
      </div>

      {/* --- ZONE 2: THE HUB (CHART + LIVE VETTING) --- */}
      <div className="hub-grid">
        <section className="hub-chart glass">
          <div className="hub-header">
            <h3>Collection Velocity</h3>
            <div className="legend">
              <span className="l-item"><i className="dot current"></i> Collection</span>
              <span className="l-item"><i className="dot target"></i> Target</span>
            </div>
          </div>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--subtext)', fontSize: 12}} />
                <YAxis hide />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="collected" fill="url(#barGradient)" radius={[10, 10, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="hub-queue glass">
          <div className="hub-header">
            <h3>Urgent Vetting Queue</h3>
            <button className="btn-text">View All</button>
          </div>
          <div className="queue-list">
            {[1, 2, 3].map((_, i) => (
              <div className="queue-item" key={i}>
                <div className="q-avatar">AD</div>
                <div className="q-info">
                  <strong>Abdoulaye Diallo</strong>
                  <small>D15,000 • Tuition Fee</small>
                </div>
                <button className="btn-icon-check"><LuCircleCheck /></button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* --- ZONE 3: TRANSACTION ENGINE --- */}
      <section className="ledger-section glass">
        <div className="ledger-toolbar">
          <div className="nav-tabs">
            <button className={activeTab === 'students' ? 'active' : ''} onClick={() => setActiveTab('students')}>Student Vetting</button>
            <button className={activeTab === 'teachers' ? 'active' : ''} onClick={() => setActiveTab('teachers')}>Staff Payroll</button>
          </div>
          <div className="search-box">
            <LuSearch />
            <input type="text" placeholder="Filter by ID, Name or Reference..." />
          </div>
        </div>

        <div className="table-responsive">
          <table className="ledger-table">
            <thead>
              {activeTab === 'students' ? (
                <tr><th>Status</th><th>Student</th><th>Fee Category</th><th>Amount</th><th>Method</th><th>Action</th></tr>
              ) : (
                <tr><th>Staff</th><th>Basic Pay</th><th>Allowances</th><th>Deductions</th><th>Net Pay</th><th>Action</th></tr>
              )}
            </thead>
            <tbody>
              {/* Logic for rows */}
              <tr>
                <td><span className="dot-status pending"></span></td>
                <td><strong>Ousman Jallow</strong><br/><small>T-044</small></td>
                <td>D25,000</td>
                <td>D5,500</td>
                <td><span className="neg">-D1,200</span></td>
                <td><button className="btn-more"><LuMoveHorizontal /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}