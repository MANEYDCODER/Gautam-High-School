"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Target, Save } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { toast } from "sonner";
import Link from "next/link";

const ManageVision = () => {
  const [visionData, setVisionData] = useState({
    visionStatement: {
      title: "Our Vision",
      description: "To be a leading educational institution that nurtures global citizens with strong values, critical thinking skills, and a passion for lifelong learning.",
      subtitle: "Building Tomorrow's Leaders Today"
    },
    futureGoals: [
      {
        title: "Academic Excellence",
        description: "Maintain our position as one of the top-performing schools in the region with innovative teaching methodologies."
      },
      {
        title: "Global Connectivity",
        description: "Establish partnerships with international schools to provide students with global exposure and exchange programs."
      },
      {
        title: "Technology Integration",
        description: "Implement cutting-edge educational technology to enhance learning experiences and prepare students for the digital age."
      },
      {
        title: "Community Impact",
        description: "Expand our community service programs to create positive social impact and develop responsible citizens."
      }
    ],
    vision2030: {
      title: "Vision 2030",
      description: "By 2030, Gautam High School will be a beacon of educational excellence, known for producing confident, compassionate, and capable leaders who contribute meaningfully to society.",
      metrics: [
        { label: "Students Served", value: "5,000+" },
        { label: "University Partnerships", value: "50+" },
        { label: "Global Programs", value: "20+" },
        { label: "Scholarship Recipients", value: "1,000+" }
      ]
    }
  });

  const [loading, setLoading] = useState(false);

  const fetchVisionData = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error('Error fetching vision data:', error);
      toast("Error", {
        description: "Failed to fetch vision data",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      toast("Success", {
        description: "Vision content updated successfully",
      });
    } catch (error) {
      console.error('Error saving vision data:', error);
      toast("Error", {
        description: "Failed to save vision data",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field, value) => {
    setVisionData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedField = (section, index, field, value) => {
    setVisionData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  useEffect(() => {
    fetchVisionData();
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <SidebarInset className="flex-1 p-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Manage Vision Page</h1>
                  <p className="text-gray-600">Update vision statement and future goals</p>
                </div>
              </div>
              <Button
                onClick={handleSave}
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>

            {/* Vision Statement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Vision Statement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={visionData.visionStatement.title}
                    onChange={(e) => updateField('visionStatement', {
                      ...visionData.visionStatement,
                      title: e.target.value
                    })}
                  />
                </div>
                <div>
                  <Label>Subtitle</Label>
                  <Input
                    value={visionData.visionStatement.subtitle}
                    onChange={(e) => updateField('visionStatement', {
                      ...visionData.visionStatement,
                      subtitle: e.target.value
                    })}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    rows={4}
                    value={visionData.visionStatement.description}
                    onChange={(e) => updateField('visionStatement', {
                      ...visionData.visionStatement,
                      description: e.target.value
                    })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Future Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Future Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {visionData.futureGoals.map((goal, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div>
                      <Label>Goal {index + 1} Title</Label>
                      <Input
                        value={goal.title}
                        onChange={(e) => updateNestedField('futureGoals', index, 'title', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        rows={3}
                        value={goal.description}
                        onChange={(e) => updateNestedField('futureGoals', index, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Vision 2030 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Vision 2030</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={visionData.vision2030.title}
                    onChange={(e) => updateField('vision2030', {
                      ...visionData.vision2030,
                      title: e.target.value
                    })}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    rows={4}
                    value={visionData.vision2030.description}
                    onChange={(e) => updateField('vision2030', {
                      ...visionData.vision2030,
                      description: e.target.value
                    })}
                  />
                </div>
                <div>
                  <Label>Key Metrics</Label>
                  <div className="space-y-3">
                    {visionData.vision2030.metrics.map((metric, index) => (
                      <div key={index} className="grid grid-cols-2 gap-3">
                        <Input
                          value={metric.label}
                          onChange={(e) => {
                            const newMetrics = [...visionData.vision2030.metrics];
                            newMetrics[index] = { ...metric, label: e.target.value };
                            updateField('vision2030', {
                              ...visionData.vision2030,
                              metrics: newMetrics
                            });
                          }}
                          placeholder="Metric label"
                        />
                        <Input
                          value={metric.value}
                          onChange={(e) => {
                            const newMetrics = [...visionData.vision2030.metrics];
                            newMetrics[index] = { ...metric, value: e.target.value };
                            updateField('vision2030', {
                              ...visionData.vision2030,
                              metrics: newMetrics
                            });
                          }}
                          placeholder="Metric value"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ManageVision;
