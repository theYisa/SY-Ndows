import { useState } from "react";
import { LuBookMarked, LuBookOpen, LuFileArchive, LuFileText, LuFileUp, LuLayoutDashboard, LuLogOut, LuMessageSquare, LuMessageSquarePlus, LuMoon, LuPenTool, LuPresentation, LuSchool, LuSunMoon, LuUser, LuUserCheck, LuWallet } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";
import './tdash.css'

export default function Tdash(){
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
    {title: 'My Classes', icon: <LuBookMarked />, link: '/mdash'},
    {title: 'Attendance', icon: <LuUserCheck />, link: '/sdash/pay'},
    {title: 'Set Exams', icon: <LuFileArchive />, link: '/sdash/result'},
    {title: 'Input Scores', icon: <LuPenTool />, link: '/sdash/material'},
    {title: 'Upload Materials', icon: <LuFileUp />, link: '/sdash/profile' },
    {title: 'Write Comments', icon: <LuMessageSquare />, link: '/sdash/profile' },
    {title: 'Profile', icon: <LuUser />, link: '/sdash/profile' },
  ]
    
    return (
    <div className={`dash-full t`}>
          <div className="glow t"></div>
          <aside className={`dash-bar t`}>
            <div className={`brand t`}>
                <div className="brand-icon t">T</div>
                <span className='sub'>Panel</span>
            </div>
            <nav> {sSideBar.map((e, i)=> <NavLink key={i} to={e.link} className={`nav-item t`}> {e.icon} <span>{e.title}</span></NavLink>)}
            </nav>
            <Link className="logout-btn" to='/'><LuLogOut /> <span>Logout</span></Link>
          </aside>
          <div className="ndows"></div>
          <aside>
            <Outlet />
            <div className={`themeBtn t`} onClick={toggleTheme}>
            {theme ? <LuMoon size='50%'/>: <LuSunMoon className='sun' size='50%'/>}</div>
          </aside>
        </div>
    )
}