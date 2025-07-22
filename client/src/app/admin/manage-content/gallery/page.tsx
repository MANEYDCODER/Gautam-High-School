'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Camera, Save, ArrowLeft, Plus, Trash2, Upload, Eye } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

import { useState, useEffect } from "react";
import { toast } from "sonner";


const ManagePhotoAlbum = () => {
  const [loading, setLoading] = useState(false);
  const [photoAlbumData, setPhotoAlbumData] = useState({
    pageTitle: "",
    pageSubtitle: "",
    pageDescription: "",
    albums: [
      {
        title: "",
        description: "",
        category: "",
        featured: false,
        photos: [
          {
            url: "",
            caption: "",
            alt: "",
            photographer: ""
          }
        ]
      }
    ]
  });

  const handleSave = async () => {
    try {
      setLoading(true);
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Photo album content updated successfully");
    } catch (error) {
      console.error('Error saving photo album data:', error);
      toast.error("Failed to update photo album content");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setPhotoAlbumData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateAlbumField = (albumIndex: number, field: string, value: string | boolean) => {
    setPhotoAlbumData(prev => ({
      ...prev,
      albums: prev.albums.map((album, i) => 
        i === albumIndex ? { ...album, [field]: value } : album
      )
    }));
  };

  const updatePhotoField = (albumIndex: number, photoIndex: number, field: string, value: string) => {
    setPhotoAlbumData(prev => ({
      ...prev,
      albums: prev.albums.map((album, i) => 
        i === albumIndex ? {
          ...album,
          photos: album.photos.map((photo, j) => 
            j === photoIndex ? { ...photo, [field]: value } : photo
          )
        } : album
      )
    }));
  };

  const addAlbum = () => {
    setPhotoAlbumData(prev => ({
      ...prev,
      albums: [...prev.albums, {
        title: "",
        description: "",
        category: "",
        featured: false,
        photos: [
          {
            url: "",
            caption: "",
            alt: "",
            photographer: ""
          }
        ]
      }]
    }));
  };

  const removeAlbum = (index: number) => {
    setPhotoAlbumData(prev => ({
      ...prev,
      albums: prev.albums.filter((_, i) => i !== index)
    }));
  };

  const addPhoto = (albumIndex: number) => {
    setPhotoAlbumData(prev => ({
      ...prev,
      albums: prev.albums.map((album, i) => 
        i === albumIndex ? {
          ...album,
          photos: [...album.photos, {
            url: "",
            caption: "",
            alt: "",
            photographer: ""
          }]
        } : album
      )
    }));
  };

  const removePhoto = (albumIndex: number, photoIndex: number) => {
    setPhotoAlbumData(prev => ({
      ...prev,
      albums: prev.albums.map((album, i) => 
        i === albumIndex ? {
          ...album,
          photos: album.photos.filter((_, j) => j !== photoIndex)
        } : album
      )
    }));
  };

  const toggleFeatured = (index: number) => {
    setPhotoAlbumData(prev => ({
      ...prev,
      albums: prev.albums.map((album, i) => 
        i === index ? { ...album, featured: !album.featured } : album
      )
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
                    <Camera className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Photo Album</h1>
                    <p className="text-gray-600">Update photo albums and gallery content</p>
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
                      <Camera className="w-4 h-4 text-sky-600" />
                    </div>
                    Page Header
                  </CardTitle>
                  <CardDescription>
                    Update the main title and description for the photo album page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="pageTitle">Page Title</Label>
                    <Input
                      id="pageTitle"
                      value={photoAlbumData.pageTitle}
                      onChange={(e) => updateField('pageTitle', e.target.value)}
                      placeholder="e.g., Photo Gallery"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pageSubtitle">Subtitle</Label>
                    <Input
                      id="pageSubtitle"
                      value={photoAlbumData.pageSubtitle}
                      onChange={(e) => updateField('pageSubtitle', e.target.value)}
                      placeholder="e.g., Capturing Our School's Best Moments"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pageDescription">Description</Label>
                    <Textarea
                      id="pageDescription"
                      value={photoAlbumData.pageDescription}
                      onChange={(e) => updateField('pageDescription', e.target.value)}
                      placeholder="Brief description for the photo album page"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Photo Albums */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Photo Albums</CardTitle>
                      <CardDescription>
                        Manage photo albums and their collections
                      </CardDescription>
                    </div>
                    <Button onClick={addAlbum} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Album
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {photoAlbumData.albums.map((album, albumIndex) => (
                    <div key={albumIndex} className="border rounded-lg p-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900">Album {albumIndex + 1}</h4>
                          {album.featured && (
                            <Badge variant="secondary" className="bg-sky-100 text-sky-800">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            onClick={() => toggleFeatured(albumIndex)} 
                            size="sm" 
                            variant="outline"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            {album.featured ? 'Unfeature' : 'Feature'}
                          </Button>
                          {photoAlbumData.albums.length > 1 && (
                            <Button 
                              onClick={() => removeAlbum(albumIndex)} 
                              size="sm" 
                              variant="ghost"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Album Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`albumTitle${albumIndex}`}>Album Title</Label>
                          <Input
                            id={`albumTitle${albumIndex}`}
                            value={album.title}
                            onChange={(e) => updateAlbumField(albumIndex, 'title', e.target.value)}
                            placeholder="Album title"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`albumCategory${albumIndex}`}>Category</Label>
                          <Input
                            id={`albumCategory${albumIndex}`}
                            value={album.category}
                            onChange={(e) => updateAlbumField(albumIndex, 'category', e.target.value)}
                            placeholder="e.g., Events, Sports, Academic"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor={`albumDescription${albumIndex}`}>Album Description</Label>
                        <Textarea
                          id={`albumDescription${albumIndex}`}
                          value={album.description}
                          onChange={(e) => updateAlbumField(albumIndex, 'description', e.target.value)}
                          placeholder="Album description"
                          rows={3}
                        />
                      </div>

                      <Separator />

                      {/* Photos in Album */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h5 className="font-medium text-gray-900">Photos in Album</h5>
                          <Button 
                            onClick={() => addPhoto(albumIndex)} 
                            size="sm" 
                            variant="outline"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Photo
                          </Button>
                        </div>

                        <div className="space-y-4">
                          {album.photos.map((photo, photoIndex) => (
                            <div key={photoIndex} className="border rounded-lg p-4 space-y-3 bg-gray-50">
                              <div className="flex items-center justify-between">
                                <h6 className="font-medium text-gray-900">Photo {photoIndex + 1}</h6>
                                {album.photos.length > 1 && (
                                  <Button 
                                    onClick={() => removePhoto(albumIndex, photoIndex)} 
                                    size="sm" 
                                    variant="ghost"
                                    className="text-red-600 hover:text-red-700"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor={`photoUrl${albumIndex}-${photoIndex}`}>Image URL</Label>
                                  <Input
                                    id={`photoUrl${albumIndex}-${photoIndex}`}
                                    value={photo.url}
                                    onChange={(e) => updatePhotoField(albumIndex, photoIndex, 'url', e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor={`photoAlt${albumIndex}-${photoIndex}`}>Alt Text</Label>
                                  <Input
                                    id={`photoAlt${albumIndex}-${photoIndex}`}
                                    value={photo.alt}
                                    onChange={(e) => updatePhotoField(albumIndex, photoIndex, 'alt', e.target.value)}
                                    placeholder="Descriptive alt text"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor={`photoCaption${albumIndex}-${photoIndex}`}>Caption</Label>
                                  <Input
                                    id={`photoCaption${albumIndex}-${photoIndex}`}
                                    value={photo.caption}
                                    onChange={(e) => updatePhotoField(albumIndex, photoIndex, 'caption', e.target.value)}
                                    placeholder="Photo caption"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor={`photoPhotographer${albumIndex}-${photoIndex}`}>Photographer</Label>
                                  <Input
                                    id={`photoPhotographer${albumIndex}-${photoIndex}`}
                                    value={photo.photographer}
                                    onChange={(e) => updatePhotoField(albumIndex, photoIndex, 'photographer', e.target.value)}
                                    placeholder="Photographer name"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
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

export default ManagePhotoAlbum;