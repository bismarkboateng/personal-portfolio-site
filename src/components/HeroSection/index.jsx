import "./HeroSection.scss";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { Profile } from "../../assets";



export default function index() {
    return (
        <section className="app__herosection">
            <section className="app__herosection__wrapper">
                <section className="app__herosection-content">
                    <h1>Hola 👋, I'm Bismark </h1>
                    <p>Software <span className="dev">Developer</span></p>
                    <p>
                        With over a year experience in writing  <span className="dev">programs</span>, <br />
                        Converting your ideas to reality is at my <span className="dev">fingertips</span> <br /> 

                        want to take your <span className="dev">brand</span> to the next level ?
                    </p>

                    <button className="app__herosection-btn">
                        Hire me  <BiSend className="app__send"/>
                    </button>
                </section>

                <img className="app__herosection-img" src={Profile} alt="bismark" />
            </section>

            <ul className="app__herosection-icons">
                { [<FaGithub />, <BsWhatsapp />, <FaLinkedin /> ].map((item, index) => (
                    <li className="app__herosection-icons" key={index}>{ item }</li>
                )) }
            </ul>
            
        </section>
    )
}