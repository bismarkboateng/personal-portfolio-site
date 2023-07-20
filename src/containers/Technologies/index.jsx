import "./Technologies.scss";
import { TbCodeAsterix } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { FESkills, BESkills } from "./Skill";


const Div = () => {
    return (
        <div className="div__underline"/>
    )
}

export default function index() {
    return (
        <section className="app__technologies">
            <h1 className="app__technology">Technologies</h1>
            <span>Expert proficiency</span>

            <section className="app__frontend__backend__wrapper">
                <section className="app__frontend">
                    <h1> <TbCodeAsterix className="fe__icon"/> Frontend development</h1>
                    {
                        FESkills.map((item) => (
                            <div>
                                <li className="fe__skills" key={item.index}>{ item.title }</li>
                                <Div />    
                            </div>
                        ))
                    }   
                </section>

                <section className="app__backend">
                    <h1> <FaServer className="be__icon" /> Backend development</h1>
                    {
                        BESkills.map((item) =>(
                            <div>
                                <li className="be__skills" key={item.index}>{ item.title }</li>
                                <Div />
                            </div>
                        )) 
                    }
                </section>
            </section>
        </section>
    )
}