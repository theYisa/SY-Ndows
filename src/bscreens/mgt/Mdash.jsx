import { useState } from "react";
import { LuClipboardCheck, LuFileUp, LuLayoutDashboard, LuLogOut, LuMessageSquareDiff, LuMoon, LuReceipt, LuSunMoon, LuUsers, LuWallet } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";
import './mdash.css'

export default function Mdash(){
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
    {title: 'My School', icon: <LuLayoutDashboard />, link: '/mdash'},
    {title: 'Live Results', icon: <LuClipboardCheck />, link: '/mdash/mresult'},
    {title: 'File Uploads', icon: <LuFileUp />, link: '/mdash/upload'},
    {title: 'Enquires Feed', icon: <LuMessageSquareDiff />, link: '/mdash/enquires' },
    {title: 'Financial Insights', icon: <LuWallet />, link: '/mdash/finance' },
    {title: 'Expense & Payroll', icon: <LuReceipt />, link: '/mdash/expenses' },
    {title: 'Account Registry', icon: <LuUsers />, link: '/mdash/registry'},
  ]
    
    return (
    <div className={`dash-full m`}>
          <div className="glow m"></div>
          <aside className={`dash-bar m`}>
            <div className={`brand m`}>
                <div className="brand-icon m">M</div>
                <span className='sub'>Panel</span>
            </div>
            <nav> {sSideBar.map((e, i)=> <NavLink key={i} to={e.link} className={`nav-item m`} end={e.link == '/mdash'}> {e.icon} <span>{e.title}</span></NavLink>)}
            </nav>
            <Link className="logout-btn" to='/'><LuLogOut /> <span>Logout</span></Link>
          </aside>
          <div className="ndows"></div>
          <aside>
            <Outlet />
            <div className={`themeBtn m`} onClick={toggleTheme}>
            {theme ? <LuMoon size='50%'/>: <LuSunMoon className='sun' size='50%'/>}</div>
          </aside>
        </div>
    )
}