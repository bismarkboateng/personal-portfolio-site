import { Footer, Navbar, HeroSection, Qualifications, Projects} from "./components";
import { About, Testimonial, Technologies } from "./containers";
import "./App.css";

export default function App() {
  return (
    <div className="app">
     <Navbar />
     <HeroSection />
     <About />
     <Technologies />
     <Qualifications />
     <Projects />
     <Footer />

    </div>
  )
}