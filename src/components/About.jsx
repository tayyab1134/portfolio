import React from "react";
import { User, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Dedicated developer with a strong focus on building high-quality
            digital experiences.
          </p>
        </div>

        {/* Main content grid */}
        <div className="flex flex-col items-center text-center space-y-12 animate-slide-up">
          {/* Text column */}
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-4xl font-bold text-gray-200">
              MERN Stack Developer & CS Undergraduate
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm currently in my 5th semester of a Bachelor's degree in
              Computer Science, where I've gained practical experience in key
              areas such as Object-Oriented Programming (OOP), Data Structures
              and Algorithms (DSA), Computer Networking, Database Management
              Systems (DBMS), and Operating Systems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Alongside my studies, I specialize in full-stack web development
              with the MERN stack, creating scalable and maintainable
              applications from frontend to backend. I’m dedicated to writing
              clean, efficient code and leveraging technology to solve
              real-world challenges.
            </p>
          </div>

          {/* Info boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-center">
            <div className="flex items-center justify-center gap-4 p-5 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-sm">
              <User size={28} className="text-blue-500" />
              <span className="text-gray-200 font-medium">
                MERN Stack Developer
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 p-5 bg-purple-500/10 rounded-xl border border-purple-500/20 shadow-sm">
              <BookOpen size={28} className="text-purple-500" />
              <span className="text-gray-200 font-medium">
                5th Semester CS Student
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
