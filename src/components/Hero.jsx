import React from "react";
import { Globe, ExternalLink, ChevronDown, Zap, Download } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-20 lg:hidden"></div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                  <Zap size={16} className="text-blue-400" />
                  <span className="text-blue-400 font-medium">
                    MERN Stack Developer
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-20 lg:hidden"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
                <span className="block text-gray-200 mb-2">Hey, I'm</span>
                <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Tayyab Ali
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Building scalable full-stack web applications using modern
              technologies. Driven by a passion for delivering smooth user
              experiences on the front end and reliable, efficient solutions on
              the back end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Globe size={20} />
                  <span>View My Work</span>
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>

              <a
                download="Tayyab_Ali_Resume.pdf"
                className="group border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-medium transform hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download size={20} className="group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                alt="Tayyab Ali"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl ring-4 ring-blue-400/50 transition-transform duration-500 hover:scale-105 hover:ring-blue-400/70"
              />

              {/* Floating Elements */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12 lg:mt-8">
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-blue-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
