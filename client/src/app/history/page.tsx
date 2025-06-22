'use client'
import { Button } from "@/components/ui/button";

import { Users, GraduationCap, Award, TrendingUp, BookOpen, Heart, Lightbulb, Globe, Menu, X } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import { NavigationMenuDemo } from "@/components/navbar";

const History = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const milestones = [
    {
      year: "1975",
      title: "Foundation",
      description: "Gautam High School was established with a vision to provide quality education to the community.",
      icon: BookOpen,
      color: "sky"
    },
    {
      year: "1980",
      title: "First Graduation",
      description: "Our first batch of students graduated, marking the beginning of our legacy of excellence.",
      icon: GraduationCap,
      color: "blue"
    },
    {
      year: "1990",
      title: "Expansion",
      description: "Added new facilities including science laboratories and a well-equipped library.",
      icon: Lightbulb,
      color: "yellow"
    },
    {
      year: "2000",
      title: "Recognition",
      description: "Received national recognition for academic excellence and innovation in education.",
      icon: Award,
      color: "green"
    },
    {
      year: "2010",
      title: "Digital Era",
      description: "Embraced technology with computer labs and digital learning resources.",
      icon: Globe,
      color: "purple"
    },
    {
      year: "2020",
      title: "Modern Learning",
      description: "Adapted to modern education with online learning platforms and hybrid teaching methods.",
      icon: TrendingUp,
      color: "pink"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-sky-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/ghsnobg.png" 
                  alt="Gautam High School Logo" 
                  className="w-12 h-12 object-contain hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 hover:text-sky-600 transition-colors">
                  Gautam High School
                </h1>
                <p className="text-xs text-sky-600 font-medium">Excellence in Education</p>
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
                  📚 Our Legacy
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Our Rich <br />
                <span className="text-sky-600 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  History
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                For nearly five decades, Gautam High School has been shaping minds, building character, and creating leaders. Discover our journey of excellence, innovation, and unwavering commitment to education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Journey Through Time</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming a premier educational institution, every milestone tells a story of dedication, growth, and achievement.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Lasting Impact</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              The true measure of our success lies in the achievements of our graduates and the positive impact they've made in their communities and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="w-8 h-8 text-sky-500" />
              </div>
              <div className="text-4xl font-bold text-sky-500 mb-2">10,000+</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Alumni Network</h3>
              <p className="text-gray-600 leading-relaxed">
                A global network of successful professionals, entrepreneurs, and leaders making a difference worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Awards & Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                Numerous accolades for academic excellence, innovation, and contribution to educational development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <div className="text-4xl font-bold text-pink-500 mb-2">50</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Years of Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Nearly five decades of unwavering commitment to educational excellence and community development.
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
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Continuing Story</h2>
          <p className="text-xl mb-10 text-sky-100 leading-relaxed max-w-3xl mx-auto">
            Join a legacy of excellence that spans generations. Your journey with us will be the next chapter in our rich history of educational achievement and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link href="/">
              <Button variant="outline" className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/ghsnobg.png" 
                    alt="Gautam High School Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Gautam High School</span>
              </div>
              <p className="text-sky-400 font-medium mb-4">
                Shaping the Future of Education
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering young minds since 1975. We are committed to providing world-class education that nurtures creativity, critical thinking, and character development for future leaders.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors hover:underline">Home</Link></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Academics</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Faculty</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">News & Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Contact Us</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-sky-400">📞</span> 01-5354504
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-400">✉️</span> school.gautam@gmail.com
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">📍</span> 
                  <span>Ganabaha Marg,<br />Kathmandu 44600</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates, events, and announcements from our school community.
              </p>
              <Button className="bg-sky-600 hover:bg-sky-700 text-white w-full rounded-full transition-all duration-200">
                Subscribe Newsletter
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Gautam High School. Made with ❤️ for education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default History;