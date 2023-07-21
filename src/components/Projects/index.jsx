import ProjectsData from "./ProjectsData"
import "./Projects.scss"

export default function index() {
    return (
        <section className="app__projects" id="Projects">
            <h1 className="app__projects-title">Projects</h1>
            <span className="sampe__project">Sample Works</span>

            <div className="app__project__wrapper">
                { ProjectsData.map((item) => (
                    <div className="app__project-content">
                        <img className="app__project-img" src={item.image} alt="portfolio project" />
                        <p>{ item.description } </p>
                        <div className="app__project-btns">
                            {/* <button className="demo">
                                Demo
                            </button> */}
                            <a href={item.link} target="_blank">
                                <button className="code">
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                )) }
            </div>

        </section>
    )
}   