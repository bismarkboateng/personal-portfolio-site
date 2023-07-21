import { Footer, Navbar, HeroSection, Qualifications} from "./components";
import { About, Testimonial, Work, Technologies } from "./containers";
import "./App.css";

export default function App() {
  return (
    <div className="app">
     <Navbar />
     <HeroSection />
     <About />
     <Technologies />
     <Qualifications />
     <Work />
     <Footer />

    </div>
  )
}