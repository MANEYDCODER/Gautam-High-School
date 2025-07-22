'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Save, ArrowLeft } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

import { useState, useEffect } from "react";
import { toast } from "sonner";
;

const ManageContact = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    title: "",
    subtitle: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    officeHours: "",
    mapEmbedCode: ""
  });

  const handleSave = async () => {
    try {
      setLoading(true);
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Contact page content updated successfully");
    } catch (error) {
      console.error('Error saving contact data:', error);
      toast.error("Failed to update contact page content");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setContactData(prev => ({
      ...prev,
      [field]: value
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
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Contact Page</h1>
                    <p className="text-gray-600">Update contact information and details</p>
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
                      <Mail className="w-4 h-4 text-sky-600" />
                    </div>
                    Page Header
                  </CardTitle>
                  <CardDescription>
                    Update the main title and description for the contact page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Page Title</Label>
                    <Input
                      id="title"
                      value={contactData.title}
                      onChange={(e) => updateField('title', e.target.value)}
                      placeholder="e.g., Contact Us"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={contactData.subtitle}
                      onChange={(e) => updateField('subtitle', e.target.value)}
                      placeholder="e.g., Get in Touch"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={contactData.description}
                      onChange={(e) => updateField('description', e.target.value)}
                      placeholder="Brief description for the contact page"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                  <CardDescription>
                    School contact details and office hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={contactData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="e.g., +1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="e.g., info@gautamhighschool.edu"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">School Address</Label>
                    <Textarea
                      id="address"
                      value={contactData.address}
                      onChange={(e) => updateField('address', e.target.value)}
                      placeholder="Complete school address"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="officeHours">Office Hours</Label>
                    <Textarea
                      id="officeHours"
                      value={contactData.officeHours}
                      onChange={(e) => updateField('officeHours', e.target.value)}
                      placeholder="e.g., Monday - Friday: 8:00 AM - 5:00 PM"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Map Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Location Map</CardTitle>
                  <CardDescription>
                    Embed code for Google Maps or other map service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="mapEmbedCode">Map Embed Code</Label>
                    <Textarea
                      id="mapEmbedCode"
                      value={contactData.mapEmbedCode}
                      onChange={(e) => updateField('mapEmbedCode', e.target.value)}
                      placeholder="Paste your map embed code here"
                      rows={5}
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

export default ManageContact;