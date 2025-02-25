import React from "react";
import { HotelProps } from "../hotels/HotelCard";
import HotelCard from "../hotels/HotelCard";

const featuredDeals: HotelProps[] = [
  {
    id: "1",
    name: "Mount Febe Hotel",
    location: "Yaoundé, Cameroon",
    description:
      "Luxury 5-star hotel with panoramic views of Yaoundé. Special weekend package including spa treatment and dinner.",
    price: 180,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
    amenities: [],
    discount: 30,
  },
  {
    id: "2",
    name: "Pullman Douala",
    location: "Douala, Cameroon",
    description:
      "Business hotel in downtown Douala. Book 3 nights and get 1 night free, including breakfast and airport transfer.",
    price: 150,
    rating: 4.4,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    amenities: [],
    discount: 25,
  },
  {
    id: "3",
    name: "Sheraton Toronto",
    location: "Toronto, Canada",
    description:
      "Luxury hotel package including CN Tower tickets and dinner. Early bird special with significant savings.",
    price: 280,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
    amenities: [],
    discount: 20,
  },
  {
    id: "4",
    name: "La Falaise Bonanjo",
    location: "Douala, Cameroon",
    description:
      "Special honeymoon package with romantic dinner, spa treatment, and suite upgrade when available.",
    price: 200,
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
    amenities: [],
    discount: 35,
  },
];

const DealsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Special Hotel Deals</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exclusive discounts and packages for hotels in Canada and Cameroon
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredDeals.map((hotel) => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
