import React from "react";
import HeroSection from "./components/HeroSection";

import ProjectSection from "./components/projects";
import AboutSection from "./components/about";
import Navbar from "./components/navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ContactMe from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      
      <ProjectSection />
      <AboutSection />
      <Navbar/>
      <Experience/>
      <Education/>
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
