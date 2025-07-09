'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Users, GraduationCap, BookOpen, Trophy, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavigationMenuDemo } from "@/components/navbar";
import Link from "next/link";
import PhotoGallery from "@/components/ui/PhotoGallery";

const PhotoAlbum = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const photoCategories = [
    {
      title: "School Events",
      description: "Annual functions, cultural programs, and special celebrations",
      icon: Trophy,
      photos: [
        { id: 1, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800", alt: "Annual Day Celebration", likes: 24 },
        { id: 2, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800", alt: "Cultural Program", likes: 18 },
        { id: 3, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800", alt: "Prize Distribution", likes: 32 },
        { id: 4, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", alt: "Sports Day", likes: 15 },
        { id: 5, src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800", alt: "Science Fair", likes: 21 },
        { id: 6, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", alt: "Drama Performance", likes: 19 }
      ]
    },
    {
      title: "Academic Life",
      description: "Classroom activities, laboratories, and learning experiences",
      icon: BookOpen,
      photos: [
        { id: 7, src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800", alt: "Science Laboratory", likes: 28 },
        { id: 8, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", alt: "Computer Class", likes: 22 },
        { id: 9, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800", alt: "Library Study", likes: 16 },
        { id: 10, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", alt: "Group Discussion", likes: 25 },
        { id: 11, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800", alt: "Mathematics Class", likes: 14 },
        { id: 12, src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800", alt: "Art Workshop", likes: 20 }
      ]
    },
    {
      title: "Student Life",
      description: "Friendships, teamwork, and memorable moments",
      icon: Users,
      photos: [
        { id: 13, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", alt: "Student Friends", likes: 45 },
        { id: 14, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800", alt: "Lunch Break", likes: 38 },
        { id: 15, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", alt: "Outdoor Activities", likes: 33 },
        { id: 16, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800", alt: "Study Group", likes: 27 },
        { id: 17, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", alt: "Team Building", likes: 30 },
        { id: 18, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", alt: "School Trip", likes: 41 }
      ]
    },
    {
      title: "Graduation",
      description: "Memorable graduation ceremonies and achievements",
      icon: GraduationCap,
      photos: [
        { id: 19, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800", alt: "Graduation Ceremony", likes: 67 },
        { id: 20, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800", alt: "Certificate Distribution", likes: 52 },
        { id: 21, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800", alt: "Graduation Group Photo", likes: 89 },
        { id: 22, src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800", alt: "Academic Excellence Awards", likes: 43 },
        { id: 23, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800", alt: "Valedictorian Speech", likes: 35 },
        { id: 24, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", alt: "Family Celebration", likes: 58 }
      ]
    }
  ];

  // If a category is selected, show the gallery
  if (selectedCategory) {
    return (
      <PhotoGallery
        category={selectedCategory}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

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
              <NavigationMenuDemo/>
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link href="/register" className="hidden sm:block">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                  Login
                </Button>
              </Link>

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
                <Link href="/history" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">History</Link>
                <Link href="/mission" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Mission</Link>
                <Link href="/vision" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Vision</Link>
                <Link href="/photo-album" className="text-sky-600 font-medium py-2 px-3 rounded-lg bg-sky-50 transition-colors">Photo Album</Link>
                <Link href="/timeline" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Timeline</Link>
                <Link href="/contact" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Contact</Link>
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-medium">
                  📸 Memories
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Photo <br />
                <span className="text-sky-600 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Albums
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Explore our vibrant school community through carefully curated photo albums. Click on any category to view the full gallery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Categories */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photoCategories.map((category) => (
              <Card 
                key={category.title} 
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
                onClick={() => setSelectedCategory(category)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Preview Images */}
                    <div className="grid grid-cols-3 gap-1 h-48">
                      {category.photos.slice(0, 3).map((photo, index) => (
                        <div key={photo.id} className="relative overflow-hidden">
                          <img 
                            src={photo.src} 
                            alt={photo.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {index === 2 && category.photos.length > 3 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                +{category.photos.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <category.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{category.title}</h3>
                            <p className="text-white/80 text-sm">{category.photos.length} Photos</p>
                          </div>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                        <category.icon className="w-6 h-6 text-sky-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-sky-500 text-sm font-medium">
                          {category.photos.length} Photos
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-sky-600 font-medium text-sm">
                      <span>View Gallery</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
          <div className="inline-flex items-center gap-3 mb-6">
            <Camera className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Share Your Memories</h2>
          </div>
          <p className="text-xl mb-10 text-sky-100 leading-relaxed max-w-3xl mx-auto">
            Have photos from school events or activities? We'd love to add them to our collection and celebrate our community together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Submit Photos
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200">
                Back to Home
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

export default PhotoAlbum;