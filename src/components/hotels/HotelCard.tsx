import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Wifi, Car, Coffee } from "lucide-react";

export interface HotelAmenity {
  icon: React.ReactNode;
  label: string;
}

export interface HotelProps {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  amenities: HotelAmenity[];
  discount?: number;
}

const HotelCard = ({
  name,
  location,
  description,
  price,
  rating,
  imageUrl,
  amenities = [
    { icon: <Wifi className="w-4 h-4" />, label: "Free WiFi" },
    { icon: <Car className="w-4 h-4" />, label: "Parking" },
    { icon: <Coffee className="w-4 h-4" />, label: "Restaurant" },
  ],
  discount,
}: HotelProps) => {
  return (
    <Card className="w-full max-w-2xl bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[240px] h-[200px] relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          {discount && (
            <Badge className="absolute top-4 right-4 bg-red-500">
              {discount}% OFF
            </Badge>
          )}
        </div>

        <div className="flex-1 flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{location}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{rating}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
            <div className="flex gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 text-sm text-gray-500"
                >
                  {amenity.icon}
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="mt-auto">
            <div className="flex items-center justify-between w-full">
              <div>
                <span className="text-2xl font-bold text-primary">
                  ${price}
                </span>
                <span className="text-sm text-gray-500"> /night</span>
              </div>
              <Button>Book Now</Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default HotelCard;
