import { motion } from "framer-motion";

const projects = [
  {
    title: "IMInsight",
    description: "A smart naval image analysis tool using CLIP, YOLOv8, and Flask + React.",
    link: "#",
  },
  {
    title: "BiteWise",
    description: "AI-powered food label decoder with GPT FAQ assistant and nutrition insight.",
    link: "#",
  },
  {
    title: "HeartDoc",
    description: "ML-based heart disease prediction with interactive user input.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#00FFD1]">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 text-[#00FFD1] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
