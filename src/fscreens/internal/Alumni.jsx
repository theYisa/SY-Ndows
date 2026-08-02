import './alumni.css';
import { images } from '../../assets/index.js';
import { LuGraduationCap, LuHistory, LuGlobe, LuAward, LuCamera } from "react-icons/lu";

export default function Alumni() {
  const alumniSpotlights = [
    { name: "Dr. Lamin Sesay", class: "1998", story: "Now a leading surgeon in the UK.", img: images.art6 },
    { name: "Mariama Njie", class: "2005", story: "Founder of a Pan-African Tech Hub.", img: images.art7 },
    { name: "Yusuf Bojang", class: "2012", story: "International Human Rights Lawyer.", img: images.art8 },
  ];

  return (
    <div className="alumni-page">
      {/* --- HERO: THE GOLDEN LEGACY --- */}
      <section className="alumni-hero">
        <div className="hero-gold-overlay">
          <LuGraduationCap className="big-icon-gold" />
          <h1 className="jumbo-title white">The Legacy of <br/><span>Ndows Excellence</span></h1>
          <p className="large-lead">9,000+ Alumni. 30 Years of Impact. One Community.</p>
        </div>
      </section>

      {/* --- GRADUATION CEREMONY: THE EXPERIENCE --- */}
      <section className="grad-ceremony">
        <div className="grad-content">
          <h2 className="jumbo-title dark">The Graduation Day</h2>
          <p className="big-prose">
            The Ndows Graduation is more than a ceremony; it is a rite of passage. 
            Since our first set in <strong>1996</strong>, we have maintained a tradition 
            of dignity, academic pride, and celebration. From the valedictorian's 
            speech to the final tossing of the caps, it is a day where the Gambia 
            witnesses the birth of its next leaders.
          </p>
          <div className="tradition-list">
            <div className="t-box"><LuAward /> Prize Giving</div>
            <div className="t-box"><LuHistory /> The Torch Passing</div>
            <div className="t-box"><LuGlobe /> Alumni Induction</div>
          </div>
        </div>
        <div className="grad-visual-grid">
          <img src={images.art0} alt="Graduation 1" className="grad-img-1" />
          <img src={images.art1} alt="Graduation 2" className="grad-img-2" />
        </div>
      </section>

      {/* --- THE VINTAGE VAULT (1996 - Present) --- */}
      <section className="gallery-vault">
        <div className="vault-header">
          <h2 className="jumbo-title white">The Vintage Vault</h2>
          <p>Explore our history through the lens. Click a decade to view memories.</p>
        </div>

        <div className="decade-selector">
          <div className="decade-card">
            <div className="decade-img"><img src={images.art2} alt="90s" /></div>
            <div className="decade-info">
              <h3>The 1990s</h3>
              <p>Where it all began. The pioneers of 1996.</p>
              <button className="view-btn">Open Archive</button>
            </div>
          </div>
          <div className="decade-card active">
            <div className="decade-img"><img src={images.art3} alt="2000s" /></div>
            <div className="decade-info">
              <h3>The 2000s</h3>
              <p>Expansion and first national awards.</p>
              <button className="view-btn">Open Archive</button>
            </div>
          </div>
          <div className="decade-card">
            <div className="decade-img"><img src={images.art4} alt="2010s" /></div>
            <div className="decade-info">
              <h3>The 2010s</h3>
              <p>The era of digital transition.</p>
              <button className="view-btn">Open Archive</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALUMNI SPOTLIGHT: THE SUCCESS STORIES --- */}
      <section className="spotlight-section">
        <h2 className="jumbo-title center-text">Alumni Spotlights</h2>
        <div className="spotlight-grid">
          {alumniSpotlights.map((alum, i) => (
            <div className="alum-card" key={i}>
              <div className="alum-img-wrap">
                <img src={alum.img} alt={alum.name} />
                <span className="class-year">Class of {alum.class}</span>
              </div>
              <div className="alum-bio">
                <h4>{alum.name}</h4>
                <p>{alum.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MASSIVE CALL TO ACTION --- */}
      <section className="alumni-cta">
        <div className="cta-box">
          <h2>Are you an Alumnus?</h2>
          <p>Join the Ndows Global Network. Update your records and connect with thousands of classmates across the world.</p>
          <button className="gold-btn">Join the Alumni Portal</button>
        </div>
      </section>
    </div>
  );
}