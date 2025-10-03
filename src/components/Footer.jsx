import React from "react";
import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-gray-300 py-8 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee size={16} className="text-gray-400" />
            <span className="text-gray-400">Made By</span>

            <span className="text-gray-400">Tayyab Ali</span>
          </div>
          <p className="text-gray-500">
            © 2025 Tayyab Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
