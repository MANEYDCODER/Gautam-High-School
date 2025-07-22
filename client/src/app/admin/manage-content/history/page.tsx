'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Clock, Save, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";


const ManageHistory = () => {
  const [loading, setLoading] = useState(false);
  const [historyData, setHistoryData] = useState({
    title: "",
    subtitle: "",
    introduction: "",
    milestones: [
      { year: "", title: "", description: "" },
      { year: "", title: "", description: "" },
      { year: "", title: "", description: "" }
    ],
    achievements: [
      { title: "", description: "", year: "" },
      { title: "", description: "", year: "" }
    ],
    legacy: ""
  });

  const handleSave = async () => {
    try {
      setLoading(true);
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("History page content updated successfully");
    } catch (error) {
      console.error('Error saving history data:', error);
      toast.error("Failed to update history page content");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setHistoryData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedField = (section: string, index: number, field: string, value: string) => {
    setHistoryData(prev => ({
      ...prev,
      [section]: prev[section].map((item: any, i: number) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addMilestone = () => {
    setHistoryData(prev => ({
      ...prev,
      milestones: [...prev.milestones, { year: "", title: "", description: "" }]
    }));
  };

  const removeMilestone = (index: number) => {
    setHistoryData(prev => ({
      ...prev,
      milestones: prev.milestones.filter((_, i) => i !== index)
    }));
  };

  const addAchievement = () => {
    setHistoryData(prev => ({
      ...prev,
      achievements: [...prev.achievements, { title: "", description: "", year: "" }]
    }));
  };

  const removeAchievement = (index: number) => {
    setHistoryData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
       
        <SidebarInset className="flex-1">
          
          <main className="flex-1 p-6">
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage History Page</h1>
                    <p className="text-gray-600">Update school history and milestones</p>
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

              {/* Page Header */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-sky-600" />
                    </div>
                    Page Header
                  </CardTitle>
                  <CardDescription>
                    Update the main title and introduction for the history page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Page Title</Label>
                    <Input
                      id="title"
                      value={historyData.title}
                      onChange={(e) => updateField('title', e.target.value)}
                      placeholder="e.g., Our History"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={historyData.subtitle}
                      onChange={(e) => updateField('subtitle', e.target.value)}
                      placeholder="e.g., A Legacy of Excellence"
                    />
                  </div>
                  <div>
                    <Label htmlFor="introduction">Introduction</Label>
                    <Textarea
                      id="introduction"
                      value={historyData.introduction}
                      onChange={(e) => updateField('introduction', e.target.value)}
                      placeholder="Brief introduction to school history"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Historical Milestones */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Historical Milestones</CardTitle>
                      <CardDescription>
                        Key events and milestones in school history
                      </CardDescription>
                    </div>
                    <Button onClick={addMilestone} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Milestone
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {historyData.milestones.map((milestone, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Milestone {index + 1}</h4>
                        {historyData.milestones.length > 1 && (
                          <Button 
                            onClick={() => removeMilestone(index)} 
                            size="sm" 
                            variant="ghost"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor={`milestoneYear${index}`}>Year</Label>
                          <Input
                            id={`milestoneYear${index}`}
                            value={milestone.year}
                            onChange={(e) => updateNestedField('milestones', index, 'year', e.target.value)}
                            placeholder="e.g., 1995"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor={`milestoneTitle${index}`}>Title</Label>
                          <Input
                            id={`milestoneTitle${index}`}
                            value={milestone.title}
                            onChange={(e) => updateNestedField('milestones', index, 'title', e.target.value)}
                            placeholder="Milestone title"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor={`milestoneDescription${index}`}>Description</Label>
                        <Textarea
                          id={`milestoneDescription${index}`}
                          value={milestone.description}
                          onChange={(e) => updateNestedField('milestones', index, 'description', e.target.value)}
                          placeholder="Milestone description"
                          rows={3}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Notable Achievements</CardTitle>
                      <CardDescription>
                        Awards, recognitions, and achievements
                      </CardDescription>
                    </div>
                    <Button onClick={addAchievement} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Achievement
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {historyData.achievements.map((achievement, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Achievement {index + 1}</h4>
                        {historyData.achievements.length > 1 && (
                          <Button 
                            onClick={() => removeAchievement(index)} 
                            size="sm" 
                            variant="ghost"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor={`achievementYear${index}`}>Year</Label>
                          <Input
                            id={`achievementYear${index}`}
                            value={achievement.year}
                            onChange={(e) => updateNestedField('achievements', index, 'year', e.target.value)}
                            placeholder="e.g., 2020"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor={`achievementTitle${index}`}>Title</Label>
                          <Input
                            id={`achievementTitle${index}`}
                            value={achievement.title}
                            onChange={(e) => updateNestedField('achievements', index, 'title', e.target.value)}
                            placeholder="Achievement title"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor={`achievementDescription${index}`}>Description</Label>
                        <Textarea
                          id={`achievementDescription${index}`}
                          value={achievement.description}
                          onChange={(e) => updateNestedField('achievements', index, 'description', e.target.value)}
                          placeholder="Achievement description"
                          rows={3}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Legacy Statement */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Legacy Statement</CardTitle>
                  <CardDescription>
                    A concluding statement about the school's legacy and future
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="legacy">Legacy Statement</Label>
                    <Textarea
                      id="legacy"
                      value={historyData.legacy}
                      onChange={(e) => updateField('legacy', e.target.value)}
                      placeholder="Statement about the school's continuing legacy"
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
                  className="bg-sky-600 hover:bg-sky-700"
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

export default ManageHistory;