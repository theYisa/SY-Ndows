import { LuAirVent, LuShare } from "react-icons/lu"
import '../fscreens/nav/home.css'

export default function SocialCard({img, text, date, nb}){
    return <div className={`s-card ${nb}`}>
        <img src={img} />
        <div className="s-icon">
            <div className="s-point"></div>
        </div>
        <p className="s-title">dowschatRoom</p>
        <p className="s-text">{text}</p>
        <div className="s-row">
            <div className="s-circle"><LuAirVent /></div>
            <p>{date}</p>
            <LuShare />
        </div>
    </div>
}