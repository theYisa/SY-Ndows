import { useState, useRef } from 'react';
import { LuLogOut, LuCalendarCheck, LuLayoutTemplate, LuSignature, LuMessageSquarePlus, LuCircleUser, LuSunrise, LuMoonStar, LuHardDriveUpload, LuPlus} from "react-icons/lu";
import "./tdashboard.css";
import Tmain from './Tmain';
import Tattendance from './Tattendance';
import Texam from './Texam';
import Tresult from './Tresult';
import Tresultinputs from './Tresultinputs';
import Tupload from './Tupload';
import Tcomments from './Tcomments';
import Tprofile from './Tprofile';

export default function Tdashboard() {

  const [isDark, setIsDark] = useState(false);
  const [showExamModal, setShowExamModal] = useState(false);
  const [screen, changeScreen] = useState(0)
  const fileInputRef = useRef(null);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark-theme')
  };

  const sideList = [
    {icon: <LuLayoutTemplate />, title: 'Overview'},
    {icon: <LuCalendarCheck />, title: 'Attendance'},
    {icon: <LuPlus /> , title: 'Set Exams'},
    {icon: <LuSignature />, title: 'Input Scores'},
    {icon: <LuHardDriveUpload />, title: 'Upload Materials'},
    {icon: <LuMessageSquarePlus />, title: 'Weekly Comments'},
    {icon: <LuCircleUser />, title: 'Profile'},
  ];
  const sidebar = sideList.map((e, i)=> <button onClick={()=> changeScreen(i)} className="tp-nav-item">{e.icon}{e.title}</button>);

  return (
    <div className={`tp-app-container ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="tp-mosaic"></div>
      <div className="tp-glow-orb"></div>

      {/* Hidden File Input for Excel */}
      <input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        accept=".xlsx, .xls" 
        onChange={(e) => alert(`File "${e.target.files[0].name}" uploaded successfully!`)}
      />

      <aside className="tp-sidebar">
        <div className="tp-logo">NSCHS <span>Teacher</span></div>
        <nav className="tp-nav">{sidebar}</nav>
        
        <div className="tp-sidebar-bottom">
           <button className="tp-theme-toggle" onClick={toggleTheme}>
             {isDark ? <LuSunrise /> : <LuMoonStar />} <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
           </button>
           <button className="tp-logout"><LuLogOut /> Logout</button>
        </div>
      </aside>

      {screen == 0 ? <Tmain /> : screen == 1 ? <Tattendance /> : screen ==2 ? <Texam/> : screen == 3 ? <Tresult/> : screen == 4 ? <Tupload/> : screen == 5 ? <Tcomments /> : <Tprofile /> }

    </div>
  );
}