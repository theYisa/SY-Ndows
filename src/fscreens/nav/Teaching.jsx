import "./teaching.css";
import { images } from "../../assets/index.js";
import { LuAward, LuBaby, LuBookCheck, LuCheckCheck, LuFileCheck, LuGlobeLock, LuGraduationCap, LuMicroscope, LuSwatchBook, LuUser } from "react-icons/lu";


export default function Teaching() {
  const departments = [
    { name: "Pure Sciences", desc: "Master Physics, Chemistry, and Biology in our 12 laboratories.", careers: ["Medical Doctor","Petroleum Engineer","Pharmacist"] },
    { name: "Arts & Humanities", desc: "Exploring Literature, Government, and History.", careers: ["Lawyer","Diplomat","Journalist"] },
    { name: "Commercial A & B", desc: "The backbone of global trade and finance.", careers: ["Chartered Accountant","Bank Manager","Economist"] },
    { name: "Home Economics", desc: "Professional cooking, textiles and lifestyle design.", careers: ["Executive Chef","Fashion Designer","Nutritionist"] },
    { name: "Technical Drawing", desc: "Foundation for architecture and engineering.", careers: ["Architect","Civil Engineer","Urban Planner"] },
    { name: "Information Technology", desc: "Modern computing and digital systems.", careers: ["AI Specialist","Cyber Security","Web Developer"] }
  ];

  const staff = [
    { name:"Mrs. Fatoumatta Jallow", role:"Principal, Senior Secondary", img:images.art6, dept:"Administration"},
    { name:"Mr. Ebrima Sallah", role:"Principal, Junior Secondary", img:images.art7, dept:"Administration"},
    { name:"Mrs. Ndow-Banjul", role:"Head of Primary", img:images.art8, dept:"Administration"},
    { name:"Ms. Isatou Gaye", role:"Nursery Coordinator", img:images.art9, dept:"Administration"}
  ];

  return (
    <div className="teaching-page">
      
      {/* --- 1. HERO: DEEP ACADEMIC TEAL & 6 SHINING STATS --- */}
      <section className="teaching-hero">
        <div className="teaching-hero-content">
          <h1>Academic Integrity And <br/> Innovation @ <span className="gold-text">Ndows</span></h1>
          <p className="hero-sub">Empowering The Gambia's future leaders through a legacy of excellence, discipline, and state-of-the-art facilities.</p>
        </div>

        <div className="shining-stats-grid">
          <div className="shine-box">
            <LuSwatchBook className="shine-icon" />
            <strong>45+</strong>
            <span>Equipped Classrooms</span>
          </div>
          <div className="shine-box">
            <LuMicroscope className="shine-icon" />
            <strong>12</strong>
            <span>Science Labs</span>
          </div>
          <div className="shine-box">
            <LuAward className="shine-icon" />
            <strong>100%</strong>
            <span>WASSCE Success</span>
          </div>
          <div className="shine-box">
            <LuUser className="shine-icon" />
            <strong>85+</strong>
            <span>Qualified Teachers</span>
          </div>
          <div className="shine-box">
            <LuGlobeLock className="shine-icon" />
            <strong>9000+</strong>
            <span>Global Alumni</span>
          </div>
          <div className="shine-box">
            <LuGraduationCap className="shine-icon" />
            <strong className="small-strong">TOP TIER</strong>
            <span>University Entry</span>
          </div>
        </div>
      </section>

      {/* --- 2. THE ACADEMIC FACTS (COMPLETE 300 SECTION) --- */}
      <section className="academic-facts-complete">
        <div className="facts-wrapper">
            <div className="facts-left">
                <h2 className="facts-title">The Ndows Standard <br/>of <span className="green-highlight">Excellence</span></h2>
                <div className="facts-divider"></div>
                <div className="check-list">
                    <div className="check-item"><LuCheckCheck/> Small Class Sizes (1:25 Ratio)</div>
                    <div className="check-item"><LuBookCheck/> International Curriculum Standards</div>
                    <div className="check-item"><LuFileCheck/> Holistic Leadership Training</div>
                </div>
            </div>
            <div className="facts-right">
                <p className="big-fact-text">
                   Our academic framework is built on the philosophy that <strong>every student is a leader in waiting. </strong> 
                   By maintaining a strict teacher-to-student ratio in core subjects, we ensure that no child 
                   is left behind in the pursuit of excellence.
                </p>
                <p className="sub-fact-text">
                    From the bustling science corridors to the quiet focus of our literature halls, 
                    Ndows represents the pinnacle of Gambian secondary education. We don't just teach 
                    the syllabus; we ignite the passion for lifelong learning.
                </p>
            </div>
        </div>
      </section>

      {/* --- 3. NURSERY FOUNDATION --- */}
      <section className="fs-section nursery-bg">
        <div className="fs-content-v4 left-align">
          <LuBaby className="blue-glow"/>
          <h2 className="f-title">The Foundation:<br/>Nursery & Kindergarten</h2>
          <p className="f-body">Using Montessori-inspired learning methods, children develop early literacy and emotional intelligence in a nurturing environment.</p>
          <div className="nursery-features">
            <span>Play-Based Learning</span>
            <span>Child-Safe Architecture</span>
          </div>
        </div>
        <div className="fs-visual">
          <img src={images.art10} alt="Nursery" className="main-f-img"/>
        </div>
      </section>
      
      {/* --- 4. LABORATORIES (DEEP TEAL THEME) --- */}
      <section className="fs-section dark-teal-bg">
        <div className="fs-visual-split">
          <img src={images.art4} alt="Lab 1" className="history-img-1"/>
          <img src={images.art5} alt="Lab 2" className="history-img-2"/>
          <img src={images.art6} alt="Lab 3" className="history-img-3"/>
          <img src={images.art8} alt="Lab 4" className="history-img-4"/>
        </div>
        <div className="fs-content-v4 left-align">
          <LuMicroscope className="f-icon orange-glow"/>
          <h2 className="f-title white-text">12 Specialized<br/>Hubs of Innovation</h2>
          <p className="f-body white-p">Ndows operates twelve modern laboratories designed to give students practical experience. From chemistry titration to robotics.</p>
        </div>
        
      </section>

      {/* --- 5. CAREER DISCOVERY --- */}
      <section className="career-discovery">
        <div className="center-header">
          <h2 className="jumbo-title">Departments & Future Paths</h2>
        </div>
        <div className="career-grid">
          {departments.map((dept,i)=>(
            <div className="career-card" key={i}>
              <div className="card-front">
                <h3>{dept.name}</h3>
                <p>{dept.desc}</p>
              </div>
              <div className="card-back">
                <h4>Potential Occupations</h4>
                <ul>{dept.careers.map((job,j)=>(<li key={j}>{job}</li>))}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. LEADERSHIP --- */}
      <section className="staff-ext-v4">
        <div className="fs-header-v4">
          <h2>Our Leadership</h2>
        </div>
        <div className="p-grid-v6">
          {staff.map((p, i)=>(
            <div className="p-card-large" key={i}>
              <div className="p-img-box"><img src={p.img} alt={p.name}/></div>
              <div className="p-details">
                <h4>{p.name}</h4>
                <span className="role-label">{p.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. TEACHERS --- */}
      <section className="teachers-wall">
        <h3>The Academic Team</h3>
        <div className="t-grid-massive">
          {[...Array(20)].map((_,i)=>(
          <div className="t-card-mini" key={i}><img src={images.art1} alt="Faculty"/>
          <div className="t-info"><h5>Senior Educator {i+1}</h5> <p>Department of Science</p></div>
          </div>
          ))}
        </div>
      </section>
      </div>
  );
}