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
  Users,
  MapPin,
  Car,
  Clock,
  Shield,
  CreditCard,
} from "lucide-react";

const vehicleTypes = [
  {
    id: "sedan",
    name: "Sedan",
    description: "Comfortable car for up to 4 passengers with 2 luggage",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1550355291-d94fe5c48a01?w=800&auto=format&fit=crop",
    capacity: 4,
    luggage: 2,
  },
  {
    id: "suv",
    name: "SUV",
    description: "Spacious vehicle for up to 6 passengers with 4 luggage",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&auto=format&fit=crop",
    capacity: 6,
    luggage: 4,
  },
  {
    id: "van",
    name: "Minivan",
    description: "Perfect for groups up to 8 passengers with 6 luggage",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&auto=format&fit=crop",
    capacity: 8,
    luggage: 6,
  },
];

const airports = [
  "Toronto Pearson International Airport (YYZ)",
  "Montréal-Pierre Elliott Trudeau International Airport (YUL)",
  "Vancouver International Airport (YVR)",
  "Douala International Airport (DLA)",
  "Yaoundé Nsimalen International Airport (NSI)",
];

const TransfersPage = () => {
  const [selectedVehicle, setSelectedVehicle] = React.useState(vehicleTypes[0]);
  const [pickupLocation, setPickupLocation] = React.useState("");
  const [dropoffLocation, setDropoffLocation] = React.useState("");
  const [date, setDate] = React.useState<Date>();
  const [passengers, setPassengers] = React.useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Airport Transfers</h1>
          <p className="text-gray-600 mb-8">
            Safe and comfortable airport transfers in Canada and Cameroon
          </p>

          {/* Booking Form */}
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
                            {airports.map((airport) => (
                              <CommandItem
                                key={airport}
                                onSelect={() => setPickupLocation(airport)}
                              >
                                {airport}
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
                    <Input
                      placeholder="Enter hotel or address"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                    />
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label>Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Passengers */}
                  <div className="space-y-2">
                    <Label>Passengers</Label>
                    <div className="flex items-center space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setPassengers(Math.max(1, passengers - 1))
                        }
                      >
                        -
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{passengers}</span>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setPassengers(passengers + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Vehicle Selection */}
          <h2 className="text-2xl font-semibold mb-4">Select Your Vehicle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {vehicleTypes.map((vehicle) => (
              <Card
                key={vehicle.id}
                className={`cursor-pointer transition-all ${selectedVehicle.id === vehicle.id ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <CardContent className="p-4">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {vehicle.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{vehicle.capacity}</span>
                      <Car className="w-4 h-4 ml-2" />
                      <span className="text-sm">{vehicle.luggage}</span>
                    </div>
                    <span className="text-lg font-bold">${vehicle.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">24/7 Service</h3>
                <p className="text-sm text-gray-600">
                  Available round the clock for your convenience
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Safe & Reliable</h3>
                <p className="text-sm text-gray-600">
                  Professional drivers and well-maintained vehicles
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CreditCard className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Easy Payment</h3>
                <p className="text-sm text-gray-600">
                  Secure online payment options
                </p>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <Button className="w-full" size="lg">
            Book Transfer Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransfersPage;
