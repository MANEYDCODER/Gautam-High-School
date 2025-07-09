'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const PhotoGallery = ({ category, onBack }: { category: any; onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
          <Button variant="outline" onClick={onBack}>
            ← Back
          </Button>
        </div>

        <p className="text-gray-600 mb-6 max-w-3xl">{category.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.photos.map((photo: any) => (
            <Card key={photo.id} className="overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 relative group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-4 py-2 flex justify-between items-center">
                  <span className="font-semibold">{photo.alt}</span>
                  <div className="flex items-center gap-1 text-sm">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span>{photo.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
