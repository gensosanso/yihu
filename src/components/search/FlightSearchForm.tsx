import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, Plane } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

interface SearchData {
  departureCity: string;
  arrivalCity: string;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  passengers: number;
}

interface FlightSearchFormProps {
  onSearch?: (searchData: SearchData) => void;
  canadianCities?: string[];
  cameroonianCities?: string[];
  className?: string;
}

const FlightSearchForm = ({
  onSearch = () => console.log("Search submitted"),
  canadianCities = ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  cameroonianCities = ["Douala", "Yaoundé"],
  className,
}: FlightSearchFormProps) => {
  const [departureCity, setDepartureCity] = React.useState("");
  const [arrivalCity, setArrivalCity] = React.useState("");
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  });
  const [passengers, setPassengers] = React.useState(1);

  return (
    <div
      className={cn(
        "w-full max-w-[1000px] p-6 rounded-xl bg-white shadow-lg",
        className,
      )}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch({ departureCity, arrivalCity, dateRange, passengers });
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Departure City */}
          <div className="space-y-2">
            <Label>From</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  {departureCity || "Select departure city"}
                  <Plane className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder="Search city..." />
                  <CommandEmpty>No city found.</CommandEmpty>
                  <CommandGroup>
                    {canadianCities.map((city) => (
                      <CommandItem
                        key={city}
                        onSelect={() => setDepartureCity(city)}
                      >
                        {city}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Arrival City */}
          <div className="space-y-2">
            <Label>To</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  {arrivalCity || "Select arrival city"}
                  <Plane className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder="Search city..." />
                  <CommandEmpty>No city found.</CommandEmpty>
                  <CommandGroup>
                    {cameroonianCities.map((city) => (
                      <CommandItem
                        key={city}
                        onSelect={() => setArrivalCity(city)}
                      >
                        {city}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date Range */}
          <div className="space-y-2">
            <Label>Travel Dates</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange && "text-muted-foreground",
                  )}
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
                    <span>Pick a date range</span>
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

          {/* Passengers */}
          <div className="space-y-2">
            <Label>Passengers</Label>
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
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

        <Button type="submit" className="w-full">
          Search Flights
        </Button>
      </form>
    </div>
  );
};

export default FlightSearchForm;
