import React from "react";
import HotelSearchForm from "./HotelSearchForm";
import HotelCard, { HotelProps } from "./HotelCard";

const defaultHotels: HotelProps[] = [
  {
    id: "1",
    name: "Hilton Yaoundé",
    location: "Yaoundé, Cameroon",
    description:
      "Luxury hotel in the heart of Yaoundé with panoramic city views, featuring an outdoor pool, spa, and multiple restaurants.",
    price: 200,
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    amenities: [],
    discount: 15,
  },
  {
    id: "2",
    name: "Douala Marriott",
    location: "Douala, Cameroon",
    description:
      "Modern business hotel near the airport with conference facilities, fitness center, and international dining options.",
    price: 180,
    rating: 4.3,
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
    amenities: [],
  },
  {
    id: "3",
    name: "Le Meridien Kribi",
    location: "Kribi, Cameroon",
    description:
      "Beachfront resort offering stunning ocean views, private beach access, water sports, and seaside dining.",
    price: 250,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
    amenities: [],
    discount: 10,
  },
  {
    id: "4",
    name: "Four Seasons Toronto",
    location: "Toronto, Canada",
    description:
      "Iconic luxury hotel in downtown Toronto with world-class spa, fine dining, and elegant rooms with city views.",
    price: 450,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
    amenities: [],
  },
  {
    id: "5",
    name: "Fairmont Vancouver",
    location: "Vancouver, Canada",
    description:
      "Historic hotel in the heart of Vancouver offering luxury accommodations with mountain and ocean views.",
    price: 380,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
    amenities: [],
    discount: 20,
  },
];

const HotelsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Perfect Stay</h1>

        {/* Search Form */}
        <div className="mb-8 flex justify-center">
          <HotelSearchForm />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Available Hotels</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {defaultHotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
