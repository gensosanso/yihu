import React from "react";
import FeaturedPackages from "./FeaturedPackages";

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <FeaturedPackages />
      </div>
    </div>
  );
};

export default PackagesPage;
