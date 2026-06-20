import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, Code, Play, Layout, Server, ExternalLink, Mail, Phone, MapPin, GraduationCap, ChevronDown, Shield, ArrowRight } from 'lucide-react';

const GithubSVG = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <span className="font-mono border-r-2 border-neon-orange animate-pulse pr-1">
      {displayText}
    </span>
  );
};

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript"], color: "text-rust-500", border: "border-rust-500", glow: "hover:shadow-[0_0_15px_rgba(183,65,14,0.3)]", icon: <Code size={20} /> },
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "React Query", "React Router DOM"], color: "text-neon-blue", border: "border-neon-blue", glow: "hover:shadow-blue-glow", icon: <Layout size={20} /> },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "bcryptjs", "Nodemailer"], color: "text-neon-emerald", border: "border-neon-emerald", glow: "hover:shadow-emerald-glow", icon: <Server size={20} /> },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Prisma ORM"], color: "text-neon-orange", border: "border-neon-orange", glow: "hover:shadow-neon-glow", icon: <Database size={20} /> },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "Netlify", "Vercel", "Streamlit"], color: "text-gray-300", border: "border-gray-500", glow: "hover:shadow-[0_0_15px_rgba(156,163,175,0.3)]", icon: <Terminal size={20} /> },
  ];
  
  const projects = [
    {
      title: "Velora - Premium Car Rental",
      tech: ["MERN Stack", "Tailwind CSS", "Vercel"],
      desc: "Developed a full-stack premium car rental application with real-time availability checking, booking management, and a dedicated owner dashboard. Implemented complex backend logic for dynamic pricing, MongoDB aggregation pipelines, and deployed the backend on Vercel using a zero-config serverless architecture.",
      color: "neon-orange",
      icon: <Database size={24} />,
      githubUrl: "https://github.com/rupesh6314/velora",
      liveUrl: "https://car-rental-fronotend.vercel.app/"
    },
    {
      title: "College Discovery Platform",
      tech: ["PERN Stack", "React Query", "JWT Auth"],
      desc: "Deployed a scalable web app enabling students to search, compare, review, and discuss colleges. Implemented JWT authentication, advanced filtering, server-side pagination, and community-driven QA using React Query.",
      color: "neon-blue",
      icon: <GraduationCap size={24} />,
      githubUrl: "https://github.com/rupesh6314",
      liveUrl: "https://college-discovery-frontend.netlify.app/"
    },
    {
      title: "Hybrid LLM-RL Architecture",
      tech: ["Python", "Reinforcement Learning (PPO)", "LLMs"],
      desc: "Developed a hybrid AI system combining PPO-based Reinforcement Learning with an LLM explanation engine. Designed an RPG combat environment where NPCs make tactical decisions with 4 distinct AI personalities, achieving 75%+ win rates.",
      color: "neon-emerald",
      icon: <Cpu size={24} />,
      githubUrl: "https://github.com/rupesh6314",
      liveUrl: "#"
    },
    {
      title: "Global Movie Explorer",
      tech: ["Vanilla JavaScript", "HTML/CSS", "TMDB API"],
      desc: "Built a dynamic movie discovery platform with real-time metadata and trailer retrieval. Optimized DOM rendering and added automated update mechanisms for new releases.",
      color: "rust-500",
      icon: <Play size={24} />,
      githubUrl: "https://github.com/rupesh6314",
      liveUrl: "https://global-movie-explorer.vercel.app/"
    },
    {
      title: "Horror Story Generator",
      tech: ["Python", "Gemini 1.5 Flash AI", "Streamlit"],
      desc: "Built and deployed an AI-powered application that generates personalized horror stories based on user input, optimizing prompt design for coherent and engaging narratives.",
      color: "purple-500",
      icon: <Terminal size={24} />,
      githubUrl: "https://github.com/rupesh6314",
      liveUrl: "https://horrorstorygenerator.streamlit.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-industrial-900 text-gray-200 font-sans selection:bg-neon-orange selection:text-white overflow-hidden relative">
      
      {/* Dynamic Background Noise & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay bg-rustic-texture"></div>
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-grid-pattern bg-grid-size"></div>
      
      {/* Interactive Glowing Cursor Trail */}
      <motion.div 
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          background: 'radial-gradient(circle, rgba(183,65,14,0.15) 0%, rgba(26,26,26,0) 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        {/* Navigation / Header */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-32 border-b border-industrial-700 pb-6"
        >
          <div className="font-mono text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-rust-500">&lt;</span>
            <span className="text-gray-100">RUPESH</span>
            <span className="text-neon-orange">/&gt;</span>
          </div>
          <div className="flex gap-6 font-mono text-sm text-gray-400">
            <a href="#about" className="hover:text-neon-blue transition-colors">01. ABOUT</a>
            <a href="#skills" className="hover:text-neon-emerald transition-colors">02. SKILLS</a>
            <a href="#projects" className="hover:text-neon-orange transition-colors">03. WORK</a>
            <a href="#contact" className="hover:text-rust-500 transition-colors">04. CONTACT</a>
          </div>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center relative mb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-neon-orange"></div>
              <span className="font-mono text-neon-orange uppercase tracking-widest text-sm">System Online // Identity Verified</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black font-mono tracking-tighter leading-none mb-6 text-gray-100">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-500 via-neon-orange to-rust-400">
                SCALABLE
              </span><br />
              ARCHITECTURES.
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="text-xl md:text-3xl text-gray-400 font-mono mb-8 h-12">
              <TypewriterText text="> Full Stack Developer & AI Enthusiast_" />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-12 border-l-4 border-industrial-700 pl-6">
              Engineering the intersection of robust backend systems, modern frontend interfaces, and intelligent AI architectures. Currently building the future at VIT-AP University.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-6 items-center">
              <a href="#projects" className="group relative px-8 py-4 bg-industrial-800 border border-rust-500 text-rust-500 font-mono font-bold uppercase tracking-wider overflow-hidden hover:text-white transition-colors">
                <div className="absolute inset-0 bg-rust-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 flex items-center gap-2">Initiate Sequence <ArrowRight size={18} /></span>
              </a>
              <a href="https://github.com/rupesh6314" target="_blank" rel="noopener noreferrer" className="p-4 border border-industrial-700 text-gray-400 hover:text-neon-blue hover:border-neon-blue hover:shadow-blue-glow transition-all rounded-sm">
                <GithubSVG size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-industrial-600"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <motion.section 
          id="about" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40 pt-20"
        >
          <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-gray-100">01. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">About Me</span></h2>
            <div className="h-[1px] flex-grow bg-industrial-700"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <strong className="text-rust-500">Madhuvarsu Rupesh Chandra Bharadwaj</strong>, a passionate software engineer focused on building robust full-stack applications.
              </p>
              <p>
                My journey involves deep-diving into the <span className="text-neon-blue border-b border-neon-blue/30 pb-0.5">PERN/MERN stacks</span> to deliver highly scalable web applications. I don't just build websites; I engineer solutions that handle real-world complexity, from dynamic pricing algorithms to complex database aggregation pipelines.
              </p>
              <p>
                Recently, I've been pioneering <span className="text-neon-emerald border-b border-neon-emerald/30 pb-0.5">AI integration</span>, creating hybrid RL-LLM architectures for game AI and personalized generative storytelling apps.
              </p>
            </motion.div>
            
            {/* Terminal Style About Box */}
            <motion.div 
              variants={fadeInUp}
              className="bg-industrial-800 border border-industrial-700 p-6 rounded-sm shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rust-500 to-neon-orange opacity-50"></div>
              <div className="flex gap-2 mb-6 border-b border-industrial-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="font-mono text-sm space-y-4">
                <div className="flex"><span className="text-rust-500 mr-4">root@rupesh:~$</span> <span className="text-gray-300">cat education.txt</span></div>
                <div className="text-neon-blue pl-4 border-l-2 border-industrial-700 ml-2">
                  B.Tech CSE @ VIT-AP University<br/>
                  2023 - Present | CGPA: 8.3
                </div>
                
                <div className="flex"><span className="text-rust-500 mr-4">root@rupesh:~$</span> <span className="text-gray-300">ping location</span></div>
                <div className="text-neon-emerald pl-4 flex items-center gap-2">
                  <MapPin size={14} /> PONG: Markapur, India
                </div>

                <div className="flex"><span className="text-rust-500 mr-4">root@rupesh:~$</span> <span className="text-gray-300 animate-pulse">_</span></div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SKILLS SECTION (Bento Box) */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40 pt-20"
        >
          <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-16">
            <div className="h-[1px] flex-grow bg-industrial-700"></div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-gray-100">02. <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-100 to-gray-500">Tech Arsenal</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category}
                variants={fadeInUp}
                className={`group bg-industrial-800/50 border border-industrial-700 p-8 relative overflow-hidden transition-all duration-300 ${skillGroup.glow} hover:border-${skillGroup.color.split('-')[1]}-${skillGroup.color.split('-')[2] || '500'} ${index === 0 ? 'md:col-span-2' : ''} ${index === 3 ? 'md:col-span-2' : ''}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${skillGroup.color.split('-')[1]}-${skillGroup.color.split('-')[2] || '500'}/5 rounded-full blur-3xl group-hover:bg-${skillGroup.color.split('-')[1]}-${skillGroup.color.split('-')[2] || '500'}/20 transition-all duration-500`}></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-industrial-900 border border-industrial-700 ${skillGroup.color}`}>
                    {skillGroup.icon}
                  </div>
                  <h3 className={`text-xl font-mono font-bold uppercase tracking-wider ${skillGroup.color}`}>
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-4 py-2 bg-industrial-900 border border-industrial-700 text-gray-300 text-sm font-mono hover:border-gray-500 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40 pt-20"
        >
          <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-gray-100">03. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Deployments</span></h2>
            <div className="h-[1px] flex-grow bg-industrial-700"></div>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                variants={fadeInUp}
                className="group relative flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Project Decorative Number */}
                <div className="absolute -left-4 -top-8 text-8xl font-black font-mono text-industrial-800 opacity-50 pointer-events-none z-0">
                  0{index + 1}
                </div>

                <div className={`flex-1 w-full bg-industrial-800 border border-industrial-700 p-8 relative z-10 transition-all duration-500 hover:-translate-y-2 ${project.color.includes('neon') || project.color.includes('purple') ? `hover:shadow-[0_0_20px_rgba(var(--${project.color}),0.3)]` : ''} ${project.title === 'Velora - Premium Car Rental' ? 'hover:shadow-neon-glow hover:border-neon-orange' : ''} ${project.title.includes('College') ? 'hover:shadow-blue-glow hover:border-neon-blue' : ''} ${project.title.includes('Hybrid') ? 'hover:shadow-emerald-glow hover:border-neon-emerald' : ''} ${project.title.includes('Telugu') ? 'hover:border-rust-500' : ''} ${project.title.includes('Horror') ? 'hover:border-purple-500' : ''}`}>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold font-mono text-gray-100 mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                      <p className="text-rust-500 font-mono text-sm tracking-widest uppercase">{project.subtitle || "Application"}</p>
                    </div>
                    <div className="p-3 bg-industrial-900 border border-industrial-700">
                      {project.icon}
                    </div>
                  </div>

                  <div className="bg-industrial-900 border border-industrial-700 p-6 mb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                    {project.desc}
                  </div>

                  <ul className="flex flex-wrap gap-4 font-mono text-xs text-gray-500 uppercase tracking-wider mb-8">
                    {project.tech.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                      <GithubSVG size={18} /> Source
                    </a>
                    {project.liveUrl !== "#" ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-industrial-600 cursor-not-allowed" title="Live demo not available yet">
                        <ExternalLink size={18} /> Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 pt-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-mono text-rust-500 tracking-widest uppercase mb-4">04. Next Steps</h2>
            <h3 className="text-5xl md:text-6xl font-black font-mono text-gray-100 mb-8">ESTABLISH <br/>CONNECTION.</h3>
            <p className="text-gray-400 text-lg mb-12">
              Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'm currently seeking new opportunities and challenges.
            </p>
            
            <a 
              href="mailto:rupesh.2k5chandra@gmail.com?subject=Hello%20Rupesh%20-%20Contact%20from%20Portfolio" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-neon-orange text-neon-orange font-mono font-bold uppercase tracking-wider hover:bg-neon-orange hover:text-industrial-900 hover:shadow-neon-glow transition-all duration-300"
            >
              <Mail size={20} /> Transmit Message
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-8 text-gray-500 font-mono text-sm">
            <a href="tel:+918500617107" className="flex items-center gap-2 hover:text-rust-500 transition-colors">
              <Phone size={16} /> +91 8500617107
            </a>
            <a href="https://github.com/rupesh6314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neon-blue transition-colors">
              <GithubSVG size={16} /> github.com/rupesh6314
            </a>
          </motion.div>
        </motion.section>

        {/* FOOTER */}
        <footer className="border-t border-industrial-700 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm text-gray-500">
            &copy; 2025 Madhuvarsu Rupesh Chandra Bharadwaj
          </div>
          <div className="font-mono text-xs text-gray-600 flex items-center gap-2">
            <Shield size={14} /> Built with React, Tailwind & Framer Motion
          </div>
        </footer>

      </div>
    </div>
  );
}
