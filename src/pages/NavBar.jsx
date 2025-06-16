import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Users, Target, Briefcase, FileText, TrendingUp, MessageSquare, 
  ArrowRight, Star, CheckCircle, Zap, Shield, Award, Sparkles, 
  BarChart3, Brain, Rocket, Globe, Diamond, Menu, X, Play
} from 'lucide-react';
import {Link} from 'react-router-dom'
const NavBar=(()=>
{
    
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [scrollY, setScrollY] = useState(0);
        useEffect(() => {
          const handleScroll = () => setScrollY(window.scrollY);
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
          const services = [
            {
              icon: <FileText className="w-6 h-6" />,
              title: "AI Resume Builder",
              description: "Create ATS-optimized resumes with advanced AI algorithms that adapt to industry standards",
              gradient: "from-blue-500 via-purple-500 to-pink-500"
            },
            {
              icon: <MessageSquare className="w-6 h-6" />,
              title: "Smart Cover Letters",
              description: "Generate personalized cover letters that resonate with hiring managers",
              gradient: "from-green-400 via-blue-500 to-purple-600"
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Industry Analytics",
              description: "Deep insights into job market trends and emerging opportunities",
              gradient: "from-orange-400 via-red-500 to-pink-500"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Interview Mastery",
              description: "AI-powered mock interviews with personalized feedback and coaching",
              gradient: "from-cyan-400 via-blue-500 to-indigo-600"
            }
          ];
      
    return (
        <>
              {/* Navigation */}
      <nav className={` fixed w-full z-50 transition-all duration-700  ${
        scrollY > 20 ? 'bg-black/80 backdrop-blur-2xl border-b border-white/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Diamond className="w-6 h-6 text-white animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Genova
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group"
                >
                  Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-4 w-80 bg-black/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 py-2 animate-in slide-in-from-top-5 duration-300">
                    {services.map((service, index) => (
                      <a key={index} href={`#services`} 
                         className="flex items-center px-6 py-4 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} mr-4 group-hover:scale-110 transition-all duration-300`}>
                          {service.icon}
                        </div>
                        <div>
                          <div className="font-semibold">{service.title}</div>
                          <div className="text-sm text-gray-400 line-clamp-1">{service.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <button 
               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              <Link to ='/auth'> Get Started</Link>
              </button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/20 animate-in slide-in-from-top-5 duration-300">
            <div className="px-6 py-8 space-y-6">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-white transition-colors font-medium">
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
              <Link to = '/auth' >  Get Started</Link> Get
              </button>
            </div>
          </div>
        )}
      </nav>
        </>
    )
})
export default NavBar;