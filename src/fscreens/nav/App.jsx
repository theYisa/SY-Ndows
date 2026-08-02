import { useState, useEffect } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { LuMenu, LuAlarmClock, LuSearch, LuFacebook, LuYoutube, LuInstagram, LuLinkedin  } from "react-icons/lu"
import SearchBar from '../internal/SearchBar'
import CustomFooter from '../../components/CustomFooter'
import './app.css'


export default function App(){
  
        // - STATE MANAGEMENT
    const [maxScroll, setMaxScroll] = useState(false);
    const [screenLink, changeLink] = useState('/')
    const [isOpen, changeIsOpen] = useState(false);

    // - NAVBAR SCROLL DETECTION
    useEffect(()=> {
      function scrollController(){
        if (window.scrollY > 10){
          setMaxScroll(true);
        } else{
          setMaxScroll(false);
        }
      }
      window.addEventListener('scroll', scrollController);
      return ()=> window.removeEventListener('scroll', scrollController);
    }, []);

    // - Nav
    const leftListAbove = [
      {title: <LuAlarmClock />},
      {title: 'The Power of Grads: Celebrate the Class of 2025', link: '/alumni'},];
    let leftContentLarge = leftListAbove.map((e)=> <Link to={e.link}>{e.title}</Link>
      );    
    const rightListAbove = [
      {title: <LuSearch/>, link: ()=> isOpen ? changeIsOpen(false) : changeIsOpen(true)},
      {title: 'Enquiry', link: '/admission#enquiry-details'},
      {title: 'Finance', link: '/finance'},
      {title: 'Library', link: '/library'},
      {title: 'About-Us', link: '/about'},
    ];
    const rightListBelow = [
        {i: 1, title: 'ADMISSION', link: '/admission'},
        {i: 2, title: 'TEACHING', link: '/teaching'},
        {i: 3, title: 'SPORTS', link: '/sport'},
        {i: 4, title: 'NEWS & EVENTS', link: '/bulletin'},
      ];

    // - Footer
    const fServices = [
      {id: 1, name: 'NCCS Mobile', link: '#' },
      {id: 2, name: 'Digital Service', link: '#' },
      {id: 3, name: 'Quiz & Prep', link: '#' },
      {id: 4, name: 'Book Store', link: '#' },
      {id: 5, name: 'Sitemap', link: '#' },
    ];
    const fLinks = [
      {id: 1, name: 'Available Jobs', link: '#' },
      {id: 2, name: 'NCCS Calendar', link: '#' },
      {id: 3, name: 'Our Statement & Policies', link: '#' },
      {id: 4, name: 'Facilities', link: '#' },
    ];
    const fTouch = [
      {id: 1, name: 'Request Transcript', link: '#' },
      {id: 2, name: 'Lodge Complaints', link: '#' },
      {id: 3, name: 'School Contact', link: '#' },
      {id: 4, name: 'Campus Safety', link: '#' },
      {id: 5, name: 'Staff Directory', link: '#' },      
    ];
    const fPlatforms = [
      {id: 1, name: <LuFacebook />, link: '#' },
      {id: 2, name: <LuYoutube />, link: '#' },
      {id: 3, name: <LuInstagram />, link: '#' },
      {id: 4, name: <LuLinkedin />, link: '#' },
    ];
    let customFooter = <CustomFooter services={fServices} links={fLinks} touch={fTouch} platforms={fPlatforms} id={screenLink == '/teaching' ? 'g' : screenLink == '/sport' ? 'r' : screenLink == '/bulletin' ? 'y' : ''}/>
 


  
    return (
  <>
  <div className={`navbar ${screenLink == '/teaching' ? 'g' : screenLink == '/sport' ? 'r' : screenLink == '/bulletin' ? 'y' : ''}`}>
    <div className={`above ${maxScroll ? 'shrink' : ''}`}>
      <div className="max-widthing">
        <div className="left">{leftContentLarge}</div>
        <div className="right">{rightListAbove.map((e, i)=> i == 0 ? 
          <Link onClick={()=> changeIsOpen(true)} className='for-navbar'>{e.title}</Link>:
          <Link to={e.link} className='for-navbar'>{e.title}</Link>)}</div>
      </div>
    </div>

    <SearchBar isOpen={isOpen} isClose={()=> changeIsOpen(false)} screenLink={screenLink}/>

    <div className="below">
      <div className="max-widthing">
        <div className="left">
        <Link to='/' className="home-btn"><p className="abr">NSCHS</p></Link>
        <div className="box">
          <div className="full">Ndows Comprehensive Senior High School</div>
          <div className="vert-divider"></div>
          <p className="est">Est. Since 1996 in Gambia</p>
        </div>
      </div>
      <div className="right">
          {rightListBelow.map((e)=> <Link to={e.link} onClick={()=> changeLink(e.link)} key={e.i} className="rLittle fir">{e.title}</Link>)}
        <Link to='/login' className="signin" ><p>LOGIN NOW</p></Link>
        <div className="hidden-menu">
          <LuMenu className="menu" size={35}/>
          <div className="menu-cont">
            {rightListBelow.map((e)=> <NavLink key={e.i} to={e.link} onClick={()=> changeLink(e.link)} className="rLittle sec">{e.title}</NavLink>)}
            <div className="menu-down">{rightListAbove.map((e)=><Link className='for-menu' to={e.link}>{e.title}</Link>)}</div>
          </div>
          </div>
      </div> 
      </div>
    </div>
  </div>
  
  <Outlet />
  
  <footer className="footer">{customFooter}</footer>
  </>
  )
}