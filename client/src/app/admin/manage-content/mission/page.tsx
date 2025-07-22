'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Heart, Save, ArrowLeft } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";
;

const ManageMissionContent = () => {
  const [loading, setLoading] = useState(false);
  const [missionData, setMissionData] = useState({
    mainMissionTitle: "",
    mainMissionDescription: "",
    coreMissionTitle: "",
    coreMissionDescription: "",
    coreValuesTitle: "",
    visionTitle: "",
    visionDescription: "",
    visionCoreDescription: "",
    missionPageCoreValues: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" }
    ]
  });

  const fetchMissionData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mission-contents`);
      const data = await response.json();
      if (data && data[0]) {
        setMissionData(data[0]);
      }
    } catch (error) {
      console.error('Error fetching mission data:', error);
      toast.error("Failed to fetch mission page data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mission-contents`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(missionData),
      });

      if (response.ok) {
        toast.success("Mission page content updated successfully");
      } else {
        throw new Error('Failed to update content');
      }
    } catch (error) {
      console.error('Error saving mission data:', error);
      toast.error("Failed to update mission page content");
    } finally {
      setLoading(false);
    }
  };

  const updateNestedField = (section, index, field, value) => {
    setMissionData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const updateField = (field, value) => {
    setMissionData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    fetchMissionData();
  }, []);

  if (loading && !missionData.mainMissionTitle) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gray-50">
         
          <SidebarInset className="flex-1">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading mission page data...</p>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        
        <SidebarInset className="flex-1">
          
          <main className="flex-1 p-6">
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Mission Page</h1>
                    <p className="text-gray-600">Update content for the mission page</p>
                  </div>
                </div>
                <Button 
                  onClick={handleSave} 
                  disabled={loading}
                  className="bg-pink-600 hover:bg-pink-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>

              {/* Hero Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-pink-600" />
                    </div>
                    Mission Hero Section
                  </CardTitle>
                  <CardDescription>
                    Update the main mission title and description
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="mainMissionTitle">Main Mission Title</Label>
                    <Input
                      id="mainMissionTitle"
                      value={missionData.mainMissionTitle}
                      onChange={(e) => updateField('mainMissionTitle', e.target.value)}
                      placeholder="e.g., Our Mission"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mainMissionDescription">Main Mission Description</Label>
                    <Textarea
                      id="mainMissionDescription"
                      value={missionData.mainMissionDescription}
                      onChange={(e) => updateField('mainMissionDescription', e.target.value)}
                      placeholder="Brief description for the mission hero section"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Core Mission Statement */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Core Mission Statement</CardTitle>
                  <CardDescription>
                    The detailed mission statement section
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="coreMissionTitle">Core Mission Title</Label>
                    <Input
                      id="coreMissionTitle"
                      value={missionData.coreMissionTitle}
                      onChange={(e) => updateField('coreMissionTitle', e.target.value)}
                      placeholder="e.g., Our Core Mission"
                    />
                  </div>
                  <div>
                    <Label htmlFor="coreMissionDescription">Core Mission Description</Label>
                    <Textarea
                      id="coreMissionDescription"
                      value={missionData.coreMissionDescription}
                      onChange={(e) => updateField('coreMissionDescription', e.target.value)}
                      placeholder="Detailed core mission statement"
                      rows={5}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Core Values Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Core Values Section</CardTitle>
                  <CardDescription>
                    Core values title and four value cards
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="coreValuesTitle">Core Values Section Title</Label>
                    <Input
                      id="coreValuesTitle"
                      value={missionData.coreValuesTitle}
                      onChange={(e) => updateField('coreValuesTitle', e.target.value)}
                      placeholder="e.g., Our Core Values"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Core Value Cards</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {missionData.missionPageCoreValues.map((value, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-3">
                          <h5 className="font-medium text-gray-900">Core Value {index + 1}</h5>
                          <div className="space-y-2">
                            <div>
                              <Label htmlFor={`valueTitle${index}`}>Title</Label>
                              <Input
                                id={`valueTitle${index}`}
                                value={value.title}
                                onChange={(e) => updateNestedField('missionPageCoreValues', index, 'title', e.target.value)}
                                placeholder="Core value title"
                              />
                            </div>
                            <div>
                              <Label htmlFor={`valueDescription${index}`}>Description</Label>
                              <Textarea
                                id={`valueDescription${index}`}
                                value={value.description}
                                onChange={(e) => updateNestedField('missionPageCoreValues', index, 'description', e.target.value)}
                                placeholder="Core value description"
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

              {/* Vision Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vision Section</CardTitle>
                  <CardDescription>
                    The vision for the future section
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="visionTitle">Vision Title</Label>
                    <Input
                      id="visionTitle"
                      value={missionData.visionTitle}
                      onChange={(e) => updateField('visionTitle', e.target.value)}
                      placeholder="e.g., Our Vision for the Future"
                    />
                  </div>
                  <div>
                    <Label htmlFor="visionDescription">Vision Description (First Paragraph)</Label>
                    <Textarea
                      id="visionDescription"
                      value={missionData.visionDescription}
                      onChange={(e) => updateField('visionDescription', e.target.value)}
                      placeholder="First paragraph of vision description"
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="visionCoreDescription">Vision Core Description (Second Paragraph)</Label>
                    <Textarea
                      id="visionCoreDescription"
                      value={missionData.visionCoreDescription}
                      onChange={(e) => updateField('visionCoreDescription', e.target.value)}
                      placeholder="Second paragraph of vision description"
                      rows={4}
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
                  className="bg-pink-600 hover:bg-pink-700"
                >
                  <Save className="w-5 h-5 mr-2" />
                  {loading ? 'Saving Changes...' : 'Save All Changes'}
                </Button>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ManageMissionContent;