import "./Navbar.scss";


export default function index() {
    return (
        <nav className="app__nav">
            <h3 className="app__nav-name">Bismark</h3>

            <ul className="app__nav-links">
                {["Home", "About", "Projects"].map((item, index) => (
                    <a key={`${item}-${index}`} href={`#${item}`}><li>{ item } </li></a>
                )) }
            </ul>
        </nav>
    )
}