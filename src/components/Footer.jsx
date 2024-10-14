import React from "react";
import { Link } from "react-router-dom";
import { Github, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full opacity-10 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and tagline */}
          <div className="space-y-6">
            <img src="./images/logo.png" alt="logo" className="h-32 w-32 object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 transform hover:scale-105" />
            <p className="text-xl font-light leading-relaxed text-violet-200">
              Experience the harmony of tomorrow, today, with AI-composed tunes.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-violet-300">Quick Links</h3>
            <nav className="space-y-4">
              {["About", "Contact", "Log In", "Sign Up"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="group flex items-center text-lg font-medium text-violet-100 hover:text-white transition-colors duration-300"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight size={16} />
                  </span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Connect - GitHub with specific link */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-violet-300">Connect</h3>
            <a 
              href="https://github.com/AryanNanda17/NonStop-Lofi-Vibe-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <Github size={24} />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">GitHub</span>
              <span className="relative invisible">GitHub</span>
            </a>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-violet-300">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-violet-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-violet-500 text-white font-bold rounded-md hover:bg-white hover:text-violet-900 transition-all duration-300 transform hover:translate-y-
-1 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-violet-700 text-center text-violet-300">
          © 2024 LofiVibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;