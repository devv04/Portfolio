import React from 'react';

const About = () => {
  return (
    // 1. Removed flexbox classes and adjusted padding for consistency
    <section id="about" className="py-20 bg-[#121212] text-white">
      {/* 2. Used mx-auto to center the div and added responsive padding */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-[#00FFC6] pb-2">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hey there! I'm <span className="text-[#00FFC6] font-semibold">Dev</span>, an aspiring software engineer passionate about building modern web apps, training object detection models and solving real-world problems with code.
          With a knack for clean design and functional UI, I enjoy working with JavaScript, React, Python, Machine Learning and Object detection and classification in Deep Learning. 
          <br /><br />
          Outside code, I live for tech memes, coffee, exploring new places, meeting new people- listening to their stories and learning new things. I am Microsoft Student Ambassador BETA by MLSA. Looking for new opportunities to grow and contribute. I am also passionate about animal welfare and have previously fundraised for an NGO named Pawzz.
          <br />
        </p>
        <p className="text-center mt-4 text">
          Let's connect and create something amazing together!
        </p>

      </div>
    </section>
  );
};

export default About;
