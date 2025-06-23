

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Globe, Award, ArrowLeft } from "lucide-react";

import { NavigationMenuDemo } from "@/components/navbar";
import Link from "next/link";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Gautam High School</h1>
            </div>
            <nav className="hidden md:block">
              <NavigationMenuDemo />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            asChild
            variant="outline"
            className="mb-8 bg-white/80 backdrop-blur-sm border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800 transition-all duration-200"
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Empowering minds, transforming lives, and building a brighter future for all learners
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-sky-800">
                Our Core Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Gautam High School, we are dedicated to providing transformative educational experiences 
                that inspire lifelong learning, foster critical thinking, and prepare students to become 
                confident, compassionate leaders in an ever-changing world. We believe in nurturing each 
                student's unique potential while building strong foundations for academic excellence and 
                personal growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-scale animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-sky-600" />
                </div>
                <CardTitle className="text-sky-800">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We foster empathy, kindness, and understanding in all our interactions, 
                  creating a supportive community where everyone feels valued.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-sky-600" />
                </div>
                <CardTitle className="text-sky-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We embrace creativity, critical thinking, and new approaches to learning 
                  that prepare students for the challenges of tomorrow.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-sky-600" />
                </div>
                <CardTitle className="text-sky-800">Global Citizenship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We cultivate awareness of global issues and encourage students to become 
                  responsible citizens who contribute positively to society.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-sky-600" />
                </div>
                <CardTitle className="text-sky-800">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for the highest standards in education, encouraging students 
                  to reach their full potential in all areas of learning and development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-sky-800">
                Our Vision for the Future
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We envision a world where every student has access to exceptional education that 
                ignites their passion for learning and equips them with the skills, knowledge, 
                and character needed to make a meaningful impact in their communities and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our commitment to academic excellence, innovative teaching methods, and 
                holistic development, we aim to be the leading institution that transforms lives 
                and shapes the leaders of tomorrow.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
  
    </div>
  );
};

export default Mission;