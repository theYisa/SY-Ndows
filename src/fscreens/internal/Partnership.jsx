import './partnership.css';
import { images } from '../../assets/index.js';
import { LuHeart, LuLightbulb, LuTrophy, LuUsers, LuQuote } from "react-icons/lu";

export default function Partnership() {
  const pillars = [
    {
      id: "01",
      title: "The Merit Scholarship",
      aim: "Empowering Brilliant Minds",
      impact: "We scout the most gifted students across the Gambia. Your support covers 100% of their tuition, ensuring that financial barriers never dim a child's genius.",
      icon: <LuUsers />,
      color: "#8b1d1d" // Deep Burgundy
    },
    {
      id: "02",
      title: "Innovation & Tech",
      aim: "Building the 13th Lab",
      impact: "Our goal is a state-of-the-art Robotics and AI center. This fund buys the 3D printers and circuit kits that put our students on the global stage.",
      icon: <LuLightbulb />,
      color: "#b29700" // Old Gold
    },
    {
      id: "03",
      title: "Athletic Excellence",
      aim: "Training Future Olympians",
      impact: "Maintenance of our professional courts and sponsorship for international tournaments. We turn the Ndows Lions into a national pride.",
      icon: <LuTrophy />,
      color: "#0a192f" // Midnight Blue
    },
    {
      id: "04",
      title: "Teacher Empowerment",
      aim: "Investing in Educators",
      impact: "We send our best faculty for international Montessori and STEM certifications. Better teachers lead to better leaders.",
      icon: <LuHeart />,
      color: "#164e63" // Teal/Cyan
    }
  ];

  return (
    <div className="charity-v5">
      
      {/* --- HERO: THE LEGACY CALL --- */}
      <section className="charity-hero-v5">
        <div className="hero-v5-content">
          <span className="kicker">THE NDOWS FOUNDATION</span>
          <h1>Invest in the <br/><span className="gold-text">Next 30 Years.</span></h1>
          <p className="large-lead">Since 1996, we have built a tradition of excellence. Join us as we build the future.</p>
          <div className="hero-btns">
            <button className="btn-gold">Make a Leadership Gift</button>
            <button className="btn-outline">View 2026 Impact Report</button>
          </div>
        </div>
      </section>

      {/* --- THE FOUR PILLARS (The 4 Columns) --- */}
      <section className="pillars-section">
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div className="pillar-card" key={p.id} style={{ '--accent': p.color }}>
              <span className="p-id">{p.id}</span>
              <div className="p-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <span className="p-aim">{p.aim}</span>
              <p>{p.impact}</p>
              <div className="p-footer">
                <button className="p-btn">Partner with us →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOUNDER'S MESSAGE (Simulated Structure) --- */}
      <section className="founder-quote-section">
        <div className="quote-container">
          <LuQuote className="quote-icon" />
          <blockquote>
            "At Ndows, we believe that education is the only legacy that never fades. 
            Our foundation ensures that this flame continues to burn brighter for 
            generations of Gambian children yet unborn."
          </blockquote>
          <div className="founder-sig">
            <img src={images.art8} alt="Director" />
            <div>
              <p className="sig-name">Board of Directors</p>
              <p className="sig-title">Ndows Comprehensive Foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RECENT IMPACT (Visual Gallery) --- */}
      <section className="impact-visuals">
        <div className="v-box-1"><img src={images.art11} alt="Impact" /><div className="v-label">New Lab Equipment</div></div>
        <div className="v-box-2"><img src={images.art12} alt="Impact" /><div className="v-label">2025 Scholarship Winners</div></div>
        <div className="v-box-3"><img src={images.art13} alt="Impact" /><div className="v-label">The Lions Training</div></div>
      </section>
    </div>
  );
}