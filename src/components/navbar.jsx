import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 bg-[#0a0a0a] text-white px-6 py-4 flex justify-between items-center shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-xl font-bold">Welcome </h1>
      <ul className="flex gap-6 font-medium text-white">
        <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>
    </motion.nav>
  );
}
