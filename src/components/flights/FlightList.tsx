import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Clock, Calendar } from "lucide-react";

export interface Flight {
  id: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  airline: string;
  stops: number;
  date: string;
}

interface FlightListProps {
  flights?: Flight[];
  onBookFlight?: (flightId: string) => void;
}

const defaultFlights: Flight[] = [
  {
    id: "1",
    departureCity: "Toronto",
    arrivalCity: "Douala",
    departureTime: "10:00 AM",
    arrivalTime: "6:30 AM",
    duration: "16h 30m",
    price: 1250,
    airline: "Air Canada",
    stops: 1,
    date: "2024-04-15",
  },
  {
    id: "2",
    departureCity: "Montreal",
    arrivalCity: "Yaoundé",
    departureTime: "2:15 PM",
    arrivalTime: "10:45 AM",
    duration: "17h 30m",
    price: 1180,
    airline: "Air France",
    stops: 1,
    date: "2024-04-15",
  },
  {
    id: "3",
    departureCity: "Vancouver",
    arrivalCity: "Douala",
    departureTime: "11:30 AM",
    arrivalTime: "9:00 AM",
    duration: "19h 30m",
    price: 1450,
    airline: "Brussels Airlines",
    stops: 2,
    date: "2024-04-15",
  },
];

const FlightList = ({
  flights = defaultFlights,
  onBookFlight = (flightId: string) =>
    console.log(`Booking flight ${flightId}`),
}: FlightListProps) => {
  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <Card key={flight.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              {/* Flight Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{flight.departureTime}</p>
                    <p className="text-sm text-gray-600">
                      {flight.departureCity}
                    </p>
                  </div>
                  <Plane className="mx-4 text-gray-400" />
                  <div>
                    <p className="text-2xl font-bold">{flight.arrivalTime}</p>
                    <p className="text-sm text-gray-600">
                      {flight.arrivalCity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Duration & Stops */}
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">{flight.duration}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {flight.stops === 0
                    ? "Direct"
                    : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
                </p>
              </div>

              {/* Airline & Date */}
              <div className="text-center space-y-1">
                <p className="font-medium">{flight.airline}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{flight.date}</span>
                </div>
              </div>

              {/* Price & Book */}
              <div className="text-center space-y-2">
                <p className="text-2xl font-bold text-primary">
                  ${flight.price}
                </p>
                <Button
                  className="w-full"
                  onClick={() => onBookFlight(flight.id)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FlightList;
