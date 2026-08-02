import React from "react";
import "./about.css";
import { images } from "../../assets/index.js";

import { 
  LuTarget, 
  LuEye, 
  LuBookOpen, 
  LuGlobe, 
  LuShieldCheck, 
  LuSparkles 
} from "react-icons/lu";

export default function About() {

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="blue-text">
            The Story & <span className="orange-text">Legacy of NDOWS</span>
          </h1>

          <p className="subtitle">
            Since 1996, Ndow’s Comprehensive School has been shaping
            the future of Gambian education through academic excellence,
            strong character, and global preparation.
          </p>
        </div>
      </section>


      {/* SCHOOL STORY */}
      <section className="legacy-section">
        <div className="legacy-container">

          <div className="legacy-text">
            <h2>
              A Legacy of <span className="orange-text">Excellence</span>
            </h2>

            <p>
              Founded in 1996, Ndow’s Comprehensive School began with a simple
              but powerful vision: to provide a world-class education rooted
              in discipline, academic rigor, and strong moral values.
            </p>

            <p>
              What started as a modest educational initiative has grown into
              one of The Gambia’s most respected comprehensive institutions,
              offering education from Nursery through Senior Secondary level.
            </p>

            <p>
              Over the years, thousands of students have passed through our
              classrooms and gone on to pursue successful careers across the
              world in medicine, engineering, business, and public service.
            </p>

            <div className="stats-mini">

              <div className="stat-item">
                <h4>9000+</h4>
                <span>Alumni Worldwide</span>
              </div>

              <div className="stat-item">
                <h4>100%</h4>
                <span>WASSCE Pass Rate</span>
              </div>

              <div className="stat-item">
                <h4>25+</h4>
                <span>Years of Excellence</span>
              </div>

            </div>
          </div>

          <div className="legacy-visual">
            <div className="abstract-shape"></div>
          </div>

        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="mission-vision">

        <div className="about-card">
          <div className="icon-box-orange">
            <LuTarget size={30}/>
          </div>

          <h3>Our Mission</h3>

          <p>
            To provide a holistic and disciplined education that empowers
            every Gambian child with knowledge, integrity, leadership
            qualities, and the confidence to succeed globally.
          </p>
        </div>


        <div className="about-card">
          <div className="icon-box-blue">
            <LuEye size={30}/>
          </div>

          <h3>Our Vision</h3>

          <p>
            To remain the premier Nursery-to-Senior institution in West Africa,
            recognized for academic excellence, moral leadership,
            and innovation in education.
          </p>
        </div>

      </section>


      {/* MESSAGE FROM THE HEAD */}
      <section className="leadership-message">

        <div className="message-container">

          <div className="message-image">
            <img src={images.art6} alt="Head of School"/>
            <div className="image-accent"></div>
          </div>

          <div className="message-text">

            <span className="small-label">
              MESSAGE FROM THE EXECUTIVE DIRECTOR
            </span>

            <h2>
              Leading with <span className="blue-text-small">Vision</span>
            </h2>

            <p>
              “At Ndow’s Comprehensive School, we believe education is more
              than textbooks and examinations. It is about shaping responsible
              citizens, critical thinkers, and compassionate leaders.
            </p>

            <p>
              Our commitment since 1996 has been to ensure every child
              receives the guidance, discipline, and knowledge necessary
              to thrive in a rapidly changing world.”
            </p>

            <h4 className="signature">
              Dr. Yahaya Umar
            </h4>

            <span className="title-tag">
              Executive Director
            </span>

          </div>

        </div>

      </section>


      {/* FOUR PILLARS */}
      <section className="pillars-section">

        <div className="pillars-header">
          <h2>The Ndow’s Foundation</h2>
          <div className="orange-line-center"></div>
        </div>

        <div className="pillars-grid">

          <div className="pillar-item">
            <LuBookOpen className="p-icon"/>
            <h4>Academic Rigor</h4>
            <p>
              Maintaining consistently outstanding performance in WASSCE
              and national examinations.
            </p>
          </div>

          <div className="pillar-item">
            <LuShieldCheck className="p-icon"/>
            <h4>Character Development</h4>
            <p>
              Instilling discipline, leadership, and strong moral values
              in every student.
            </p>
          </div>

          <div className="pillar-item">
            <LuGlobe className="p-icon"/>
            <h4>Global Outlook</h4>
            <p>
              Preparing students for universities across Africa,
              Europe, and North America.
            </p>
          </div>

          <div className="pillar-item">
            <LuSparkles className="p-icon"/>
            <h4>Innovation</h4>
            <p>
              Integrating modern technology and digital learning tools
              into everyday education.
            </p>
          </div>

        </div>

      </section>


      {/* CAMPUS LIFE */}
      <section className="about-gallery">

        <div className="gallery-main">

          <img src={images.art14} alt="Campus Life"/>

          <div className="gallery-overlay">
            <h3>A Vibrant Community</h3>

            <p>
              At Ndow’s Comprehensive School, learning extends beyond
              the classroom through sports, cultural clubs,
              leadership programs, and community service initiatives.
            </p>

          </div>

        </div>

      </section>


    </div>
  );
}