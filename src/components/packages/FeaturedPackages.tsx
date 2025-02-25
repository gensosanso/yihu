import React from "react";
import PackageCard from "./PackageCard";

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  discount?: number;
}

interface FeaturedPackagesProps {
  packages?: Package[];
  onBookNow?: (packageId: string) => void;
}

const defaultPackages: Package[] = [
  {
    id: "1",
    title: "Douala City Explorer",
    description:
      "Experience the vibrant culture and beautiful landscapes of Douala with our guided tour package",
    price: 1299,
    duration: "7 days",
    imageUrl:
      "https://images.unsplash.com/photo-1528277342758-f1d7613953a2?w=800&auto=format&fit=crop",
    discount: 15,
  },
  {
    id: "2",
    title: "Yaoundé Heritage Tour",
    description:
      "Discover the rich history and traditions of Cameroon's capital city",
    price: 1499,
    duration: "5 days",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop",
    discount: 10,
  },
  {
    id: "3",
    title: "Kribi Beach Getaway",
    description:
      "Relax on pristine beaches and enjoy fresh seafood in this coastal paradise",
    price: 899,
    duration: "4 days",
    imageUrl:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&auto=format&fit=crop",
  },
];

const FeaturedPackages = ({
  packages = defaultPackages,
  onBookNow = (packageId: string) =>
    console.log(`Book Now clicked for package ${packageId}`),
}: FeaturedPackagesProps) => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of travel experiences
            connecting Canada and Cameroon
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              duration={pkg.duration}
              imageUrl={pkg.imageUrl}
              discount={pkg.discount}
              onBookNow={() => onBookNow(pkg.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackages;
