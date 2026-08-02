import { useState } from "react";
import { LuBellRing, LuBookOpen, LuChartBar, LuChartLine, LuChartPie, LuFileText, LuLayoutDashboard, LuLogOut, LuMessageSquare, LuMessageSquareCode, LuMessageSquareMore, LuMoon, LuShieldAlert, LuSunMoon, LuUser, LuUserCheck, LuWallet } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";
import './bdash.css'

export default function Bdash(){
  const [theme, changeTheme] = useState(true);
  
  function toggleTheme(){
    const newTheme = !theme;
    changeTheme(newTheme);

    if (newTheme == false){
      document.body.classList.add('light')
    } else{
      document.body.classList.remove('light')
    }
  }
  const sSideBar = [
    {title: 'Executive Summary', icon: <LuChartLine />, link: '/mdash'},
    {title: 'System Access', icon: <LuShieldAlert />, link: '/sdash/pay'},
    {title: 'Staff Activity', icon: <LuUserCheck />, link: '/sdash/result'},
    {title: 'Financial Performance', icon: <LuChartPie />, link: '/sdash/material'},
    {title: 'Academic Health', icon: <LuChartBar />, link: '/sdash/profile' },
    {title: 'System Alerts', icon: <LuBellRing />, link: '/sdash/profile' },
    {title: 'Activity Trackers', icon: <LuMessageSquareMore />, link: '/sdash/profile' },
  ]
    
    return (
    <div className={`dash-full b`}>
          <div className="glow b"></div>
          <aside className={`dash-bar b`}>
            <div className={`brand b`}>
                <div className="brand-icon b">NDOWS</div>
                <span className='sub'>Admin</span>
            </div>
            <nav> {sSideBar.map((e, i)=> <NavLink key={i} to={e.link} className={`nav-item b`}> {e.icon} <span>{e.title}</span></NavLink>)}
            </nav>
            <Link className="logout-btn" to='/'><LuLogOut /> <span>Logout</span></Link>
          </aside>
          <div className="ndows"></div>
          <aside>
            <Outlet />
            <div className={`themeBtn b`} onClick={toggleTheme}>
            {theme ? <LuMoon size='50%'/>: <LuSunMoon className='sun' size='50%'/>}</div>
          </aside>
        </div>
    )
}