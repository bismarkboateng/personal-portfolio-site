import "./About.scss";
import { AboutMeProfile } from "../../assets"
import Data from "./Data";


const Parts = () => {
    return (
        <div className="app__parts">
            { Data.map((item)=> (
                <ul className="app__parts-ul">
                    <li className="part__num">{item.num}</li>
                    <li className="part__text">{item.text}</li>
                </ul>
            ))}
        </div>
    )
}



export default function index() {
    return (
        <section className="app__about" id="About">
            <h1 className="app__about-title">About Me</h1>
            <span>Get to know me</span>

            <section className="app__about_wrapper">
                <img src={AboutMeProfile} alt="art profile" className="profile-image"/>
                <section className="app__about-content">
                    <p>
                     With a proven track record of more than a year in software development, <br />
                     I possess the expertise to effectively bridge the gap between your business <br />
                     and its valued customers. Combining my proficient developer skills with a <br />
                     keen understanding of SEO principles, I am well-equipped to optimize your <br />
                     online presence and enhance your reach.<br />
                        <br />
                     If you have a project in mind, look no further than hiring me to <br />
                     ensure a seamless and successful development journey. My commitment <br />
                     to delivering exceptional results and unwavering dedication to quality <br />
                     guarantees a gratifying experience for you and your stakeholders.<br />
                    </p>

                    <a href="https://github.com/bismarkboateng" target="_blank">
                        <button className="app__about-cv">
                            View github
                        </button>
                    </a>
                </section>
            </section>
            <Parts />
        </section>
    )
}