import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  History, 
  Heart,
  Image, 
  Clock, 
  Contact, 
  Globe,
  UserPlus,
  Users,
  Settings,
  ChevronRight,
  Eye
} from "lucide-react";

import Link from "next/link";
import { NavigationMenuDemo } from "@/components/navbar";

const Admin = () => {
  const contentManagementCards = [
    {
      title: "Manage Home Page content",
      description: "Update hero section, statistics, and featured content",
      icon: Home,
      color: "sky",
      route: "/admin/manage-content/home"
    },
    {
      title: "Manage history page content",
      description: "Edit school history, milestones, and legacy information",
      icon: History,
      color: "blue",
      route: "/admin/manage-content/history"
    },
    {
      title: "Manage mission page content",
      description: "Update mission statement, values, and vision",
      icon: Heart,
      color: "pink",
      route: "/admin/manage-content/mission"
    },
    {
  title: "Manage Vision Page Content",
  description: "Edit vision and core values",
  icon: Eye,
  color: "indigo",
  route: "/admin/manage-content/vision"
    },

    {
      title: "Manage Photo Album: Gallery of school events",
      description: "Upload and organize event photos and galleries",
      icon: Image,
      color: "purple",
      route: "/admin/manage-content/gallery"
    },
    {
      title: "Manage Timeline: Milestones and achievements",
      description: "Add and edit important school milestones",
      icon: Clock,
      color: "green",
      route: "/admin/manage-content/timeline"
    },
    {
      title: "Manage Contact Info",
      description: "Update contact details, address, and communication info",
      icon: Contact,
      color: "orange",
      route: "/admin/manage-content/contact"
    },
    {
      title: "Manage News / Announcements",
      description: "Create and publish school news and announcements",
      icon: Globe,
      color: "red",
      route: "/admin/manage-content/news"
    }
  ];

  const userManagementCards = [
    {
      title: "Add Students",
      description: "Register new students and manage student records",
      icon: UserPlus,
      action: "Add Student",
      gradient: "from-sky-500 to-blue-600"
    },
    {
      title: "Add Teachers",
      description: "Onboard new faculty members and manage teacher profiles",
      icon: Users,
      action: "Add Teacher",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      sky: "bg-sky-100 text-sky-600 border-sky-200 hover:bg-sky-50",
      blue: "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-50",
      pink: "bg-pink-100 text-pink-600 border-pink-200 hover:bg-pink-50",
      purple: "bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-50",
      green: "bg-green-100 text-green-600 border-green-200 hover:bg-green-50",
      orange: "bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-50",
      red: "bg-red-100 text-red-600 border-red-200 hover:bg-red-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.sky;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-sky-600">Gautam High School</p>
              </div>
            </div>
            <nav className="hidden md:block">
              <NavigationMenuDemo/>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Admin Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manage your school's content, users, and settings from this centralized administration panel.
          </p>
        </div>

        {/* Content Management Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Content Management</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentManagementCards.map((card, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-sky-300 group cursor-pointer"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(card.color)}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-sky-700 transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {card.description}
                  </CardDescription>
                  <Link href={card.route}>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                    >
                      Manage
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* The rest of your component remains unchanged... */}


        {/* Back to Home Link */}
        <div className="text-center mt-16">
          <Link href="/">
            <Button 
              variant="outline" 
              className="bg-white/80 backdrop-blur-sm border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800 px-8 py-3"
            >
              Back to Home
            </Button>
          </Link>
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

export default Admin;