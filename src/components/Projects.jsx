import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Dot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Full‑Stack E‑Commerce Platform",
      description:
        "A full‑stack MERN app with real‑time Socket.IO, Redux Toolkit state, and Nodemailer emails — built for scalable modern commerce.",
      image: "https://cmsmart.net/images/community/7961/banner.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "Socket.io",
        "Redux Toolkit",
        "Nodemailer",
        "Mongoose",
        "Tailwind CSS",
      ],
      demo: "https://multi-vendor-frontend-indol.vercel.app/",
      github: "https://github.com/tayyab1134/MultiVendor-Ecommerce",
      featured: true,
    },
    {
      title: "Indore Plants",
      description:
        "Discover and grow with our plant website – your guide to care tips, gardening inspiration, and a greener lifestyle. Explore a wide range of indoor and outdoor plants, learn how to keep them healthy, and find creative ideas to make your space more vibrant. Whether you're a beginner or a plant enthusiast, we provide everything you need to nurture nature’s beauty at home and beyond.",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-houseplant-collection_23-2148910610.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      demo: "https://plantwebsitetayyab.netlify.app/",
      github: "https://github.com/tayyab1134/plant-website-using-Tailwindcss",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-slide-up">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-200 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {idx === 0 && (
                    <Link
                      to="/case-study/ecommerce-platform"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={16} />
                      Case Study
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
