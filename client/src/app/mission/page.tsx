'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Globe, Award, Menu, X } from "lucide-react";

import { NavigationMenuDemo } from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Mission = () => {
  const [missionData, setMissionData] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchMissionData = async () => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/mission-contents');
    setMissionData(data[0]);
  };

  useEffect(() => {
    fetchMissionData();
  }, []);

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
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenuDemo />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
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
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Academics</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Admissions</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Faculty</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Contact</a>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            {missionData?.mainMissionTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            {missionData?.mainMissionDescription}
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-sky-800">
                {missionData?.coreMissionTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                {missionData?.coreMissionDescription}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Join Our Legacy
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Back To Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {missionData?.coreValuesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[Heart, Lightbulb, Globe, Award].map((Icon, idx) => (
              <Card key={idx} className="text-center hover-scale animate-fade-in">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <CardTitle className="text-sky-800">
                    {missionData?.missionPageCoreValues?.[idx]?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {missionData?.missionPageCoreValues?.[idx]?.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-sky-800">
                {missionData?.visionTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {missionData?.visionDescription}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {missionData?.visionCoreDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center shadow-md">
                  <img src="/ghsnobg.png" alt="Logo" className="w-9 h-9 object-contain" />
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
                <li><a href="#" className="hover:text-sky-300">About Us</a></li>
                <li><a href="#" className="hover:text-sky-300">Academics</a></li>
                <li><a href="#" className="hover:text-sky-300">Admissions</a></li>
                <li><a href="#" className="hover:text-sky-300">Faculty</a></li>
                <li><a href="#" className="hover:text-sky-300">News & Events</a></li>
                <li><a href="#" className="hover:text-sky-300">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-5 text-sky-200">Contact Us</h3>
              <div className="space-y-3 text-gray-400 text-base">
                <p>Phone: <a href="tel:01-5354504" className="hover:text-sky-300">01-5354504</a></p>
                <p>Email: <a href="mailto:school.gautam@gmail.com" className="hover:text-sky-300">school.gautam@gmail.com</a></p>
                <p>Address: Ganabaha Marg, Kathmandu 44600</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-5 text-sky-200">Stay Updated</h3>
              <p className="text-gray-400 text-base mb-6">
                Subscribe to our newsletter for the latest updates, events, and announcements from our school community.
              </p>
              <form className="flex">{/* Add input & button if needed */}</form>
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

export default Mission;
