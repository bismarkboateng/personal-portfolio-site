import { Footer, Navbar } from "./components";
import { About, Skills, Testimonial, Work } from "./containers";
import "./App.css";

export default function App() {
  return (
    <div className="app">
     <Navbar />
     <About />
     <Skills />
     <Testimonial />
     <Work />
     <Footer />

    </div>
  )
}