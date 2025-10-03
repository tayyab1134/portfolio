import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  Database,
  Server,
  Monitor,
  Users,
} from "lucide-react";
import { FaReact, FaNodeJs, FaStripe, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiAxios,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiCloudinary,
  SiPostman,
} from "react-icons/si";
const techIcons = {
  "React.js": <FaReact className="text-cyan-400" size={22} />,
  "Redux Toolkit": <SiRedux className="text-purple-500" size={22} />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" size={22} />,
  Axios: <SiAxios className="text-blue-500" size={22} />,
  "Node.js": <FaNodeJs className="text-green-500" size={22} />,
  "Express.js": <SiExpress className="text-gray-300" size={22} />,
  "JWT Authentication": (
    <SiJsonwebtokens className="text-yellow-500" size={22} />
  ),
  
  MongoDB: <SiMongodb className="text-green-600" size={22} />,
  "Mongoose ODM": <SiMongoose className="text-red-500" size={22} />,
  "Stripe API": <FaStripe className="text-indigo-500" size={22} />,
  Cloudinary: <SiCloudinary className="text-blue-400" size={22} />,
  Postman: <SiPostman className="text-orange-500" size={22} />,
  Git: <FaGitAlt className="text-red-600" size={22} />,
};

import Footer from "../components/Footer";
import image1 from "../components/casestudyimages/image1.png";
import image2 from "../components/casestudyimages/image2.png";

const CaseStudy = () => {
  const { projectId } = useParams();

  const projects = {
    "ecommerce-platform": {
      title: "Full-Stack E-Commerce Platform",
      subtitle: "Complete MERN Stack Solution",
      overview:
        "This is a complete MERN Stack project built using the latest and modern web technologies. It incorporates MongoDB, Express.js, React, and Node.js to create a full-stack application. On the frontend, it utilizes Redux Toolkit for efficient state management, enabling streamlined and scalable data flow across the app. Real-time functionality is powered by Socket.IO, allowing features like instant messaging, notifications, or live updates. For email communication, the project integrates Nodemailer, enabling automated and secure email sending such as account verification or notifications. Overall, this project is structured to support scalable, real-time, and interactive web applications with a clean and maintainable architecture.",
      problemStatement: {
        title: "Problem Statement",
        description:
          "Small businesses needed an affordable, scalable e-commerce solution that could handle product management, user authentication, payments, and order tracking without the complexity and cost of enterprise solutions.",
        challenges: [
          "Secure user authentication and authorization",
          "Real-time inventory management",
          "Payment processing integration",
          "Responsive design for all devices",
          "Scalable architecture for growth",
        ],
      },
      solution: {
        title: "Solution & Features",
        features: [
          "User registration and authentication with JWT",
          "Product catalog with search and filtering",
          "Shopping cart and wishlist functionality",
          "Secure payment processing with Stripe",
          "Order tracking and history",
          "Admin dashboard for product and user management",
          "Responsive design for mobile and desktop",
        ],
      },
      techStack: {
        frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Axios"],
        backend: ["Node.js", "Express.js", "JWT Authentication", "Bcrypt"],
        database: ["MongoDB", "Mongoose ODM"],
        tools: ["Stripe API", "Cloudinary", "Postman", "Git"],
      },
      architecture: {
        title: "System Architecture",
        description:
          "The application follows a three-tier architecture with clear separation of concerns.",
        layers: [
          {
            name: "Presentation Layer (Frontend)",
            tech: "React.js with Redux",
            description:
              "Handles user interface, state management, and user interactions",
          },
          {
            name: "Business Logic Layer (Backend)",
            tech: "Node.js with Express.js",
            description:
              "Manages API endpoints, authentication, and business rules",
          },
          {
            name: "Data Layer (Database)",
            tech: "MongoDB with Mongoose",
            description:
              "Stores user data, products, orders, and application state",
          },
        ],
      },
      database: {
        title: "Database Design",
        description:
          "MongoDB collections designed for optimal performance and scalability.",
        collections: [
          {
            name: "Users",
            fields: ["_id", "name", "email", "password", "role", "createdAt"],
            relationships: "One-to-Many with Orders",
          },
          {
            name: "Products",
            fields: [
              "_id",
              "name",
              "description",
              "price",
              "category",
              "stock",
              "images",
            ],
            relationships: "Many-to-Many with Orders",
          },
          {
            name: "Orders",
            fields: [
              "_id",
              "userId",
              "products",
              "totalAmount",
              "status",
              "createdAt",
            ],
            relationships: "Belongs to User, Contains Products",
          },
          {
            name: "Categories",
            fields: ["_id", "name", "description", "image"],
            relationships: "One-to-Many with Products",
          },
        ],
      },
      results: {
        title: "Results & Impact",
        metrics: [
          "99.9% uptime with optimized performance",
          "40% faster page load times",
          "Secure payment processing with 0% fraud",
          "Mobile-responsive design with 95% user satisfaction",
        ],
      },
      links: {
        demo: "https://multi-vendor-frontend-indol.vercel.app",
        github: "https://github.com/tayyab1134/MultiVendor-Ecommerce",
      },
    },
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-white hover:text-purple-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-purple-300 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-xl text-blue-300">{project.subtitle}</p>
          </div>
        </div>

        {/* Video Section */}
       {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Play size={24} className="text-purple-200" />
                <h2 className="text-2xl font-bold text-blue-100">
                  Project Demo
                </h2>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-blue-800/50">
                <iframe
                  width="100%"
                  height="100%"
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* Project Overview */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-3xl font-bold text-blue-100 mb-6">
                Project Overview
              </h2>
              <p className="text-blue-300 text-lg leading-relaxed mb-8">
                {project.overview}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-3xl font-bold text-blue-100 mb-6">
                {project.problemStatement.title}
              </h2>
              <p className="text-blue-300 text-lg leading-relaxed mb-6">
                {project.problemStatement.description}
              </p>

              <h3 className="text-xl font-semibold text-purple-200 mb-4">
                Key Challenges:
              </h3>
              <ul className="space-y-3">
                {project.problemStatement.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Solution & Features */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-3xl font-bold text-blue-100 mb-6">
                {project.solution.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.solution.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-900/20 rounded-lg border border-purple-500/30"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-3xl font-bold text-blue-100 mb-8">
                Technology Stack
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Monitor size={24} className="text-purple-300" />
                    <h3 className="text-xl font-semibold text-blue-100">
                      Frontend
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.frontend.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-blue-900/30 text-blue-300 px-3 py-2 rounded-lg text-sm border border-purple-500/30"
                      >
                        {techIcons[tech]}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Server size={24} className="text-purple-300" />
                    <h3 className="text-xl font-semibold text-blue-100">
                      Backend
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.backend.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-blue-900/30 text-blue-300 px-3 py-2 rounded-lg text-sm border border-purple-500/30"
                      >
                        {techIcons[tech]}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Database size={24} className="text-purple-300" />
                    <h3 className="text-xl font-semibold text-blue-100">
                      Database
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.database.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-blue-900/30 text-blue-300 px-3 py-2 rounded-lg text-sm border border-purple-500/30"
                      >
                        {techIcons[tech]}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users size={24} className="text-purple-300" />
                    <h3 className="text-xl font-semibold text-blue-100">
                      Tools
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.tools.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-blue-900/30 text-blue-300 px-3 py-2 rounded-lg text-sm border border-purple-500/30"
                      >
                        {techIcons[tech]}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture, Database Design & Results follow the same purple/blue theme ... */}

        {/* Architecture */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-3xl font-bold text-purple-100 mb-6">
                {project.architecture.title}
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                {project.architecture.description}
              </p>

              {/* Architecture Diagram */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-100 mb-4">
                  System Architecture Diagram
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-400/10 rounded-lg blur-sm"></div>
                  <div className="relative bg-blue-900/30 rounded-lg border border-purple-500/20 p-4">
                    <img
                      src={image1}
                      alt="System Architecture Diagram"
                      className="w-full max-h-[28rem] object-contain rounded-lg shadow-lg"
                    />
                   {/* <p className="text-sm text-blue-300 mt-2 text-center">
                    Replace this with your actual system architecture diagram
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {project.architecture.layers.map((layer, index) => (
                  <div
                    key={index}
                    className="p-6 bg-purple-800/40 rounded-lg border border-blue-500/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-purple-100">
                        {layer.name}
                      </h3>
                    </div>
                    <p className="text-blue-300 font-medium mb-2">
                      {layer.tech}
                    </p>
                    <p className="text-blue-200">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Database Design */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-3xl font-bold text-purple-100 mb-6">
                {project.database.title}
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                {project.database.description}
              </p>

              {/* Database Schema Diagram */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-100 mb-4">
                  Database Schema Diagram
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-400/10 rounded-lg blur-sm"></div>
                  <div className="relative bg-blue-900/30 rounded-lg border border-purple-500/20 p-4">
                    <img
                      src={image2}
                      alt="Database Schema Diagram"
                      className="w-full max-h-[28rem] object-contain rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-blue-300 mt-2 text-center">
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {project.database.collections.map((collection, index) => (
                  <div
                    key={index}
                    className="p-6 bg-blue-800/40 rounded-lg border border-purple-500/20"
                  >
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">
                      {collection.name}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-purple-200 mb-2">
                        Fields:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {collection.fields.map((field, fieldIndex) => (
                          <span
                            key={fieldIndex}
                            className="bg-purple-500/20 text-blue-200 px-2 py-1 rounded text-xs border border-purple-400/30"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-purple-200 mb-2">
                        Relationships:
                      </h4>
                      <p className="text-blue-300 text-sm">
                        {collection.relationships}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-purple-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-3xl font-bold text-purple-100 mb-8">
                {project.results.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.results.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-blue-800/30 rounded-lg border border-purple-500/20"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-200">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
