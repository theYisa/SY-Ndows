import React, { useEffect, useState } from 'react';
import './admission.css';
import { images } from '../../assets/index.js';
import { LuFileCheck, LuCalendar, LuCreditCard, LuUserPlus, LuGlobe, LuMapPin, LuFlag } from "react-icons/lu";
import { useLocation, Link } from 'react-router-dom';

export default function Admission() {
  const [activeTab, setActiveTab] = useState('nursery');
  const {hash} = useLocation();
  useEffect(()=>{
    if (hash){
      const element = document.getElementById(hash.replace('#', ''));
      if (element){
        setTimeout(()=>{
          element.scrollIntoView({ behavior: 'smooth'});
        }, 100);
      }
    }
  }, [hash])

  const admissionData = {
    nursery: {
      title: "Early Years Foundation",
      age: "2.5 - 5 Years",
      desc: "Our Nursery program focuses on play-based learning and social development to give your child a head start.",
      req: ["Immunization Card", "2 Passport Photos", "Interview with Head of Early Years"]
    },
    primary: {
      title: "Lower & Upper Primary",
      age: "6 - 11 Years",
      desc: "A rigorous blend of the Gambian National Curriculum and international standards.",
      req: ["Previous School Records", "Transfer Certificate", "Entrance Examination (Math & English)"]
    },
    secondary: {
      title: "Junior & Senior Secondary",
      age: "12 - 18 Years",
      desc: "Preparing students for WASSCE and beyond with specialized academic streams.",
      req: ["GABECE Results (for Senior Sec)", "Transcript of last 3 years", "Entrance Placement Test"]
    }
  };

  return (
    
    <div className="admission-page">
      <section className="adm-hero">
        <div className="adm-hero-content">
          <h1>Enroll Your Child <br/> at <span className="orange-text">Ndows</span></h1>
          <p>The journey to a world-class education starts here. Application form fee: <strong>D1,000</strong></p>
        </div>
        <div className="adm-hero-stats">
          <div className="stat-box"><strong>D1,000</strong><span>Form Fee</span></div>
          <div className="stat-box"><strong>Aug 15</strong><span>Deadline</span></div>
        </div>
      </section>

      {/* --- Requirement Categories (National vs Foreign) --- */}
      <section className="category-section">
        <div className="section-header">
          <h2>Identification Requirements</h2>
          <p>Please provide documents based on your nationality status</p>
        </div>
        <div className="category-grid">
          <div className="cat-card">
            <LuFlag className="cat-icon blue" />
            <h4>Gambian Nationalists</h4>
            <ul>
              <li>Gambian Birth Certificate</li>
              <li>National ID of Parent/Guardian</li>
            </ul>
          </div>
          <div className="cat-card">
            <LuMapPin className="cat-icon orange" />
            <h4>ECOWAS Citizens</h4>
            <ul>
              <li>Valid ECOWAS Passport</li>
              <li>Residential Permit (Type B)</li>
            </ul>
          </div>
          <div className="cat-card">
            <LuGlobe className="cat-icon light-blue" />
            <h4>International Expatriates</h4>
            <ul>
              <li>International Passport</li>
              <li>Alien Certificate / Residence Permit</li>
              <li>Clearance from Ministry of Education</li>
            </ul>
          </div>
        </div>
      </section>


      {/* --- The Tabbed Info Section --- */}
      <section className="level-details">
        <div className="tab-switcher">
          <button className={activeTab === 'nursery' ? 'active' : ''} onClick={() => setActiveTab('nursery')}>Nursery</button>
          <button className={activeTab === 'primary' ? 'active' : ''} onClick={() => setActiveTab('primary')}>Primary</button>
          <button className={activeTab === 'secondary' ? 'active' : ''} onClick={() => setActiveTab('secondary')}>Secondary</button>
        </div>

        <div className="details-card-v4">
          <div className="details-text">
            <span className="age-tag">{admissionData[activeTab].age}</span>
            <h3>{admissionData[activeTab].title}</h3>
            <p className="main-desc">{admissionData[activeTab].desc}</p>
            
            <div className="req-wrapper">
              <h4>Academic Requirements:</h4>
              <ul className="req-list">
                {admissionData[activeTab].req.map((item, index) => (
                  <li key={index}>— {item}</li>
                ))}
              </ul>
            </div>

            <div className="fee-notice">
              <LuCreditCard />
              <span>Application Form Fee: <strong>1,000 Dalasi</strong> (Non-refundable)</span>
            </div>
            
            <button className="apply-btn-big">DOWNLOAD PROSPECTUS</button>
          </div>
          <div className="details-image">
            <img src={activeTab === 'nursery' ? images.art10 : images.art5} alt="School life" />
          </div>
        </div>
      </section>

      {/* --- The Process Steps --- */}
      <section className="process-section">
        <div className="section-header">
          <h2>4 Simple Steps to Join Us</h2>
          <div className="orange-bar"></div>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <LuFileCheck size={30} />
            <h4>Inquiry</h4>
            <p>Visit our campus in Kanifing or fill the online form.</p>
          </div>
          <div className="step-card highlight">
            <div className="step-num">02</div>
            <LuCalendar size={30} />
            <h4>Assessment</h4>
            <p>Schedule an entrance exam or a social interview.</p>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <LuUserPlus size={30} />
            <h4>Interview</h4>
            <p>Meet with the level coordinator and the Principal.</p>
          </div>
          <div className="step-card">
            <div className="step-num">04</div>
            <LuCreditCard size={30} />
            <h4>Payment</h4>
            <p>Secure the seat by paying the non-refundable fee.</p>
          </div>
        </div>
      </section>

      {/* --- Enquiry Form --- */}
      <section id='enquiry-details' className="enquiry-footer">
        <div className="form-box">
          <h2>Application Inquiry</h2>
          <div className="form-row">
            <input type="text" placeholder="Parent Name" />
            <select placeholder='Nationality'>
              <option>Gambian</option>
              <option>West African</option>
              <option>Other Africans</option>
              <option>Foreigners</option>
            </select>
          </div>
          <select>
            <option>Enquires about Admission</option>
            <option>Information on other things</option>
            <option>Give comments</option>
            <option>Give complaints</option>
          </select>
          <select>
            <option>Select Level</option>
            <option>Lower Basic Nursery</option>
            <option>Lower Basic (Grade 1 -6)</option>
            <option>Junior Secondary</option>
            <option>Senior Secondary</option>
            <option>Others</option>
          </select>
          <div className="submit-orange"><Link className='s' to='/'>GET A FEEDBACK</Link></div>
          <div className="submit-blue"><Link className='s' to='/apply'>PROCEED TO APPLICATION (D1,000)</Link></div>
        </div>
      </section>
    </div>
  );
}