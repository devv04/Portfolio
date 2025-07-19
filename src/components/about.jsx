import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-start bg-[#121212] text-white px-10">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-[#00FFC6] pb-2">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hey there! I'm <span className="text-[#00FFC6] font-semibold">Dev</span>, a software engineer passionate about building modern web apps and solving real-world problems with code.
          With a knack for clean design and functional UI, I enjoy working with JavaScript, React, Python, and Machine Learning.
          <br /><br />
          Outside code, I live for tech memes, late-night debugging marathons, and perfectly brewed coffee.
        </p>
      </div>
    </section>
  );
};

export default About;
