'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Home, Save, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
// import { useToast } from "@/hooks/use-toast";

import {toast} from "sonner"
import AdminContentLayout from "@/components/ui/AdminContentLayout";

const ManageHome = () => {

  const [loading, setLoading] = useState(false);
  const [homeData, setHomeData] = useState({
    headerTitle: "",
    name: "",
    headerDescription: "",
    whyChooseUsTitle: "",
    whyChooseUsDescription: "",
    readyToBeginTitle: "",
    readyToBeginDescription: "",
    schoolStats: [
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" }
    ],
    coreValues: [
      { title: "" },
      { title: "" },
      { title: "" }
    ],
    whyChooseUs: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" }
    ]
  });

  const fetchHomeData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-contents`);
      const data = await response.json();
      if (data && data[0]) {
        setHomeData(data[0]);
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch home page data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-contents`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(homeData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Home page content updated successfully",
        });
      } else {
        throw new Error('Failed to update content');
      }
    } catch (error) {
      console.error('Error saving home data:', error);
      toast({
        title: "Error",
        description: "Failed to update home page content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateNestedField = (section, index, field, value) => {
    setHomeData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const updateField = (field, value) => {
    setHomeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  if (loading && !homeData.headerTitle) {
    return (
      <AdminContentLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading home page data...</p>
          </div>
        </div>
      </AdminContentLayout>
    );
  }

  return (
    <AdminContentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manage Home Page</h1>
              <p className="text-gray-600">Update content for the main homepage</p>
            </div>
          </div>
          <Button 
            onClick={handleSave} 
            disabled={loading}
            className="bg-sky-600 hover:bg-sky-700"
          >
            <Save className="w-4 h-4 mr-2" />
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>

        {/* Hero Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-sky-600" />
              </div>
              Hero Section
            </CardTitle>
            <CardDescription>
              Update the main banner, headline, and description
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="headerTitle">Header Title</Label>
                <Input
                  id="headerTitle"
                  value={homeData.headerTitle}
                  onChange={(e) => updateField('headerTitle', e.target.value)}
                  placeholder="e.g., Welcome to"
                />
              </div>
              <div>
                <Label htmlFor="name">School Name</Label>
                <Input
                  id="name"
                  value={homeData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="e.g., Gautam High School"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="headerDescription">Header Description</Label>
              <Textarea
                id="headerDescription"
                value={homeData.headerDescription}
                onChange={(e) => updateField('headerDescription', e.target.value)}
                placeholder="Brief description for the hero section"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Core Values (Floating Cards)</CardTitle>
            <CardDescription>
              Three core values displayed as floating cards in the hero section
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {homeData.coreValues.map((value, index) => (
              <div key={index}>
                <Label htmlFor={`coreValue${index}`}>Core Value {index + 1}</Label>
                <Input
                  id={`coreValue${index}`}
                  value={value.title}
                  onChange={(e) => updateNestedField('coreValues', index, 'title', e.target.value)}
                  placeholder={`Core value ${index + 1}`}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Statistics Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">School Statistics</CardTitle>
            <CardDescription>
              Four key statistics displayed in the statistics section
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {homeData.schoolStats.map((stat, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <h4 className="font-medium text-gray-900">Statistic {index + 1}</h4>
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor={`statValue${index}`}>Value</Label>
                      <Input
                        id={`statValue${index}`}
                        value={stat.value}
                        onChange={(e) => updateNestedField('schoolStats', index, 'value', e.target.value)}
                        placeholder="e.g., 1000+"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`statLabel${index}`}>Label</Label>
                      <Input
                        id={`statLabel${index}`}
                        value={stat.label}
                        onChange={(e) => updateNestedField('schoolStats', index, 'label', e.target.value)}
                        placeholder="e.g., Happy Students"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Why Choose Us Section</CardTitle>
            <CardDescription>
              Main title, description, and four feature cards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="whyChooseUsTitle">Section Title</Label>
                <Input
                  id="whyChooseUsTitle"
                  value={homeData.whyChooseUsTitle}
                  onChange={(e) => updateField('whyChooseUsTitle', e.target.value)}
                  placeholder="e.g., Why Choose Gautam High School?"
                />
              </div>
              <div>
                <Label htmlFor="whyChooseUsDescription">Section Description</Label>
                <Textarea
                  id="whyChooseUsDescription"
                  value={homeData.whyChooseUsDescription}
                  onChange={(e) => updateField('whyChooseUsDescription', e.target.value)}
                  placeholder="Brief description for the why choose us section"
                  rows={3}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Feature Cards</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {homeData.whyChooseUs.map((feature, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-gray-900">Feature {index + 1}</h5>
                    <div className="space-y-2">
                      <div>
                        <Label htmlFor={`featureTitle${index}`}>Title</Label>
                        <Input
                          id={`featureTitle${index}`}
                          value={feature.title}
                          onChange={(e) => updateNestedField('whyChooseUs', index, 'title', e.target.value)}
                          placeholder="Feature title"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`featureDescription${index}`}>Description</Label>
                        <Textarea
                          id={`featureDescription${index}`}
                          value={feature.description}
                          onChange={(e) => updateNestedField('whyChooseUs', index, 'description', e.target.value)}
                          placeholder="Feature description"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Call-to-Action Section</CardTitle>
            <CardDescription>
              The final call-to-action section at the bottom of the page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="readyToBeginTitle">CTA Title</Label>
              <Input
                id="readyToBeginTitle"
                value={homeData.readyToBeginTitle}
                onChange={(e) => updateField('readyToBeginTitle', e.target.value)}
                placeholder="e.g., Ready to Begin Your Journey?"
              />
            </div>
            <div>
              <Label htmlFor="readyToBeginDescription">CTA Description</Label>
              <Textarea
                id="readyToBeginDescription"
                value={homeData.readyToBeginDescription}
                onChange={(e) => updateField('readyToBeginDescription', e.target.value)}
                placeholder="Call-to-action description"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button 
            onClick={handleSave} 
            disabled={loading}
            size="lg"
            className="bg-sky-600 hover:bg-sky-700"
          >
            <Save className="w-5 h-5 mr-2" />
            {loading ? 'Saving Changes...' : 'Save All Changes'}
          </Button>
        </div>
      </div>
    </AdminContentLayout>
  );
};

export default ManageHome;