import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  title?: string;
  description?: string;
  price?: number;
  duration?: string;
  imageUrl?: string;
  discount?: number;
  onBookNow?: () => void;
}

const PackageCard = ({
  title = "Douala City Explorer",
  description = "Experience the vibrant culture and beautiful landscapes of Douala with our guided tour package",
  price = 1299,
  duration = "7 days",
  imageUrl = "https://images.unsplash.com/photo-1528277342758-f1d7613953a2?w=800&auto=format&fit=crop",
  discount = 15,
  onBookNow = () => console.log("Book Now clicked"),
}: PackageCardProps) => {
  return (
    <Card className="w-[380px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-[200px] w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {discount > 0 && (
            <Badge className="absolute top-4 right-4 bg-red-500 text-white">
              {discount}% OFF
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ${price.toLocaleString()}
            </span>
            {discount > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ${(price * (1 + discount / 100)).toLocaleString()}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" onClick={onBookNow}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
