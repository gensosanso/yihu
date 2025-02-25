import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  MapPin,
  Users,
  Fuel,
  Cog,
  Car,
} from "lucide-react";

const carTypes = [
  {
    id: "economy",
    name: "Economy",
    description: "Compact and fuel-efficient car, perfect for city driving",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop",
    seats: 4,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: "midsize",
    name: "Midsize Sedan",
    description: "Comfortable sedan with good trunk space",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1550355291-d94fe5c48b01?w=800&auto=format&fit=crop",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Hybrid",
  },
  {
    id: "suv",
    name: "SUV",
    description: "Spacious SUV ideal for families and groups",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&auto=format&fit=crop",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: "luxury",
    name: "Luxury Sedan",
    description: "Premium vehicle with high-end features",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Hybrid",
  },
];

const locations = [
  "Toronto Downtown",
  "Toronto Pearson Airport",
  "Montreal Downtown",
  "Montreal Airport",
  "Vancouver Downtown",
  "Vancouver Airport",
  "Douala Airport",
  "Douala City Center",
  "Yaoundé Airport",
  "Yaoundé City Center",
];

const CarRentalPage = () => {
  const [selectedCar, setSelectedCar] = React.useState(carTypes[0]);
  const [pickupLocation, setPickupLocation] = React.useState("");
  const [dropoffLocation, setDropoffLocation] = React.useState("");
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Car Rental</h1>
          <p className="text-gray-600 mb-8">
            Find the perfect car for your journey in Canada and Cameroon
          </p>

          {/* Search Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pickup Location */}
                  <div className="space-y-2">
                    <Label>Pickup Location</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-full justify-between"
                        >
                          {pickupLocation || "Select pickup location"}
                          <MapPin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0">
                        <Command>
                          <CommandInput placeholder="Search location..." />
                          <CommandEmpty>No location found.</CommandEmpty>
                          <CommandGroup>
                            {locations.map((location) => (
                              <CommandItem
                                key={location}
                                onSelect={() => setPickupLocation(location)}
                              >
                                {location}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Dropoff Location */}
                  <div className="space-y-2">
                    <Label>Dropoff Location</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-full justify-between"
                        >
                          {dropoffLocation || "Select dropoff location"}
                          <MapPin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0">
                        <Command>
                          <CommandInput placeholder="Search location..." />
                          <CommandEmpty>No location found.</CommandEmpty>
                          <CommandGroup>
                            {locations.map((location) => (
                              <CommandItem
                                key={location}
                                onSelect={() => setDropoffLocation(location)}
                              >
                                {location}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Date Range */}
                  <div className="space-y-2">
                    <Label>Rental Period</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange?.from ? (
                            dateRange.to ? (
                              <>
                                {format(dateRange.from, "LLL dd, y")} -{" "}
                                {format(dateRange.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(dateRange.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick dates</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={dateRange?.from}
                          selected={dateRange}
                          onSelect={setDateRange}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Car Selection */}
          <h2 className="text-2xl font-semibold mb-4">Available Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {carTypes.map((car) => (
              <Card
                key={car.id}
                className={`cursor-pointer transition-all ${selectedCar.id === car.id ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelectedCar(car)}
              >
                <CardContent className="p-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {car.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{car.seats} seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cog className="w-4 h-4" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4" />
                      <span>{car.fuelType}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                      ${car.price}
                      <span className="text-sm font-normal">/day</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Book Now Button */}
          <Button className="w-full" size="lg">
            Book Car Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarRentalPage;
