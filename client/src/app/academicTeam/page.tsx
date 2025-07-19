'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenuDemo } from "@/components/navbar";
import { Menu, X } from "lucide-react";
import { useState } from "react";


interface TeamMember {
  name: string;
  role?: string;
  subjects?: string[];
  image?: string;
  description?: string;
}

const AcademicTeam = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leadership: TeamMember[] = [
    {
      name: "Mr. Suvesh Basnet",
      role: "CEO",
      description: "Leading the institution with 2+ years of educational experience",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mr. Bishnu P Neupane",
      role: "Principal",
      description: "Overseeing academic excellence and student development",
      image: ""
    },
    {
      name: "Ms. Sangita Maharjan",
      role: "Vice Principal",
      description: "Supporting academic operations and student welfare",
      image: ""
    }
  ];

  const seniorTeachers: TeamMember[] = [
    {
      name: "Dr. Robert Smith",
      subjects: ["Mathematics", "Physics"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Prof. Lisa Anderson",
      subjects: ["English Literature", "Creative Writing"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const mediumTeachers: TeamMember[] = [
    {
      name: "Mr. David Wilson",
      subjects: ["Chemistry", "Biology"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ms. Amanda Brown",
      subjects: ["History", "Geography"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const juniorTeachers: TeamMember[] = [
    {
      name: "Ms. Jennifer Lee",
      subjects: ["Elementary Math", "Science"],
      image: "https://images.unsplash.com/photo-1559941265-08b3ddfd6ba7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mr. Alex Kumar",
      subjects: ["Art", "Music"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const ecaTeachers: TeamMember[] = [
    {
      name: "Coach Maria Garcia",
      subjects: ["Sports", "Physical Education"],
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mr. James Taylor",
      subjects: ["Drama", "Music"],
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const helpingSisters: TeamMember[] = [
    {
      name: "Sister Mary Catherine",
      role: "Spiritual Guidance",
      description: "Providing spiritual support and guidance to students",
      image: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sister Anne Margaret",
      role: "Student Counseling",
      description: "Supporting student mental health and well-being",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const TeamSection = ({
    title,
    members,
    showSubjects = true,
    badgeColor = "bg-sky-100 text-sky-800",
    customGrid = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  }: {
    title: string;
    members: TeamMember[];
    showSubjects?: boolean;
    badgeColor?: string;
    customGrid?: string;
  }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-sky-900 mb-8 text-center">{title}</h2>
      <div className={`grid ${customGrid}`}>
        {members.map((member, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-sky-100">
            <CardHeader className="text-center pb-2">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-sky-100 text-sky-800 text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg text-sky-900">{member.name}</CardTitle>
              {member.role && (
                <CardDescription className="text-sky-600 font-medium">
                  {member.role}
                </CardDescription>
              )}
              {member.description && (
                <CardDescription className="text-gray-600 text-sm">
                  {member.description}
                </CardDescription>
              )}
            </CardHeader>
            {showSubjects && member.subjects && (
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.subjects.map((subject, subIndex) => (
                    <Badge key={subIndex} variant="secondary" className={badgeColor}>
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navbar same as Home Page */}
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
              <NavigationMenuDemo/>
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-sky-900 mb-6">Our Academic Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of educators, leaders, and support staff who are committed to providing exceptional education and nurturing environment for our students.
          </p>
        </div>

        <TeamSection
          title="Leadership Team"
          members={leadership}
          showSubjects={false}
          badgeColor="bg-purple-100 text-purple-800"
          customGrid="grid-cols-1 md:grid-cols-3 gap-10"
        />
        <TeamSection title="Senior Level Teachers" members={seniorTeachers} badgeColor="bg-green-100 text-green-800" />
        <TeamSection title="Medium Level Teachers" members={mediumTeachers} badgeColor="bg-blue-100 text-blue-800" />
        <TeamSection title="Junior Level Teachers" members={juniorTeachers} badgeColor="bg-orange-100 text-orange-800" />
        <TeamSection title="Extracurricular Activities Teachers" members={ecaTeachers} badgeColor="bg-pink-100 text-pink-800" />
        <TeamSection title="Helping Sisters" members={helpingSisters} showSubjects={false} badgeColor="bg-indigo-100 text-indigo-800" />
      </main>

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

export default AcademicTeam;
