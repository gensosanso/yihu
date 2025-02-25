import React from "react";
import Navbar from "./navigation/Navbar";
import HeroSection from "./hero/HeroSection";
import FlightSearchForm from "./search/FlightSearchForm";
import FeaturedPackages from "./packages/FeaturedPackages";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section with Search Form Overlay */}
        <div className="relative">
          <HeroSection />
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-4 z-10">
            <FlightSearchForm />
          </div>
        </div>

        {/* Add some spacing to account for the search form overlay */}
        <div className="mt-[140px]">
          <FeaturedPackages />
        </div>
      </main>
    </div>
  );
};

export default Home;
