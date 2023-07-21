import "./HeroSection.scss";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { Profile } from "../../assets";

const Links = [
    { 
        icon: <FaGithub />,
        link: "https://github.com/bismarkboateng"
    },
    {
        icon: <BsWhatsapp />,
        link: "https://wa.me/233553597847"
    },
    {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/bismark-boateng-516a48211"
    }
]



export default function index() {
    return (
        <section className="app__herosection" id="Home">
            <section className="app__herosection__wrapper">
                <section className="app__herosection-content">
                    <h1>Hola 👋, I'm Bismark </h1>
                    <p>Software<span className="dev">Engineer</span></p>
                    <p>
                        With a wealth of experience spanning over a year in <span className="dev">programming</span>,  <br />
                        transforming your ideas into reality is second nature to me. <br />
                        If you're looking to elevate your <span className="dev">brand</span> to new heights,  <br />
                        I've got the expertise to make it happen.  <br />
                        <br />
                        Let's take your <span className="dev">brand</span> to the next level with <span className="dev">professional</span>,  <br />
                        innovative solutions tailored to your unique identity and goals.  <br />
                        Together, we'll <span className="dev">unlease</span> the full potential of your <span className="dev">brand</span> and  <br />
                        create a future that exceeds all expectations. <br />
                    </p>

                    <a href="https://wa.me/233553597847" target="_blank" style={{ textDecoration: "none"}}>
                        <button className="app__herosection-btn">
                            Hire me  <BiSend className="app__send"/>
                        </button>
                    </a>
                </section>

                <img className="app__herosection-img" src={Profile} alt="bismark" />
            </section>

            <ul className="app__herosection-icons">
                { 
                Links.map((item, index) => (
                    <a href={item.link} style={{ textDecoration: "none"}} target="_blank">
                        <li className="app__herosection-icons" key={index}>{ item.icon }</li>
                    </a>
                )) }
            </ul>
            
        </section>
    )
}