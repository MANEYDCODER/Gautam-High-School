'use client'
import { useState } from "react";
import { Calendar, Clock, Users, ArrowRight, Menu, X, Bell, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { NavigationMenuDemo } from "@/components/navbar";

const News = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const newsArticles = [
    {
      id: 1,
      title: "Annual Science Fair Results Announced",
      excerpt: "Our students showcased exceptional innovation and creativity at this year's science fair.",
      content: "Full article content here...",
      date: "2024-01-15",
      time: "10:30 AM",
      category: "Academic",
      author: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&crop=entropy&auto=format",
      featured: true
    },
    {
      id: 2,
      title: "New Computer Lab Inauguration",
      excerpt: "State-of-the-art computer lab with latest technology opens.",
      content: "Full article content here...",
      date: "2024-01-12",
      time: "2:00 PM",
      category: "Infrastructure",
      author: "Principal Mrs. Patel",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=entropy&auto=format",
      featured: false
    },
    {
      id: 3,
      title: "Inter-School Sports Championship Victory",
      excerpt: "Our athletics team brings home the championship trophy.",
      content: "Full article content here...",
      date: "2024-01-10",
      time: "4:15 PM",
      category: "Sports",
      author: "Coach Mike Thompson",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=entropy&auto=format",
      featured: true
    },
    {
      id: 4,
      title: "Cultural Festival 2024 Dates Announced",
      excerpt: "Mark your calendars for our biggest cultural celebration.",
      content: "Full article content here...",
      date: "2024-01-08",
      time: "9:00 AM",
      category: "Events",
      author: "Cultural Committee",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=entropy&auto=format",
      featured: false
    },
    {
      id: 5,
      title: "Scholarship Program for Meritorious Students",
      excerpt: "New scholarship initiative launched.",
      content: "Full article content here...",
      date: "2024-01-05",
      time: "11:45 AM",
      category: "Academic",
      author: "Admissions Office",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop&crop=entropy&auto=format",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-sky-100 text-sky-800";
      case "Sports":
        return "bg-green-100 text-green-800";
      case "Events":
        return "bg-purple-100 text-purple-800";
      case "Infrastructure":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-sky-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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

            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenuDemo />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-sky-600"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-sky-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Academics</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Admissions</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Faculty</a>
                <a href="#" className="text-gray-700 hover:text-sky-600 font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Latest Updates
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mt-6 leading-tight">
            News & <span className="text-sky-600">Announcements</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Stay updated with the latest happenings from Gautam High School.
          </p>
        </div>
      </div>

      {/* Featured News */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 flex items-center gap-3 justify-center">
            <Tag className="h-8 w-8 text-sky-500" /> Featured News
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{article.time}</span>
                    <Button variant="ghost" size="sm" className="text-sky-600 hover:text-sky-700 flex items-center">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">By {article.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular News */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Recent Announcements</h2>
          <div className="grid gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow group">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{article.time}</span>
                        <Button variant="ghost" size="sm" className="text-sky-600 hover:text-sky-700 flex items-center">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">By {article.author}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
