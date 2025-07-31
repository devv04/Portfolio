import React from "react";

const experiences = [
  {
    role: "AI-ML Intern",
    company: "Indian Navy (WESEE)",
    description: [
      "Worked on defense-focused AI/ML solutions.",
      "Worked on a Image Analysis Project using YOLOv8, CNN and BLIP."
    ],
    duration: "June 2025 – Aug 2025",
    logo: "/logos/wesee.png",
  },
  {
    role: "Contributor",
    company: "GSSOC",
    description: [
      "Contributing to open-source repositories and Projects.",
      "Collaborating with Project admins and improving docs and code."
    ],
    duration: "July 2025 – Present",
    logo: "/logos/gssoc.png",
  },
  {
    role: "SDE Intern",
    company: "Prodigy Infotech",
    description: [
      "Developed small-scale projects such as a To-Do application, Sudoku solver using OOPS in java and documentation.",
      
    ],
    duration: "June 2024 – June 2025",
    logo: "/logos/prodigy.png",
  },
];

const Experience = () => {
  return (
    <section className="relative bg-black text-white py-16 px-4 sm:px-8 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-[#00FFD1] mb-16">
        Experience
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-32 bottom-10 w-1 bg-[#00FFD1] transform -translate-x-1/2 z-0 rounded-lg shadow-md"></div>

      {/* Timeline Boxes */}
      <div className="relative z-10 flex flex-col gap-20">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"
            }`}
          >
            <div className="bg-[#121212] border border-gray-700 p-6 rounded-2xl w-full max-w-md shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,255,209,0.4)] hover:border-[#00FFD1]/60">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt="logo"
                  className="w-12 h-12 rounded-full border border-[#00FFD1]"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-sm text-[#00FFD1]">{exp.role}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-400 text-lg leading-relaxed space-y-1">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4 italic">{exp.duration}</p>
            </div>

            {/* Dot on the center line */}
            <div className="absolute left-1/2 w-5 h-5 bg-[#00FFD1] border-4 border-black rounded-full transform -translate-x-1/2 z-20 shadow-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
