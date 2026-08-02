import { useState } from 'react';
import "./sdash.css";
import { LuSunMoon, LuMoon, LuLayoutDashboard, LuWallet, LuFileText, LuBookOpen, LuUser,LuLogOut,} from "react-icons/lu";
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Sdash() {
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
    {title: 'My Dashboard', icon: <LuLayoutDashboard />, link: '/sdash'},
    {title: 'Fees & Payments', icon: <LuWallet />, link: '/sdash/pay'},
    {title: 'Results', icon: <LuFileText />, link: '/sdash/result'},
    {title: 'Study', icon: <LuBookOpen />, link: '/sdash/material'},
    {title: 'Profile', icon: <LuUser />, link: '/sdash/profile' },
  ]


  return (
    <div className={`dash-full s`}>
      <div className="glow s"></div>
      <div className='useless'></div>

      <aside className={`dash-bar`}>
        <div className={`brand s`}>
          <div className="brand-icon s">St</div>
          <span className='sub'>Panel</span>
        </div>
        <nav> {sSideBar.map((e, i)=> <NavLink key={i} to={e.link} className={`nav-item`} end={e.link == '/sdash' || '/tdash' || '/bdash' || '/mdash' || '/adash'}> {e.icon} <span>{e.title}</span></NavLink>)}
        </nav>
        <Link className="logout-btn" to='/'><LuLogOut /> <span>Logout</span></Link>
      </aside>
      <aside>
        <Outlet />
        <div className={`themeBtn`} onClick={toggleTheme}>
        {theme ? <LuMoon size='50%'/>: <LuSunMoon className='sun' size='50%'/>}</div>
      </aside>
    </div>
  );
}