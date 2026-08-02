import { Link } from "react-router-dom"

export default function EventCard({img, events, eventFull, nb, location}){
    return (
    <div className={`e-card ${nb}`}>
        <img src={img} />
        <div className="e-duas">
            <p className="main">{events}</p>
            <p className="fill">{eventFull}</p>
        </div>
        <Link  to={location} >
            <div className="forhover">
                <p className="more">LEARN MORE</p>
                <div className="line"></div>
            </div>
        </Link>
        
    </div>)
}