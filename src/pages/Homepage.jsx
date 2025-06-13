import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { 
  ChevronDown, Users, Target, Briefcase, FileText, TrendingUp, MessageSquare, 
  ArrowRight, Star, CheckCircle, Zap, Shield, Award, Sparkles, 
  BarChart3, Brain, Rocket, Globe, Diamond, Menu, X, Play
} from 'lucide-react';
import {Link} from 'react-router-dom'

const Homepage = () => {
 const getPath= (index)=>
 {
  const path=['/resume','/cover','/insight','/mock']
  return path[index] || '/'
 };
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

  const features = [
    { icon: <Zap className="w-4 h-4" />, text: "AI-Powered", gradient: "from-yellow-400 to-orange-500" },
    { icon: <Shield className="w-4 h-4" />, text: "Secure & Private", gradient: "from-green-400 to-blue-500" },
    { icon: <Award className="w-4 h-4" />, text: "Expert Approved", gradient: "from-purple-400 to-pink-500" },
    { icon: <Rocket className="w-4 h-4" />, text: "Fast Results", gradient: "from-blue-400 to-cyan-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white antialiased overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-bounce" />
      </div>

    <NavBar/>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 animate-pulse">
                  <Sparkles className="w-5 h-5 text-blue-400 animate-spin" />
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI-Powered Career Platform
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-pulse">
                    Craft Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dream Career
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Transform your career journey with cutting-edge AI technology. From intelligent resume building 
                  to personalized interview coaching.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="group flex items-center bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                    <div className={`bg-gradient-to-r ${feature.gradient} p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 rounded-xl hover:scale-105 transition-all duration-300">
                  <div className="bg-black rounded-xl px-8 py-4 flex items-center justify-center">
                    <Play className="mr-3 w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Watch Demo
                    </span>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {services.map((service, index) => (
                 <Link to ={getPath(index)}>
                   <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/10 hover:border-white/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-white text-sm">{service.title}</h3>
                      <div className={`w-8 h-0.5 bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-300`}></div>
                    </div>
                  </div>
                 </Link>
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 animate-bounce">
                <Star className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse">
                <Zap className="w-6 h-6 text-white animate-spin" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8 animate-pulse">
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Supercharge Your Career
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI-powered tools designed to accelerate your professional growth and help you land your dream job
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
             <Link to ={getPath(index)}>
               <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                <button className="text-white font-semibold hover:text-blue-400 flex items-center group transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
             </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-gradient-to-r from-white/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8 animate-pulse">
                <Target className="w-5 h-5 text-orange-400 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  About CareerCraft
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent">
                  Revolutionizing Career Development
                </span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="hover:text-white transition-colors duration-300">
                  CareerCraft harnesses the power of artificial intelligence to transform how professionals 
                  approach their career development. We're not just another job platform – we're your 
                  intelligent career companion.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  Our advanced algorithms analyze industry trends, optimize your professional materials, 
                  and provide personalized guidance to accelerate your career trajectory.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-10 hover:border-white/30 transition-all duration-500">
                <div className="space-y-8">
                  {[
                    { icon: Brain, title: "AI-Powered Intelligence", desc: "Advanced machine learning for personalized insights", gradient: "from-blue-500 to-purple-600" },
                    { icon: BarChart3, title: "Data-Driven Results", desc: "Real-time analytics and performance optimization", gradient: "from-green-500 to-blue-600" },
                    { icon: Rocket, title: "Career Acceleration", desc: "Fast-track your professional growth", gradient: "from-orange-500 to-red-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-6 group hover:scale-105 transition-transform duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-bounce hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Ready to Transform Your Future?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of ambitious professionals who've accelerated their careers with CareerCraft's AI-powered platform
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="bg-black rounded-xl px-10 py-4">
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Schedule Demo
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black/50 to-black backdrop-blur-sm border-t border-white/20 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Diamond className="w-6 h-6 text-white animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CareerCraft
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed hover:text-gray-300 transition-colors duration-300">
                Empowering careers through cutting-edge AI technology and personalized professional guidance.
              </p>
              <div className="flex space-x-4">
                {[
                  { gradient: "from-blue-500 to-purple-600" },
                  { gradient: "from-green-500 to-blue-600" },
                  { gradient: "from-orange-500 to-red-600" },
                  { gradient: "from-pink-500 to-purple-600" }
                ].map((item, index) => (
                  <div key={index} className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer`}>
                    <div className="w-4 h-4 bg-white/80 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {[
              { title: "Services", items: ["AI Resume Builder", "Smart Cover Letters", "Industry Analytics", "Interview Mastery"] },
              { title: "Company", items: ["About Us", "Careers", "Press", "Blog"] },
              { title: "Support", items: ["Help Center", "Privacy Policy", "Terms of Service", "Contact Us"] }
            ].map((section, index) => (
             
                <div key={index}>
                <h3 className="font-bold mb-6 text-white text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <div className="space-y-3 text-gray-400">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
            ))}
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-gray-400">
            <p className="hover:text-gray-300 transition-colors duration-300">
              &copy; 2025 CareerCraft. All rights reserved. Built with precision for ambitious professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;