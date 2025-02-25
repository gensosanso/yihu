import React from "react";
import FlightSearchForm from "../search/FlightSearchForm";
import FlightList from "./FlightList";
import { SearchData } from "../search/FlightSearchForm";

const FlightsPage = () => {
  const handleSearch = (searchData: SearchData) => {
    console.log("Searching flights with:", searchData);
    // Here you would typically fetch flights based on search criteria
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Flight</h1>

        {/* Search Form */}
        <div className="mb-8 flex justify-center">
          <FlightSearchForm onSearch={handleSearch} />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Available Flights</h2>
          <FlightList />
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;
