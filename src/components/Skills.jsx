import React from "react";
import { Code, Server, Database } from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSocketdotio,
  SiStripe,
  SiJsonwebtokens,
  SiMongoose,
  SiGit,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-purple-500",
      description: "React, JavaScript, HTML5, CSS3, Tailwind CSS, Vite",
    },
    {
      name: "Backend Development",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      description: "Node.js, Express.js, RESTful APIs, Authentication",
    },
    {
      name: "Database Management",
      icon: Database,
      color: "from-pink-500 to-red-500",
      description: "MongoDB, Mongoose, Database Design, Optimization, SQL",
    },
  ];

  const techIcons = [
    { icon: SiMongodb, color: "#47A248" },
    { icon: SiExpress, color: "#000000" },
    { icon: SiReact, color: "#61DAFB" },
    { icon: SiNodedotjs, color: "#339933" },
    { icon: SiJavascript, color: "#F7DF1E" },
    { icon: SiTypescript, color: "#3178C6" },
    { icon: SiTailwindcss, color: "#38BDF8" },
    { icon: SiSocketdotio, color: "#010101" },
    { icon: SiStripe, color: "#635BFF" },
    { icon: SiJsonwebtokens, color: "#000000" },
    { icon: SiMongoose, color: "#800000" },
    { icon: SiGit, color: "#F05032" },
    { icon: SiPostman, color: "#FF6C37" },
    { icon: SiFirebase, color: "#FFCA28" },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <skill.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-3">
                  {skill.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-200 mb-8">
            MERN Stack & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techIcons.map(({ icon: Icon, color }, index) => (
              <span
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl border border-blue-500/20 p-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Icon size={32} color={color} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
