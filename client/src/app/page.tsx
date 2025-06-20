'use client'
import { Button } from "@/components/ui/button";

import { Users, GraduationCap, Award, TrendingUp, BookOpen, Heart, Lightbulb, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useSelector } from "react-redux";









const NavBar = () => {
  
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200">About</NavigationMenuTrigger>
          
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200">Academics</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Programs</NavigationMenuLink>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Curriculum</NavigationMenuLink>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Faculty</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200">Admissions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">How to Apply</NavigationMenuLink>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Tuition & Aid</NavigationMenuLink>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Scholarships</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200">News & Events</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Latest News</NavigationMenuLink>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Upcoming Events</NavigationMenuLink>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Event Gallery</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200">Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Get in Touch</NavigationMenuLink>
            <NavigationMenuLink className="block p-4 text-gray-700 hover:bg-sky-50 transition-colors duration-200">Visit Us</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Index = () => {
  const {email} = useSelector(state=>state.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {email}
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
            <div className="hidden lg:flex items-center space-x-8">
              <NavBar />
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white px-7 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Login
                </Button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-sky-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="block text-gray-700 hover:text-sky-600 font-medium px-2 py-1 transition-colors duration-200">Home</a>
                <a href="#" className="block text-gray-700 hover:text-sky-600 font-medium px-2 py-1 transition-colors duration-200">About</a>
                <a href="#" className="block text-gray-700 hover:text-sky-600 font-medium px-2 py-1 transition-colors duration-200">Academics</a>
                <a href="#" className="block text-gray-700 hover:text-sky-600 font-medium px-2 py-1 transition-colors duration-200">Admissions</a>
                <a href="#" className="block text-gray-700 hover:text-sky-600 font-medium px-2 py-1 transition-colors duration-200">Faculty</a>
                <a href="#" className="block text-gray-700 hover:text-sky-600 font-medium px-2 py-1 transition-colors duration-200">Contact</a>
                <Link href="/register" className="pt-2">
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white w-full py-2.5 rounded-full shadow-md">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-50 to-sky-200 py-24 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-7">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Welcome to <br />
                <span className="text-sky-600">Gautam High School</span>
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg">
                Where dreams take flight and futures are built. Join our community of learners, innovators, and leaders shaping tomorrow's world with excellence and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/register">
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white px-9 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-lg">
                    Apply Now
                  </Button>
                </Link>

          
              </div>
            </div>

            {/* Floating Elements */}
            <div className="relative flex justify-center items-center h-full min-h-[300px] lg:min-h-[400px]">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-sky-500 rounded-full flex items-center justify-center mx-auto overflow-hidden shadow-2xl animate-[float_3s_ease-in-out_infinite] transform transition-transform duration-500 hover:scale-105">
                <img
                  src="/ghsnobg.png"
                  alt="Gautam High School Logo"
                  className="w-full h-full object-cover p-8"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 right-0 lg:right-10 bg-white p-4 rounded-xl shadow-xl animate-[float_2s_ease-in-out_infinite_0.5s] transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-sky-500" />
                  <span className="text-base font-semibold text-gray-800">Excellence</span>
                </div>
              </div>

              <div className="absolute top-20 left-0 lg:left-10 bg-white p-4 rounded-xl shadow-xl animate-[float_2.5s_ease-in-out_infinite_1s] transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500" />
                  <span className="text-base font-semibold text-gray-800">Innovation</span>
                </div>
              </div>

              <div className="absolute bottom-10 right-0 lg:right-20 bg-white p-4 rounded-xl shadow-xl animate-[float_2.2s_ease-in-out_infinite_1.5s] transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-base font-semibold text-gray-800">Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="space-y-3 p-4 bg-sky-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <Users className="w-14 h-14 text-sky-600 mx-auto" />
              <div className="text-5xl font-extrabold text-sky-600">1000+</div>
              <div className="text-gray-700 text-lg font-medium">Happy Students</div>
            </div>
            <div className="space-y-3 p-4 bg-sky-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <GraduationCap className="w-14 h-14 text-sky-600 mx-auto" />
              <div className="text-5xl font-extrabold text-sky-600">50+</div>
              <div className="text-gray-700 text-lg font-medium">Expert Teachers</div>
            </div>
            <div className="space-y-3 p-4 bg-sky-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <Award className="w-14 h-14 text-sky-600 mx-auto" />
              <div className="text-5xl font-extrabold text-sky-600">25+</div>
              <div className="text-gray-700 text-lg font-medium">Years of Excellence</div>
            </div>
            <div className="space-y-3 p-4 bg-sky-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <TrendingUp className="w-14 h-14 text-sky-600 mx-auto" />
              <div className="text-5xl font-extrabold text-sky-600">95%</div>
              <div className="text-gray-700 text-lg font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Why Choose Gautam High School?</h2>
          <p className="text-gray-700 text-lg mb-14 max-w-3xl mx-auto">
            Discover what makes us the premier choice for your child's education and future success. We are dedicated to fostering holistic growth in a supportive and stimulating environment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <BookOpen className="w-14 h-14 text-sky-600 mx-auto mb-5" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Academic Excellence</h3>
              <p className="text-gray-600 text-base">
                World-class curriculum designed to nurture brilliant minds and foster intellectual growth. We empower students to achieve their full academic potential.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Heart className="w-14 h-14 text-pink-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Character Building</h3>
              <p className="text-gray-600 text-base">
                Developing integrity, leadership, and values that shape tomorrow's responsible and compassionate leaders. Our focus is on holistic development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Lightbulb className="w-14 h-14 text-yellow-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Innovation Hub</h3>
              <p className="text-gray-600 text-base">
                State-of-the-art facilities encouraging creativity, critical thinking, and technological advancement. We prepare students for the challenges of the future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Globe className="w-14 h-14 text-green-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Global Community</h3>
              <p className="text-gray-600 text-base">
                A diverse, inclusive environment preparing students for a connected world. We celebrate cultural diversity and foster global citizenship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 lg:px-8 bg-sky-700 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Ready to Begin Your Journey?</h2>
          <p className="text-xl md:text-2xl mb-10 text-sky-100 leading-relaxed">
            Join thousands of students who have transformed their lives at Gautam High School. Your future starts here with a foundation of excellence and innovation.
          </p>
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

export default Index;