import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Cpu, Code, Github, Mail, MapPin, ChevronDown, Wifi, Lock, Bug, Database } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projects = [
    {
      title: "M5Stick C Plus 2",
      subtitle: "Bruce Firmware Pentest Device",
      description: "Developed a portable penetration testing device using M5Stick C Plus 2 paired with Bruce firmware. Capable of WiFi attacks, BLE scanning, and network reconnaissance in a compact form factor.",
      tech: ["WiFi Testing", "BLE", "Network Analysis", "ESP32"],
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "LilyGO T-Watch S3",
      subtitle: "Wearable Security Testing Platform",
      description: "Programmed smartwatch with Bruce firmware for discrete security testing. Performs WiFi vulnerability assessments, deauth attacks, and wireless network analysis from a wearable device.",
      tech: ["Wearable Tech", "WiFi Security", "Bruce Firmware", "ESP32"],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "ESP32 Security Research Tool",
      subtitle: "IoT Wireless Testing Device",
      description: "Designed and built IoT device for ethical wireless security testing. Conducted WiFi vulnerability assessments and network security research following responsible disclosure practices.",
      tech: ["IoT Security", "WiFi Analysis", "Ethical Hacking", "ESP32"],
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Offline AI Assistant",
      subtitle: "Python & LM Studio Integration",
      description: "Built a fully offline AI assistant using Python and LM Studio. Implemented local language model processing for privacy-focused AI interactions without internet dependency.",
      tech: ["Python", "LM Studio", "AI/ML", "Privacy-First"],
      icon: <Database className="w-8 h-8" />
    }
  ];

  const skills = [
    { name: "Penetration Testing", icon: <Bug /> },
    { name: "Python", icon: <Code /> },
    { name: "Kali Linux", icon: <Terminal /> },
    { name: "Network Security", icon: <Wifi /> },
    { name: "IoT Security", icon: <Cpu /> },
    { name: "ESP32 Development", icon: <Shield /> }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8 inline-block">
            <Shield className="w-20 h-20 text-cyan-400 animate-pulse" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              SURKHAB
            </span>
            <br />
            <span className="text-white">SINGH</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-400 mb-4 font-light">
            Cybersecurity Researcher & Ethical Hacker
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            B.Tech CS Student | Penetration Testing | IoT Security | Hardware Hacking
          </p>

          <div className="flex gap-6 justify-center items-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg hover:scale-105 transition-transform cursor-pointer"
            >
              View Projects
            </button>
            <a 
              href="mailto:surkhabsingh601@gmail.com" 
              className="px-8 py-4 border-2 border-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer inline-block"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              ABOUT ME
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Passionate cybersecurity enthusiast with hands-on experience in penetration testing and IoT security. I specialize in building custom hardware security tools and exploring wireless vulnerabilities ethically.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Currently pursuing B.Tech in Computer Science at Punjab Technical University, I'm constantly experimenting with Kali Linux tools, GitHub security projects, and developing innovative hardware solutions for security research.
              </p>
              <div className="flex items-center gap-3 text-gray-400 mb-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Jagraon, Punjab, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 mb-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:surkhabsingh601@gmail.com" className="hover:text-cyan-400 transition-colors">
                  surkhabsingh601@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Github className="w-5 h-5 text-cyan-400" />
                <a href="https://github.com/SurkhabSingh77" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  github.com/SurkhabSingh77
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition-all hover:scale-105">
                  <div className="text-cyan-400 mb-3">{skill.icon}</div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              PROJECTS
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                
                <h3 className="text-3xl font-black mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-cyan-400 text-sm font-semibold mb-4">
                  {project.subtitle}
                </p>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-4 py-2 bg-black border border-gray-700 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              EXPERIENCE
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-black text-cyan-400">Intern - Sortiq Solutions</h3>
                <span className="text-gray-500 font-mono">07/2025 - 08/2025</span>
              </div>
              <p className="text-gray-400 mb-4">Mohali, Punjab, India</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Analyzed complex problems and collaborated with cross-functional teams to develop innovative solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Participated in technical workshops and project presentations to enhance knowledge and skills</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-purple-400 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-black text-purple-400">Python with AI Internship</h3>
                <span className="text-gray-500 font-mono">45 Days</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Mastered Python automation techniques and scripting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Learned fundamentals of AI concepts and machine learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Developed multiple mini-projects applying AI/ML principles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              LET'S COLLABORATE
            </span>
          </h2>
          
          <p className="text-2xl text-gray-400 mb-12">
            Interested in cybersecurity research, penetration testing, or IoT security projects?
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="mailto:surkhabsingh601@gmail.com" 
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-xl hover:scale-105 transition-transform inline-flex items-center gap-3 cursor-pointer"
            >
              <Mail className="w-6 h-6" />
              Get In Touch
            </a>
            <a 
              href="https://github.com/SurkhabSingh77" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-5 border-2 border-purple-400 rounded-full font-bold text-xl hover:bg-purple-400 hover:text-black transition-colors inline-flex items-center gap-3 cursor-pointer"
            >
              <Github className="w-6 h-6" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Surkhab Singh. Building the future of cybersecurity, one device at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}