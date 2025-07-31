import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiEnvelopeSimpleBold } from "react-icons/pi";
import { RxPaperPlane } from "react-icons/rx";
import { SiX } from "react-icons/si";
import profileImage from "../assets/profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 bg-black text-white overflow-hidden">
      {/* Left Section */}
      <div className="max-w-xl z-10 mt-10 md:mt-0">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey there,<br />
          I'm <span className="text-[#00FFD1]">Dev</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm a MVP builder and developer, turning ideas into
          production-ready products—handling everything from concept to deployment
          with a complete modern tech stack. Currently pursuing my B.Tech in Computer Science and a Minor degree in Economics.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-md font-medium shadow-md hover:shadow-xl transition"
          >
            <PiEnvelopeSimpleBold className="text-xl" />
            Get in touch
          </a>
          <a
            href="https://drive.google.com/file/d/1Dri1vwWKaHLWBaybcnbDyszYsE15dRRg/view?usp=sharing"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0f0f0f] border border-gray-600 rounded-md font-medium hover:bg-gray-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxPaperPlane className="text-xl" />
            My Resume
          </a>
        </motion.div>

        <motion.div
          className="flex gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://x.com/Dexxtrrrr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0f0f0f] p-3 rounded-full border border-gray-700 hover:bg-[#111]"
          >
            <SiX className="text-xl" />
          </a>
          <a
            href="https://github.com/devv04"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0f0f0f] p-3 rounded-full border border-gray-700 hover:bg-[#111]"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/devgarg04/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0f0f0f] p-3 rounded-full border border-gray-700 hover:bg-[#111]"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </motion.div>
      </div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
  src={profileImage}
  alt="Dev"
  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-2 border-[#00FFD4] shadow-xl z-10 animate-float transition duration-300 hover:shadow-[0_0_25px_rgba(0,255,209,0.4)]"
/>

      </motion.div>
    </section>
  );
};

export default HeroSection;
