import { Footer, Navbar, HeroSection, Qualifications, Projects } from "./components";
import { About, Technologies } from "./containers";
import "./App.css";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200,   // Offset (in pixels) from the top of the viewport
      easing: 'ease-in-out', // Easing function for the animation
      mirror: true,   // Whether to mirror the animations on scroll up
    });
  }, []);

  return (  
    <>
      <div className="app">
        <Navbar />
        <HeroSection />
        <About />
        <Technologies />
        <Qualifications />
        <Projects />
      </div>
      <Footer />
    </>
  )
}