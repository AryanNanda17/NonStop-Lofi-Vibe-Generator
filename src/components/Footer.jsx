import React from "react";
import { Github, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start">
          {/* Logo and tagline - hidden on mobile */}
          <div className="hidden md:flex flex-col items-start space-y-6">
            <img src="./images/logo.png" alt="LofiVibe Logo" className="h-40 w-40 object-contain transform hover:scale-105 transition-transform duration-300" />
            <p className="text-purple-300 text-lg font-light leading-relaxed text-left max-w-xs">
              Experience the harmony of tomorrow, today, with AI-composed tunes.
            </p>
          </div>
          
          {/* Connect */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-purple-400 text-lg md:text-2xl font-bold relative">
              Connect
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 md:h-1 bg-purple-500 rounded-full"></span>
            </h3>
            <a
              href="https://github.com/AryanNanda17/NonStop-Lofi-Vibe-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-4 py-2 bg-purple-500 bg-opacity-10 backdrop-blur-sm rounded-full text-sm md:text-base text-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Github size={18} className="mr-2 group-hover:animate-bounce" />
              <span className="relative">
                GitHub
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-purple-400 text-lg md:text-2xl font-bold relative text-center md:text-left">
              Quick Links
              <span className="absolute -bottom-1 left-1/2 md:left-0 w-1/2 h-0.5 md:h-1 bg-purple-500 rounded-full transform -translate-x-1/2 md:translate-x-0"></span>
            </h3>
            <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
              {["About", "Contact", "Log In", "Sign Up"].map((item) => (
                <li key={item} className="text-center md:text-left">
                  <a href={`/${item.toLowerCase().replace(' ', '')}`} className="group text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center">
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1" />
                    <span className="relative">
                      {item}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 md:mt-16 pt-4 md:pt-8 border-t border-purple-800 text-center text-purple-400">
          <p className="text-xs">© 2024 LofiVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;