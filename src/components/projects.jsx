import { motion } from "framer-motion";
import React from 'react';

// Import images so Vite can process them
import iminsightImage from '../assets/iminsight.png';
import bitewiseImage from '../assets/kawai (4).png';
import kawaiToDoImage from '../assets/kawai (1).png';
import heartDiseaseDetectiveImage from '../assets/heart.png';

const projects = [
  {
    title: "IMInsight",
    description: "A smart image analysis tool that detects objects, generates captions, and performs threat detection using CLIP, BLIP, YOLOv8, and a Flask backend with a React frontend.",
    image: iminsightImage,
    tags: ["React + Vite", "Flask", "YOLOv8", "CLIP", "BLIP", "Python", "Deep Learning"],
    githubLink: "https://github.com/devv04/IMInsight",
  },
  {
    title: "BiteWise",
    description: "A personal smart food monitoring AI assistant that provides a detailed health analysis, including a health score, potential warnings, allergens, and nutritional suggestions.",
    image: bitewiseImage,
    tags: ["React + Vite", "TailwindCSS", "Flask", "OpenCV", "Pillow","Gemini API"],
    githubLink: "https://github.com/devv04/BiteWise",
  },
  {
    title: "Kawai-To-Do",
    description: "A cute Anime inspired to-do list application built with JavaScript and TailwindCSS.",
    image: kawaiToDoImage,
    tags: ["TailwindCSS", "JavaScript", "HTML5"],
    githubLink: "https://github.com/devv04/kawai-To-Do",
  },
  {
    title: "HeartDiseaseDetective",
    description: "A machine learning project that predicts the likelihood of heart disease based on user-provided health data.",
    image: heartDiseaseDetectiveImage,
    tags: ["Scikit-learn", "Pandas", "Seaborn", "Python", "Machine Learning"],
    githubLink: "https://github.com/devv04/HeartDiseaseDetective",
  },
];

// SVG Icon for GitHub button
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // --- BORDER GLOW EFFECT UPDATED HERE ---
              className="bg-[#111111] rounded-xl overflow-hidden flex flex-col border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(0,255,209,0.4)] hover:border-[#00FFD1]/90"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 text-black rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
                    >
                      <GithubIcon />
                      Github
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
