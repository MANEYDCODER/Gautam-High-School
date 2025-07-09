'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Send, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { NavigationMenuDemo } from "@/components/navbar";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "01-5354504",
      description: "Mon-Fri, 8:00 AM - 5:00 PM",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      details: "school.gautam@gmail.com",
      description: "We'll respond within 24 hours",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Ganabaha Marg, Kathmandu 44600",
      description: "Visit us during school hours",
      color: "red"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 8:00 AM - 5:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM",
      color: "purple"
    }
  ];

  const departments = [
    {
      name: "Admissions Office",
      phone: "01-5354504",
      email: "school.gautam@gmail.com",
      hours: "8:00 AM - 4:00 PM"
    },
    {
      name: "Academic Office",
      phone: "01-5354504",
      email: "school.gautam@gmail.com", 
      hours: "8:00 AM - 5:00 PM"
    },
    {
      name: "Student Affairs",
      phone: "01-5354504",
      email: "school.gautam@gmail.com",
      hours: "9:00 AM - 4:00 PM"
    }
  ];

  const mapContainerStyles: React.CSSProperties = {
    position: 'relative',
    textAlign: 'right',
    width: '100%',
    height: 0,
    paddingBottom: '66.66666666666666%'
  };

  const mapFrameStyles: React.CSSProperties = {
    overflow: 'hidden',
    background: 'none',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  };

  const iframeStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  };

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
                <Link href="/photo-album" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Photo Album</Link>
                <Link href="/timeline" className="text-gray-600 hover:text-sky-600 font-medium py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors">Timeline</Link>
                <Link href="/contact" className="text-sky-600 font-medium py-2 px-3 rounded-lg bg-sky-50 transition-colors">Contact</Link>
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
                  📞 Get in Touch
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Contact <br />
                <span className="text-sky-600 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We're here to help with any questions about admissions, academics, or school life. Reach out to us and we'll get back to you promptly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Multiple ways to connect with us. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-${info.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <info.icon className={`w-8 h-8 text-${info.color}-500`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{info.title}</h3>
                  <p className="text-gray-800 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <Send className="w-6 h-6 text-sky-500" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-sky-500" />
                  Find Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div style={mapContainerStyles}>
                  <div style={mapFrameStyles}>
                    <iframe 
                      style={iframeStyles}
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight={0} 
                      marginWidth={0} 
                      src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Gautam%20High%20School&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                      title="Gautam High School Location"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Department Contacts */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Department Contacts</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Connect directly with specific departments for specialized assistance and information.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <Card key={dept.name} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Users className="w-6 h-6 text-sky-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{dept.name}</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-sky-500" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-sky-500" />
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-500" />
                      <span>{dept.hours}</span>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-10 text-sky-100 leading-relaxed max-w-3xl mx-auto">
            Take the first step towards an exceptional educational journey. We're here to guide you through every step of the admission process.
          </p>
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

export default Contact;