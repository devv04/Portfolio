import React from 'react';

// --- SVG Icons for Skills ---
const PythonIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 128 128"><path fill="#4584b6" d="M62.39 14.96h34.43v17.21h-17.22v11.48h17.22v17.21h-17.22v42.18H45.17V14.96z"/><path fill="#ffde57" d="M65.61 113.04H31.18V95.82h17.22V84.35H31.18V67.14h17.22V26.45h17.21v86.59z"/><path fill="#ffde57" d="M59.6 54.64a5.74 5.74 0 1 1-11.48 0 5.74 5.74 0 0 1 11.48 0"/><path fill="#4584b6" d="M74.14 73.36a5.74 5.74 0 1 1-11.48 0 5.74 5.74 0 0 1 11.48 0"/></svg>
);

const ReactIcon = () => (
  <svg className="w-12 h-12" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);

const JsIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="#f7df1e" d="M0 0h24v24H0z"/><path d="M12.152 18.847h2.027v-3.983c0-.631.025-.979.076-1.328.051-.348.14-.65.266-.906.126-.256.29-.46.492-.612.202-.152.438-.228.708-.228.39 0 .71.091.96.273.25.182.448.455.594.819.146.364.219.81.219 1.339v4.621h2.027V11.23h-1.92V9.957c-.333.465-.729.82-1.188 1.064-.459.245-.98.367-1.562.367-.53 0-1.01-.08-1.438-.24-.428-.16-.784-.39-1.069-.69-.285-.3-.496-.665-.633-1.095-.137-.43-.205-.91-.205-1.441 0-.551.068-1.045.205-1.483.137-.437.348-.811.633-1.12.285-.31.641-.548 1.069-.714.428-.166.9-.25 1.413-.25.438 0 .848.067 1.23.2.382.133.7.333.958.6l-.852 1.572c-.178-.178-.38-.31-.606-.396-.226-.086-.48-.13-.762-.13-.305 0-.574.063-.809.188-.235.125-.429.3-.582.525-.153.225-.268.49-.344.795-.076.305-.114.64-.114.995 0 .4.038.76.114 1.08.076.32.19.585.344.795.153.21.347.375.582.495.235.12.504.18.809.18.282 0 .536-.047.762-.14.226-.094.424-.235.594-.422V12.91h-2.133v-1.68h4.158v7.617z"/></svg>
);

const GitIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="#f05033" d="M22.3 9.6c-.6-.6-1.5-.6-2.1 0l-1.6 1.6c-.4.4-.4 1.1 0 1.5l1.6 1.6c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-1-1 .9-1.1zm-5.8 5.8c-.6-.6-1.5-.6-2.1 0l-1.6 1.6c-.4.4-.4 1.1 0 1.5l1.6 1.6c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-1-1 .9-1.1zM13 1.2c-.7 0-1.2.6-1.2 1.2V11c0 .5.3.9.8 1.1l2.1 1.2c.3.2.7.2 1 0l2.1-1.2c.5-.2.8-.7.8-1.1V2.5c0-.7-.6-1.2-1.2-1.2h-4.4zm-1.8 10.6L9.1 13c-.3.2-.7.2-1 0L6 11.8c-.5-.2-.8-.7-.8-1.1V2.5c0-.7.6-1.2 1.2-1.2h4.4c.7 0 1.2.6 1.2 1.2v.7c0 .7-.6 1.2-1.2 1.2H7.2v5.1l2.1 1.2c.3.2.7.2 1 0l1.2-.7c.7-.4 1.5.1 1.5.9v.1c0 .4-.2.8-.5 1z"/></svg>
);

const Html5Icon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="#e34f26" d="m3.3 21.3l1.8-20.7h13.8l-1.8 20.7-5.1 1.4z"/><path fill="#f16529" d="m12 3.8v17.5l4.3-1.2 1.5-16.3z"/><path fill="#ebebeb" d="M12 8.2H8.6l-.2-2.2H12zm0 4.4H9l-.2-2.2H12zm0 4.3l-.1.1-2.4-.7-.1-1.4h-2.2l.3 3.2 4.5 1.2.1-.1z"/><path fill="#fff" d="M12 8.2v2.2h3.2l-.3 3.2h-2.9v2.2h5.1l-.1-1.1-.5-5.5z"/></svg>
);

const JavaIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="#f89820" d="M18 5c0-1.1-.9-2-2-2h-2.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H16v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V5z"/><path fill="#5382a1" d="M12 3C9.24 3 7 5.24 7 8c0 2.21 1.45 4.1 3.44 4.73.3.09.56.36.56.67v4.1c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4.1c0-.31.26-.58.56-.67C16.55 12.1 18 10.21 18 8c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/><path fill="#f89820" d="M6 16h12v2H6z"/></svg>
);

const GitHubIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/></svg>
);

const PandasIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6v12h16V6H4zm2 2h4v2H6V8zm0 4h4v2H6v-2zm0 4h4v2H6v-2zm12 2h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2z"/></svg>
);
const MachineLearningIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2v2.28c-.6.35-1.12.79-1.53 1.3L6.7 7.29c-.39-.39-1.02-.39-1.41 0l-1.42 1.42c-.39.39-.39 1.02 0 1.41l1.29 1.29c-.52.41-.95.92-1.3 1.53H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2.28c.35.6.79 1.12 1.3 1.53l-1.29 1.29c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39 1.02.39 1.41 0l1.29-1.29c.41.52.92.95 1.53 1.3V20c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2.28c.6-.35 1.12-.79 1.53-1.3l1.29 1.29c.39.39 1.02.39 1.41 0l1.42-1.42c.39-.39-.39-1.02 0-1.41l-1.29-1.29c.52-.41.95-.92 1.3-1.53H22c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2.28c-.35-.6-.79-1.12-1.3-1.53l1.29-1.29c.39-.39.39-1.02 0-1.41l-1.42-1.42c-.39-.39-1.02-.39-1.41 0l-1.29 1.29c-.41-.52-.92-.95-1.53-1.3V5c0-1.1-.9-2-2-2h-2zm-1 5h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>
);
const SeabornIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2V9h-2v9zm4 0h2V5h-2v13zm4 0h2V12h-2v6zm4 0h2V2h-2v16zM2 20h20v2H2v-2z"/></svg>
);

const TailwindCssIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="#38b2ac" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
);


 

const ApiIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5V14h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
);

const skillsData = [
    { name: 'HTML5', icon: <Html5Icon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Java', icon: <JavaIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'JavaScript', icon: <JsIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
    
  
    { name: 'Git', icon: <GitIcon /> },
    { name: 'GitHub', icon: <GitHubIcon /> },
    { name: 'Pandas', icon: <PandasIcon /> },
    { name: 'Machine Learning', icon: <MachineLearningIcon /> },
    { name: 'API', icon: <ApiIcon /> },
    { name: 'Seaborn', icon: <SeabornIcon /> },
    
    
];


const Skills = () => {
  // Duplicate skills for a seamless loop
  const extendedSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {extendedSkills.map((skill, index) => (
            <div
              key={index}
              // --- GLOW EFFECT ADDED HERE ---
              className="flex-shrink-0 w-40 h-40 mx-4 flex flex-col items-center justify-center bg-[#111111] rounded-lg border border-gray-800 transition-all duration-300 ease-in-out hover:border-[#00FFD1]/60 hover:shadow-[0_0_15px_rgba(0,255,209,0.4)]"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
