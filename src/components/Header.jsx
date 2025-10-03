import React, { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-colors duration-300 bg-gray-400 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-200">
                <Terminal size={16} className="text-gray-800" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Tayyab</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize px-4 py-2 rounded-lg text-sm font-medium text-gray-800"
                >
                  {section}
                </button>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full z-50 md:hidden bg-white border-gray-200">
          <div className="p-6 space-y-4">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className="capitalize block w-full text-left px-4 py-2 rounded-md text-base font-medium text-gray-800"
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;