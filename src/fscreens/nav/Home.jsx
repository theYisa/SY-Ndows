import { useState, useEffect, useRef } from "react";
import { LuPlay } from "react-icons/lu";
import { images } from '../../assets/index.js';
import CustomCard from '../../components/CustomCard.jsx';
import ContainerCard from "../../components/ContainerCard.jsx";
import EventCard from "../../components/EventCard.jsx";
import SocialCard from "../../components/SocialCard.jsx";
import './home.css'
import { Link } from "react-router-dom";

export default function Home(){

    //  - 1a. TOTAL ACHIEVEMENTS AND STUDENTS OF NDOWS
    const achievedList = [
      {i: 0, new:1650, persons: 'Students'},
      {i: 1, new:70, persons: 'Awards and Clubs'},
      {i: 2, new:98, persons: 'Facilities: Halls and Marks'},
      {i: 3, new:2700, persons: 'Alumni and Communities'},
    ];
    let achiveveChange = achievedList.map((e)=> (<CustomCard key={e.i} newCount={e.new} persons={e.persons} />));

    //  1b. THE THREE CORE CARDS
    const containerList = [
      {id: 1,note: 'first', img: images.art2, title: 'Registration', link: '/apply', further:'You will discover how we\nprepare our students to excel\nacademically in their post-secondary\nstudies and beyond, while empowering\nthem with the knowledge and skills to\nstrengthen their national identity in a\nmeaningful and relevant way.', btn: 'Apply Now'},
      {id: 2,note: 'second', img: images.art1, title: 'Alumni', link: '/alumni', further:'Ndows remarkable network\nof 9,000+ alumni are continuously\nmaking an impact on our community\n- both within the school and beyond,\nthroughout the Gambia and around\nthe world.', btn: 'Share News'},
      {id: 3,note: 'third', img: images.art3, title: 'Partnership', link: '/partner', further: "We are grateful to our members\nwho choose to make leadership gifts in\nsupport of Ndows Comprehensive.\nThese generous donations create\npowerful and essential opportunities\nfor our students and teachers.", btn: 'Join'},
    ]
    let containerCard = containerList.map((e)=> 
    <ContainerCard img={e.img} link={e.link} title={e.title} id={e.note} further={e.further} more={e.btn} location={e.link}/>)
 
    // - 2. VIDEO OF NDOWS
    const videoRef = useRef(null);
    const [play, changePlay] = useState(false);

    function videoPlay(){
      videoRef.current.play();
      changePlay(true);
    }
    useEffect(()=>{
      function scrollController(){
        const determinant = videoRef.current.getBoundingClientRect();

        if (play == true && (determinant.top > window.innerHeight || determinant.bottom <  0)){
          changePlay(false);
          videoRef.current.pause();
          videoRef.current.load();
        }
      }
      window.addEventListener('scroll', scrollController);
      return ()=> window.removeEventListener('scroll', scrollController);
    }, [play]);

    // - 3a. NEWS AMD EVENTS
    const eventList = [
      {id: 1, nb:'fir', link: '/bulletin#we-won', img: images.art5, events: 'Reflection on a Year of Strenght, Growth and Community', eventFull: 'Dear Ndows community, as we reach the end of another remarkable school year, I want to begin by reflecting our indeed achievemnts'},
      {id: 2, nb:'sec', link: '/bulletin#news-2', img: images.art6, events: 'Standing reflection from the Head of School, Dr. Yahaya Umar', eventFull: '"More than the Gambians keep education, Education keeps the Jewish people - Mr Yusuf O. Yisa"'},
    ];

    const eventCards = eventList.map((e)=>{
      return <EventCard nb={e.nb} img={e.img} events={e.events} eventFull={e.eventFull} location={e.link}/>
    })

    // - 3b. NEWS AND EVENTS Platforms
    const socialList = [
      {id: 1, nb:'fir', img: images.art8, text:'Shabbat Shalom\n@dowschatRoom! Our\nadministration and staff will\nbe taking a brief break over the\nnext two weeks for a one prime audition in the school one prime audition in the school one prime audition in the school', date: '3 weeks ago'},
      {id: 2, nb:'sec', img: images.art9, text: "Before we sign off\nfor Banjul, we’re excited to\nshare some great news —\nthe Spring/Summer edition\nof our @dowschatRoom one prime audition in the school", date: '3 weeks ago'},
      {id: 3, nb:'thi', img: images.art10, text: 'This morning, our\n@dowschatRoom faculty\nand staff gathered to\ncelebrate the end of\nanother incredible one prime audition in the school', date: '1 weeks ago'},
      {id: 4, nb:'fou', img: images.art11, text: 'On June 25 and 26,\n@dowschatRoom faculty\ncame together for\nan engaging and forward\n-thinking AI Mini-Bojang one prime audition in the school one prime audition in the school', date: '7 days ago'},
      {id: 5, nb:'fif', img: images.art13, text: 'As our @dowschatRoom\ncommunity shifts its focus\nto summer break, Head of\nSchool Dr. Jonathan Levy\nshares reflections on a ye one prime audition in the school one prime audition in the school', date: '9 weeks ago'},
    ];
    const socialCards = socialList.map((e)=>{
      return <SocialCard nb={e.nb} img={e.img} text={e.text} date={e.date}/>
    }) 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    return <>
  <div className='full-background'>
    <div className="full-image"><img src={images.art0}/></div>
    <div className="headline">
      <div className="short"></div>
      <p className="welcome">Welcome to Ndows Comprehensive</p>
      <Link to={'/about'} className="line-link">
      <div className="forhover">
        <p className="more">LEARN MORE</p>
      <div className="line"></div>
      </div>
      </Link>
    </div>
  </div>

  <div className="full-achievement">
    <div className="toachieve">
      <p>Ndows has been a cornerstone in the Gambia Educational society 
        for almost 60 years. As the only community Gambian high school in the Greater 
        Banjul and Serrekunda area, it has had an unparalleled impact and fulfills 
        a unique role.</p>
    </div>
    <div className="achievements">{achiveveChange}</div>
    <div className="contCard">{containerCard}</div>
  </div>

  <div className="video-cover">
    <video ref={videoRef} src={images.video} poster={images.art4} muted playsInline/>
    {play == false ? <div className="lay-over">
      <button className="btn-video" onClick={videoPlay}><LuPlay className="lu" size={80} color="grey" opacity={0.8}/></button>
      <p>Find yourself @ NDOWS Comprehensive</p>
      </div> : <p></p>
    }
  </div>

  <div className="cards">
    <p className="top">NEWS & EVENTS</p>
    <div className="events-row">
      {eventCards}
      <div className="chat-row">
        <img src={images.art7} />
        <p>The Ndow's Note</p>
        <div className="btn"><p>Read the Latest Issue</p></div>
      </div>
    </div>
  </div>
  <div className="socials">{socialCards}</div>
    </>
}