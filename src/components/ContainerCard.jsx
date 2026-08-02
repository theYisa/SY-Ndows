import { Link } from "react-router-dom";

export default function ContainerCard({id, img, title, link, further, more, location}){
    return <>
        <div className={`container ${id}`}>
            <img src={img} />
            <div className={`bottom ${id}`}>
                <p className="title">{title}</p>
                <div className="others">
                    <p  className="further">{further}</p>
                    <div className="mini-row">
                        <div className="learn"><p>Learn More</p></div>
                        <div className="see-more"><Link to={location}>{more}</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}