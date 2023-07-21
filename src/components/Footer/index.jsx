import "./Footer.scss";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiSend } from "react-icons/bi";

const Data = [
    { icon: <BsTelephone />, name: "Prefer Calling?", content: "+233553597847"},
    { icon: <AiOutlineMail />, name: "Mail", content: "bismarkb609@gmail.com"},
    { icon: <GoLocation /> , name: "Location", content: "Remote / Hybrid"} 
]



export default function index() {
    return (
        <footer className="app__footer__wrapper">
            <div className="app__footer">
                <div className="app__titles">
                    <h1>Bismark</h1>
                    <span>Software Engineer</span>
                </div>

                <div className="app__footer-contacts">
                    {Data.map((item, index) => (
                        <li key={index} className="app__footer-contacts">
                            <p>{ item.icon }</p>
                            <div>
                                <h5>{ item.name }</h5>
                                <div>{ item.content }</div>
                            </div>
                        </li>
                    ))}
                </div>

                <div className="app__footer-links">
                    {["Services", "Technologies", "About Me"].map((item, index) => (
                        <li className="" key={`${item}-${index}`}>{ item }</li>
                    ))}
                </div>
            </div>

            <div className="app__footer-copyright"> 
                &copy;
                Bismark Boateng. All rights reserved
            </div>
        </footer>
    )
}