import Education from "./Education";
import { FaGraduationCap } from "react-icons/fa";
import "./Qualifications.scss";
import { BiCalendar } from "react-icons/bi";



export default function index() {
    return (
        <section className="app__qualifications" data-aos="zoom-in-up">
            <h1 className="app__title">Qualification</h1>
            <span>Why you should hire me</span>

            <section className="app__qualifications-school">
                <h1 className="app__qualification-education"><FaGraduationCap /> Education </h1>
                    <div className="app__qualification_container">
                        {
                            Education.map((item) => (
                                <div className="quali" key={item.index}>
                                    <h4> { item.title }</h4>
                                    <h5> { item.school } </h5>
                                    <p> <BiCalendar /> { item.period } </p>
                                </div>
                            ))
                        }
                    </div>
            </section>
        </section>
    )
}