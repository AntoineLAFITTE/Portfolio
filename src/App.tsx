"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Database, Globe, Menu, X } from "lucide-react"
import profileImage from "./assets/1610396085652.jpg";
import skateFallRetryImage from "./assets/skatefallretry2.jpg";
import RentCarImage from "./assets/rentcar4.jpg";
import UltimateChecklistImage from "./assets/ultimatechecklist.png";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = [
    "Html",
    "CSS",
    "Tailwind CSS",
    "React",
    "Vite",
    "TypeScript",
    "JavaScript",
    "C",
    "Python",
    "Ruby",
    "PostgreSQL",
    "Git",
  ]

  const projects = [
    {
      title: "Skate Fall Retry",
      description:
        "A collaborative Platform to learn SkateBoarding where users can interact through Posts and Comments. For Deployement i used Railway for Backend hosting, Vercel for Frontend and Neon PostgreSQL for the DB.",
      image: skateFallRetryImage,
      tech: ["React", "Vite", "Python", "Flask", "TypeScript", "PostgreSQL"],
      github: "https://github.com/AntoineLAFITTE/SkateFallRetry/tree/main",
      live: "https://skate-fall-retry.vercel.app/",
    },
    {
      title: "RENTCAR",
      description:
        "Design of an interactive model containing different pages for a Car renting Platform. From user landing page to reservation and payment confirmation.",
      image: RentCarImage,
      tech: ["Figma"],
      github: "#",
      live: "https://www.figma.com/proto/iOgJDofgNcg3rSeT3Y2zMu/RENTCAR?node-id=4-198&starting-point-node-id=4%3A198&t=9LocDZy5npOeQy5b-1",
    },
    {
      title: "Ultimate CheckList",
      description:
        "Work in  progress - A feature-rich checklist application with user authentication, advanced UI/UX design, task filtering, and persistent storage. Built with Next.js, Tailwind CSS, and Zustand.",
      image: UltimateChecklistImage,
      tech: ["Next.js", "Express.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "PostgreSQL"],
      github: "#",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Foundations of Computer Science",
      company: "Holberton School",
      period: "2024 - 2025",
      description:
        "Solid foundation in software development: C language, databases, and full-stack web application Designed Built and Maintained web applications with modern JavaScript and Python frameworks.",
    },
    {
      title: "Cetification titre RNCP 6 : Concepteur - développeur d'applications web",
      company: "Le Wagon France",
      period: "2023 - 2024",
      description:
        "Définir et concevoir un projet d'application web , piloter et développer un projet , Déployer et analyser l'utilisation d'une application web.",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Studies
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-200 object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Hi, I'm <span className="text-blue-600">Antoine Lafitte</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Full Stack Developer & UI/UX Enthusiast</p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. With 2+ years of experience in web
            development, I bring ideas to life through code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </button>


            <a
              href="/antoine-lafitte-cv.pdf"
              download="Antoine_Lafitte_CV.pdf"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/AntoineLAFITTE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/antoine-lafitte-400620203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user
                experiences. My journey in tech started 2 years ago, and I've been constantly learning and evolving ever
                since.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, Playing around with Generative AI 's
                or you might see me at your local SkatePark or Tennis courts.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Database Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Web Performance</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-gray-300 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.github !== "#" && project.github !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noonpener noreferrer"
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    )}

                   {project.live !== "#" && project.live !== "" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noonpener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.tech.includes("Figma") ? "View Design" : "Live Demo"}
                    </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Studies</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-lg font-medium text-blue-600">{exp.company}</p>
                  </div>
                  <span className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Let's work together</h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>

            <form
              action="https://formspree.io/f/xdkdeaew"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">© 2025 Antoine Lafitte. Built with Vite + React and Taiwlind CSS.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/AntoineLAFITTE"
              target="_blank"
              rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/antoine-lafitte-400620203/"
              target="_blank"
              rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
