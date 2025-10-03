import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudy from "./pages/CaseStudy";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const HomePage = () => (
    <div className="relative isolate overflow-hidden antialiased bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

        {/* Subtle colored gradients (no animation) */}
        <div
          className="absolute inset-0
      [background:
        radial-gradient(800px_520px_at_12%_14%,rgba(59,130,246,0.1),transparent_55%),
        radial-gradient(900px_560px_at_88%_18%,rgba(139,92,246,0.08),transparent_58%),
        radial-gradient(900px_640px_at_50%_96%,rgba(236,72,153,0.07),transparent_60%)
      ]
      [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0
      bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)]
      [background-size:40px_40px]
      opacity-10
      [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        {/* Optional noise texture */}
        <div className="absolute inset-0 opacity-[.03] mix-blend-overlay bg-[url('/noise.svg')]" />

        {/* Soft blobs (no animation) */}
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-800/30" />
        <div className="absolute -bottom-40 -right-28 h-[32rem] w-[32rem] rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-900/30" />
      </div>

      {/* Page Content */}
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <BrowserRouter>
      <div className="bg-slate-900 text-white overflow-x-hidden min-h-screen dark:bg-gray-900">
        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection} // Uncommented to enable navigation
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:projectId" element={<CaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
