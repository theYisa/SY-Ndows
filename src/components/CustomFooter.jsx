import { Link } from "react-router-dom"

export default function CustomFooter({services, links, touch, platforms, id}){
    return <div className={`footer ${id}`}>
              <div className="f-divider"></div>
              <div className="f-main-row">
                    <div className="f-columnFirst">
                        <h2 className="f-fullName">NDOWS COMPREHENSIVE COLLEGE (NCCS)</h2>
                        <div className="f-est">EST. 1996</div>
                    </div>
                    <div className="f-other-columns">
                        <div className="f-column">
                            <h3>ONLINE SERVICES</h3>
                            {services.map((e)=>{
                                return <Link className="footer-link" to={e.link}>{e.name}</Link>
                            })}
                        </div>
                        <div className="f-column">
                            <h3>QUICK LINKS</h3>
                            {links.map((e)=>{
                                return <Link className="footer-link" to={e.link}>{e.name}</Link>
                            })}
                        </div >
                        <div className="f-column">
                            <h3>GET IN TOUCH</h3>
                            {touch.map((e)=>{
                                return <Link className="footer-link" to={e.link}>{e.name}</Link>
                            })}
                    </div>
                </div>
              </div>
              <div className="f-row-bottom">
                    <div className="bottom-container">
                      <div className="legal-info">
                        <p>© 2026 Ndows School Company</p>
                        <Link className="statement">Statement of Non-Discrimination</Link>
                        <p>Closings: +220-69-856-86</p>
                      </div>
                      <div className="f-socials">
                        {platforms.map((e)=>{
                            return <Link className="social-icon" to={e.link}>{e.name}</Link>
                        })}
                      </div>
                      <p className="developer-tag">EASY Euu.<br/>Technologies</p>
                    </div>
                </div>
            </div>
}