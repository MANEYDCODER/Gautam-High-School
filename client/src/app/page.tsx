'use client'
import { Button } from "@/components/ui/button";

import { Users, GraduationCap, Award, TrendingUp, BookOpen, Heart, Lightbulb, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-sky-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/ghsnobg.png" 
                alt="Gautam High School Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Gautam High School</h1>
                <p className="text-xs text-sky-600">Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-sky-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 font-medium transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 font-medium transition-colors">Academics</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 font-medium transition-colors">Admissions</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 font-medium transition-colors">Faculty</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 font-medium transition-colors">Contact</a>
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">

            <Link href="/login">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full">
                    Login
                  </Button>
                </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-sky-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-sky-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium">Home</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium">About</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium">Academics</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium">Admissions</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium">Faculty</a>
                <a href="#" className="text-gray-600 hover:text-sky-600 font-medium">Contact</a>
                <Link href="/register" className="pt-2">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-100 to-sky-200 py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-gray-800">
                Welcome to <br />
                <span className="text-sky-600">Gautam High School</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Where dreams take flight and futures are built. Join our community of learners, innovators, and leaders shaping tomorrow's world with excellence and innovation.
              </p>
              <div className="flex gap-4">
                <Link href="/register">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full">
                    Apply Now
                  </Button>
                </Link>
                
                <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-full">
                  Discover More
                </Button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="relative">
              <div className="w-80 h-80 bg-sky-500 rounded-full flex items-center justify-center mx-auto overflow-hidden animate-[float_3s_ease-in-out_infinite]">
                <img 
                  src="/ghsnobg.png" 
                  alt="Gautam High School Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 bg-white p-3 rounded-lg shadow-lg animate-[float_2s_ease-in-out_infinite_0.5s]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-sky-500" />
                  <span className="text-sm font-medium">Excellence</span>
                </div>
              </div>
              
              <div className="absolute top-20 left-0 bg-white p-3 rounded-lg shadow-lg animate-[float_2.5s_ease-in-out_infinite_1s]">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="text-sm font-medium">Innovation</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 right-10 bg-white p-3 rounded-lg shadow-lg animate-[float_2.2s_ease-in-out_infinite_1.5s]">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Users className="w-12 h-12 text-sky-500 mx-auto" />
              <div className="text-4xl font-bold text-sky-500">1000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="space-y-2">
              <GraduationCap className="w-12 h-12 text-sky-500 mx-auto" />
              <div className="text-4xl font-bold text-sky-500">50+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div className="space-y-2">
              <Award className="w-12 h-12 text-sky-500 mx-auto" />
              <div className="text-4xl font-bold text-sky-500">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-12 h-12 text-sky-500 mx-auto" />
              <div className="text-4xl font-bold text-sky-500">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Gautam High School?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover what makes us the premier choice for your child's education and future success
          </p>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <BookOpen className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className="text-gray-600 text-sm">
                World-class curriculum designed to nurture brilliant minds and foster intellectual growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Heart className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Character Building</h3>
              <p className="text-gray-600 text-sm">
                Developing integrity, leadership, and values that shape tomorrow's leaders.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Lightbulb className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
              <p className="text-gray-600 text-sm">
                State-of-the-art facilities encouraging creativity and technological advancement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Globe className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Community</h3>
              <p className="text-gray-600 text-sm">
                Diverse, inclusive environment preparing students for a connected world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-sky-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-sky-100">
            Join thousands of students who have transformed their lives at Gautam High School. Your future starts here.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">GHS</span>
                </div>
                <span className="text-xl font-bold">Gautam High School</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Shaping the Future of Education
              </p>
              <p className="text-gray-400 text-sm">
                Empowering young minds since 1975. We are committed to providing world-class education that nurtures creativity, critical thinking, and character development for future leaders.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Academics</a></li>
                <li><a href="#" className="hover:text-white">Admissions</a></li>
                <li><a href="#" className="hover:text-white">Faculty</a></li>
                <li><a href="#" className="hover:text-white">News & Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@gautamhighschool.edu</p>
                <p>Address: 123 Education Street<br />Knowledge City, State 12345</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for the latest updates, events, and announcements from our school community.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Gautam High School. Made with ❤️ for education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;