import { useState } from "react";
import { LuAlbum, LuBookOpen, LuCalendarCog, LuDatabase, LuFileText, LuLayoutDashboard, LuLogOut, LuMoon, LuPackage, LuReceipt, LuSunMoon, LuTrendingUp, LuUser, LuWallet } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";
import './adash.css'

export default function Adash(){
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
    {title: 'The Drawer', icon: <LuAlbum />, link: '/mdash'},
    {title: 'Income Ledger', icon: <LuTrendingUp />, link: '/sdash/pay'},
    {title: 'Payroll Audit', icon: <LuCalendarCog />, link: '/sdash/result'},
    {title: 'Expense Log', icon: <LuReceipt />, link: '/sdash/material'},
    {title: 'Assets Mgt', icon: <LuPackage />, link: '/sdash/profile' },
    {title: 'Profile', icon: <LuUser />, link: '/sdash/profile' },
  ]
    
    return (
    <div className={`dash-full a`}>
          <div className="glow t"></div>
          <aside className={`dash-bar a`}>
            <div className={`brand a`}>
                <div className="brand-icon a">A</div>
                <span className='sub'>Panel</span>
            </div>
            <nav> {sSideBar.map((e, i)=> <NavLink key={i} to={e.link} className={`nav-item a`}> {e.icon} <span>{e.title}</span></NavLink>)}
            </nav>
            <Link className="logout-btn" to='/'><LuLogOut /> <span>Logout</span></Link>
          </aside>
          <div className="ndows"></div>
          <aside>
            <Outlet />
            <div className={`themeBtn a`} onClick={toggleTheme}>
            {theme ? <LuMoon size='50%'/>: <LuSunMoon className='sun' size='50%'/>}</div>
          </aside>
        </div>
    )
}