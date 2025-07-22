'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Newspaper, Save, ArrowLeft, Plus, Trash2, Eye } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

import { useState, useEffect } from "react";
import { toast } from "sonner";


const ManageNews = () => {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState({
    pageTitle: "",
    pageSubtitle: "",
    pageDescription: "",
    articles: [
      {
        title: "",
        summary: "",
        content: "",
        author: "",
        date: "",
        category: "",
        featured: false,
        imageUrl: ""
      }
    ]
  });

  const handleSave = async () => {
    try {
      setLoading(true);
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("News page content updated successfully");
    } catch (error) {
      console.error('Error saving news data:', error);
      toast.error("Failed to update news page content");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setNewsData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateArticleField = (index: number, field: string, value: string | boolean) => {
    setNewsData(prev => ({
      ...prev,
      articles: prev.articles.map((article, i) => 
        i === index ? { ...article, [field]: value } : article
      )
    }));
  };

  const addArticle = () => {
    setNewsData(prev => ({
      ...prev,
      articles: [...prev.articles, {
        title: "",
        summary: "",
        content: "",
        author: "",
        date: "",
        category: "",
        featured: false,
        imageUrl: ""
      }]
    }));
  };

  const removeArticle = (index: number) => {
    setNewsData(prev => ({
      ...prev,
      articles: prev.articles.filter((_, i) => i !== index)
    }));
  };

  const toggleFeatured = (index: number) => {
    setNewsData(prev => ({
      ...prev,
      articles: prev.articles.map((article, i) => 
        i === index ? { ...article, featured: !article.featured } : article
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
                    <Newspaper className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage News Page</h1>
                    <p className="text-gray-600">Update news articles and announcements</p>
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
                      <Newspaper className="w-4 h-4 text-sky-600" />
                    </div>
                    Page Header
                  </CardTitle>
                  <CardDescription>
                    Update the main title and description for the news page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="pageTitle">Page Title</Label>
                    <Input
                      id="pageTitle"
                      value={newsData.pageTitle}
                      onChange={(e) => updateField('pageTitle', e.target.value)}
                      placeholder="e.g., Latest News & Updates"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pageSubtitle">Subtitle</Label>
                    <Input
                      id="pageSubtitle"
                      value={newsData.pageSubtitle}
                      onChange={(e) => updateField('pageSubtitle', e.target.value)}
                      placeholder="e.g., Stay Connected with School Events"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pageDescription">Description</Label>
                    <Textarea
                      id="pageDescription"
                      value={newsData.pageDescription}
                      onChange={(e) => updateField('pageDescription', e.target.value)}
                      placeholder="Brief description for the news page"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* News Articles */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">News Articles</CardTitle>
                      <CardDescription>
                        Manage news articles and announcements
                      </CardDescription>
                    </div>
                    <Button onClick={addArticle} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Article
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {newsData.articles.map((article, index) => (
                    <div key={index} className="border rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900">Article {index + 1}</h4>
                          {article.featured && (
                            <Badge variant="secondary" className="bg-sky-100 text-sky-800">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            onClick={() => toggleFeatured(index)} 
                            size="sm" 
                            variant="outline"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            {article.featured ? 'Unfeature' : 'Feature'}
                          </Button>
                          {newsData.articles.length > 1 && (
                            <Button 
                              onClick={() => removeArticle(index)} 
                              size="sm" 
                              variant="ghost"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`articleTitle${index}`}>Title</Label>
                          <Input
                            id={`articleTitle${index}`}
                            value={article.title}
                            onChange={(e) => updateArticleField(index, 'title', e.target.value)}
                            placeholder="Article title"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`articleCategory${index}`}>Category</Label>
                          <Input
                            id={`articleCategory${index}`}
                            value={article.category}
                            onChange={(e) => updateArticleField(index, 'category', e.target.value)}
                            placeholder="e.g., Events, Academics, Sports"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`articleAuthor${index}`}>Author</Label>
                          <Input
                            id={`articleAuthor${index}`}
                            value={article.author}
                            onChange={(e) => updateArticleField(index, 'author', e.target.value)}
                            placeholder="Author name"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`articleDate${index}`}>Date</Label>
                          <Input
                            id={`articleDate${index}`}
                            type="date"
                            value={article.date}
                            onChange={(e) => updateArticleField(index, 'date', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor={`articleImageUrl${index}`}>Image URL</Label>
                        <Input
                          id={`articleImageUrl${index}`}
                          value={article.imageUrl}
                          onChange={(e) => updateArticleField(index, 'imageUrl', e.target.value)}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`articleSummary${index}`}>Summary</Label>
                        <Textarea
                          id={`articleSummary${index}`}
                          value={article.summary}
                          onChange={(e) => updateArticleField(index, 'summary', e.target.value)}
                          placeholder="Brief summary of the article"
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor={`articleContent${index}`}>Content</Label>
                        <Textarea
                          id={`articleContent${index}`}
                          value={article.content}
                          onChange={(e) => updateArticleField(index, 'content', e.target.value)}
                          placeholder="Full article content"
                          rows={8}
                        />
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

export default ManageNews