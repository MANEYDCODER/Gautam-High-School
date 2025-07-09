'use client'
import { Button } from "@/components/ui/button";

import { Users, GraduationCap, Award, TrendingUp, BookOpen, Heart, Lightbulb, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { NavigationMenuDemo } from "@/components/navbar";
import axios from "axios";

const History = () => {
  const [historyData,setHistoryData] = useState()
  const fetchHistoryData = async ()=> {
  const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+ '/history-contents')
  setHistoryData(data[0])
  }
  useEffect(()=>{
    fetchHistoryData()

  },[])
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const milestones = [
    
    {
      year: historyData?.milestones?.[0]?.year,
      title: historyData?.milestones?.[0]?.title,
      description: historyData?.milestones?.[0]?.description,
      icon: BookOpen,
      color: "sky"
    },
    {
      year: historyData?.milestones?.[1]?.year,
      title: historyData?.milestones?.[1]?.title,
      description: historyData?.milestones?.[1]?.description,
      icon: GraduationCap,
      color: "blue"
    },
    {
      year: historyData?.milestones?.[2]?.year,
      title: historyData?.milestones?.[2]?.title,
      description: historyData?.milestones?.[2]?.description,
      icon: Lightbulb,
      color: "yellow"
    },
    {
      year: historyData?.milestones?.[3]?.year,
      title: historyData?.milestones?.[3]?.title,
      description: historyData?.milestones?.[3]?.description,
      icon: Award,
      color: "green"
    },
    {
      year: historyData?.milestones?.[4]?.year,
      title: historyData?.milestones?.[4]?.title,
      description: historyData?.milestones?.[4]?.description,
      icon: Globe,
      color: "purple"
    },
    {
      year: historyData?.milestones?.[5]?.year,
      title: historyData?.milestones?.[5]?.title,
      description: historyData?.milestones?.[5]?.description,
      icon: TrendingUp,
      color: "pink"
    }
  ];

  return (
    
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-sky-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
           
            <div className="flex items-center gap-3">
              <img
                src="/ghsnobg.png"
                alt="Gautam High School Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">Gautam High School</h1>
                <p className="text-sm text-sky-700 font-medium">Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenuDemo />
            </div>

            
            <div className="flex items-center gap-4">
              

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-sky-100 py-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Home</Link>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">About</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Academics</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Admissions</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">News & Events</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Contact</a>
                <Link href="/register" className="pt-2">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white w-full rounded-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 py-20 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-medium">
                  {historyData?.title}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                {historyData?.legacyTitle} <br />
                <span className="text-sky-600 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  {historyData?.legacySubTitle}
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                {historyData?.legacyDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{historyData?.journeyTitle}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {historyData?.journeyDescription}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                      <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 bg-${milestone.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                          <milestone.icon className={`w-6 h-6 text-${milestone.color}-500`} />
                        </div>
                        <span className="text-2xl font-bold text-sky-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{historyData?.impactTitle}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {historyData?.impactDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="w-8 h-8 text-sky-500" />
              </div>
              <div className="text-4xl font-bold text-sky-500 mb-2">{historyData?.impactStats?.[0]?.value}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{historyData?.impactStats?.[0]?.label}</h3>
              <p className="text-gray-600 leading-relaxed">
                {historyData?.impactStats?.[0]?.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-4xl font-bold text-green-500 mb-2">{historyData?.impactStats?.[1]?.value}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{historyData?.impactStats?.[1]?.label}</h3>
              <p className="text-gray-600 leading-relaxed">
                {historyData?.impactStats?.[1]?.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <div className="text-4xl font-bold text-pink-500 mb-2">{historyData?.impactStats?.[2]?.value}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Y{historyData?.impactStats?.[2]?.label}</h3>
              <p className="text-gray-600 leading-relaxed">
                {historyData?.impactStats?.[2]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-6">{historyData?.callToActionTitle}</h2>
          <p className="text-xl mb-10 text-sky-100 leading-relaxed max-w-3xl mx-auto">
            {historyData?.callToActionDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                {historyData?.joinLegacyButtonText}
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                {historyData?.backToHomeButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center shadow-md">
                  <img src="ghsnobg.png" alt="Gautam High School Logo" className="w-9 h-9 object-contain" />
                </div>
                <span className="text-2xl font-bold text-sky-50">Gautam High School</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Shaping the Future of Education
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering young minds since 1975. We are committed to providing world-class education that nurtures creativity, critical thinking, and character development for future leaders.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-5 text-sky-200">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-base">
                <li><a href="#" className="hover:text-sky-300 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-sky-300 transition-colors duration-200">Academics</a></li>
                <li><a href="#" className="hover:text-sky-300 transition-colors duration-200">Admissions</a></li>
                <li><a href="#" className="hover:text-sky-300 transition-colors duration-200">Faculty</a></li>
                <li><a href="#" className="hover:text-sky-300 transition-colors duration-200">News & Events</a></li>
                <li><a href="#" className="hover:text-sky-300 transition-colors duration-200">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-5 text-sky-200">Contact Us</h3>
              <div className="space-y-3 text-gray-400 text-base">
                <p>Phone: <a href="tel:01-5354504" className="hover:text-sky-300 transition-colors duration-200">01-5354504</a></p>
                <p>Email: <a href="mailto:school.gautam@gmail.com" className="hover:text-sky-300 transition-colors duration-200">school.gautam@gmail.com</a></p>
                <p>Address: Ganabaha Marg, Kathmandu 44600</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-5 text-sky-200">Stay Updated</h3>
              <p className="text-gray-400 text-base mb-6">
                Subscribe to our newsletter for the latest updates, events, and announcements from our school community.
              </p>
              <form className="flex">
               
                
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Gautam High School. Made with ❤️ for education.</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default History;