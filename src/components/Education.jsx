// src/components/Education.jsx
import React from "react";

const educationData = [
  {
    company: "Amity University Gurugram",
    role: "B.Tech in Computer Science and Engineering",
    logo: "/logos/amity.png",
    duration: "2022 – 2026",
  },
  {
    company: "Amity University Gurugram",
    role: "Minor degree in Economics",
    logo: "/logos/amity.png",
    duration: "2022 – 2025",
  },
  {
    company: "Vaish Public School",
    role: "Class I - XII (CBSE)",
    logo: "/logos/vps.png",
    duration: "2009 –  2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-b from-[#0f1115] to-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-[#00FFC6] pb-2">Education</h2>
        
        <div className="space-y-10">
          {educationData.map((item, index) => (
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
