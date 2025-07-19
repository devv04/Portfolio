// src/components/Experience.jsx
import React from "react";

const experienceData = [
  
  {
    company: "Indian Navy (WESEE)",
    role: "AI-ML Intern",
    logo: "/logos/wesee.png",
    duration: "June 2025 – Aug 2025",
  },
  {
    company: "GSSOC",
    role: "Contributor",
    logo: "/logos/gssoc.png",
    duration: "July 2025 – Present",
  },
  {
    company: "Prodigy Infotech",
    role: "SDE Intern",
    logo: "/logos/prodigy.png",
    duration: "June 2024 – June 2025",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gradient-to-b from-[#0f1115] to-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-[#00FFC6] pb-2">Experience</h2>
        
        <div className="space-y-10">
          {experienceData.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-4 flex-wrap">
              {/* Left side - logo + text */}
              <div className="flex items-center gap-4">
                <img src={item.logo} alt={item.company} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <p className="text-gray-400">{item.role}</p>
                </div>
              </div>
              
              {/* Right side - duration */}
              <p className="text-sm text-gray-400">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
