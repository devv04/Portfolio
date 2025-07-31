import React from "react";
// ...existing code...
import HeroSection from "./components/HeroSection";
// ...existing code...
import AboutSection from "./components/about";
import Navbar from "./components/navbar";
import Experience from "./components/Experience";
import ProjectSection from "./components/projects";
import Skills from "./components/skills";
import Education from "./components/Education";
import ContactMe from "./components/contact";
import Footer from "./components/footer";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#0f172a", // same as bg-gray-900
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#00ffd1",
      },
      links: {
        color: "#00ffd1",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative bg-gray-900 text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Experience />
      <ProjectSection />
      <Skills />
      <Education />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
