import "./sport.css";
import { images } from "../../assets/index.js";
import { LuDribbble, LuTrophy, LuUsers, LuTimer, LuMedal } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Sport() {
  const disciplines = [
    { title: "Basketball", coach: "Coach Mendy", img: images.art14, icon: <LuDribbble /> },
    { title: "Football", coach: "Coach Jallow", img: images.art11, icon: <LuTrophy /> },
    { title: "Athletics", coach: "Ms. Bah", img: images.art5, icon: <LuTimer /> },
  ];

  return (
    <div className="sp-page">
      {/* 1. HERO SECTION */}
      <section className="sp-hero">
        <div className="sp-hero-img">
          <img src={images.art14} alt="Basketball Court" />
          <div className="sp-overlay"></div>
        </div>
        <div className="sp-hero-text">
          <LuDribbble className="sp-icon-glow" />
          <h1>Cradle of <br/><span>Champions.</span></h1>
          <p>At Ndows, we don't just play games; we build character, discipline, and the competitive spirit of the Lions.</p>
          <div className="sp-tag">HOME OF THE LIONS</div>
        </div>
      </section>

      {/* 2. THE MAGAZINE GRID (Disciplines) */}
      <section className="sp-grid-sec">
        <div className="sp-header">
          <h2>Athletic Disciplines</h2>
          <p>Professional coaching across multiple fields.</p>
        </div>
        <div className="sp-mag-grid">
          {disciplines.map((d, i) => (
            <div className="sp-card" key={i}>
              <img src={d.img} alt={d.title} />
              <div className="sp-card-info">
                {d.icon}
                <h3>{d.title}</h3>
                <span>Head: {d.coach}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HALL OF FAME / STATS */}
      <section className="sp-stats">
        <div className="sp-stat-item">
          <LuMedal size={40} />
          <div className="sp-stat-txt">
            <strong>12+</strong>
            <span>National Trophies</span>
          </div>
        </div>
        <div className="sp-stat-item">
          <LuUsers size={40} />
          <div className="sp-stat-txt">
            <strong>400+</strong>
            <span>Active Student Athletes</span>
          </div>
        </div>
        <div className="sp-stat-item highlight">
          <Link to='/admission#enquiry-details' className="sp-stat-txt">
            <strong>JOIN THE SQUAD</strong>
            <span>Tryouts start every September</span>
          </Link>
        </div>
      </section>

      {/* 4. INTER-HOUSE RIVALRY */}
      <section className="sp-houses">
        <div className="house-box">
          <h2>The Inter-House Spirit</h2>
          <p>Our annual athletics championship is the biggest event in the school calendar, featuring our four legendary houses.</p>
          <div className="house-colors">
            <div className="h-circle red"><span>Red House</span></div>
            <div className="h-circle blue"><span>Blue House</span></div>
            <div className="h-circle green"><span>Green House</span></div>
            <div className="h-circle yellow"><span>Yellow House</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}