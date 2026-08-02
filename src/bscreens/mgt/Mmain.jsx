import { Area, AreaChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './mmain.css';
import { LuArrowUp, LuCircleAlert, LuUserCheck, LuUsers, LuWallet } from 'react-icons/lu';

export default function Mmain() {
  // Mock Data for Area Chart (Enrollment & Attendance)
  const trendData = [
    { name: 'Jan', enrollment: 1100, attendance: 95 },
    { name: 'Feb', enrollment: 1150, attendance: 92 },
    { name: 'Mar', enrollment: 1200, attendance: 98 },
    { name: 'Apr', enrollment: 1220, attendance: 90 },
    { name: 'May', enrollment: 1240, attendance: 94 },
  ];

  // Mock Data for Pie Chart (Exam Readiness)
  const readinessData = [
    { name: 'Completed', value: 65, color: '#00bf20' },
    { name: 'In Progress', value: 25, color: '#ff8c00' },
    { name: 'Pending', value: 10, color: '#64748b' },
  ];

  const stats = [
    { label: "Total Students", value: "1,240", icon: <LuUsers />, change: "+12%", color: "blue" },
    { label: "Active Staff", value: "86", icon: <LuUserCheck />, change: "Steady", color: "green" },
    { label: "Unpaid Fees", value: "D450.2k", icon: <LuWallet />, change: "+5%", color: "orange" },
    { label: "Complaints", value: "14", icon: <LuCircleAlert />, change: "3 High", color: "red" },
  ];

  return (
    <div className="m-full">
      <header className="head-cards">
        {stats.map((e, i) => (
          <div key={i} className={`cards ${e.color}s glass-box`}>
            <div className={`card-icon ${e.color}`}>{e.icon}</div>
            <div className="card-info">
              <p>{e.label}</p>
              <h3>{e.value}</h3>
              <span className="card-meta">{e.change} <LuArrowUp size={12}/></span>
            </div>
          </div>
        ))}
      </header>

      <section className="charts">
        <div className="area-chart glass-box">
          <div className="chart-header">
            <h3>Enrollment Growth</h3>
            <p>Academic Year 2026</p>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width='100%' height={250}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorEnroll" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--dark-accent-m)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--dark-accent-m)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' vertical={false}/>
                <XAxis dataKey='name' stroke='#64748b' fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke='#64748b' fontSize={12} tickLine={false} axisLine={false}/>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: 'white'}}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type='monotone' dataKey='enrollment'  stroke='var(--dark-accent-m)' fillOpacity={1} fill="url(#colorEnroll)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="pie-chart glass-box">
          <div className="chart-header">
            <h3>Exam Readiness</h3>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width='100%' height={250}>
              <PieChart data={readinessData}>
                <Pie innerRadius={60}>
                  {readinessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType='circle' iconSize={6} layout='vertical' align='right' verticalAlign='middle'/>
              </PieChart>
            </ResponsiveContainer>
          </div>      
        </div>
      </section>

      <footer className="enquiry-grid">
        <div className="enquiry glass-box">
          <div className="e-header">
            <h3>Urgent Complaints</h3>
            <button className="view-all-btn">Handle All</button>
          </div>
          <div className="complaint-list">
            {[
              { name: "Abdou J.", msg: "Laboratory equipment shortage", time: "2h ago", status: "high" },
              { name: "Mariama K.", msg: "Portal login issues", time: "5h ago", status: "low" }
            ].map((c, i) => (
              <div key={i} className="complaint-item">
                <div className={`status-indicator ${c.status}`}></div>
                <div className="c-body">
                  <strong>{c.name}</strong>
                  <p>{c.msg}</p>
                </div>
                <span className="c-time">{c.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="enquiry glass-box">
          <div className="e-header">
            <h3>Auditor's Expense Log</h3>
          </div>
          <table className="mini-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Staff Payroll</td>
                <td>D850,000</td>
                <td>Mar 15</td>
              </tr>
              <tr>
                <td>Utility Bills</td>
                <td>D12,400</td>
                <td>Mar 12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    </div>
  );
}