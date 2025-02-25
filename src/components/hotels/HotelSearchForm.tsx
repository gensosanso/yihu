import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, MapPin } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

export interface SearchData {
  city: string;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  guests: number;
}

interface HotelSearchFormProps {
  onSearch?: (searchData: SearchData) => void;
  cities?: string[];
  className?: string;
}

const HotelSearchForm = ({
  onSearch = () => console.log("Search submitted"),
  cities = [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
    "Douala",
    "Yaoundé",
    "Kribi",
    "Limbe",
    "Buea",
  ],
  className,
}: HotelSearchFormProps) => {
  const [city, setCity] = React.useState("");
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  });
  const [guests, setGuests] = React.useState(2);

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
          onSearch({ city, dateRange, guests });
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* City Selection */}
          <div className="space-y-2">
            <Label>Destination</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  {city || "Select city"}
                  <MapPin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder="Search city..." />
                  <CommandEmpty>No city found.</CommandEmpty>
                  <CommandGroup>
                    {cities.map((c) => (
                      <CommandItem key={c} onSelect={() => setCity(c)}>
                        {c}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Date Range */}
          <div className="space-y-2">
            <Label>Stay Dates</Label>
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

        {/* Guests */}
        <div className="space-y-2">
          <Label>Guests</Label>
          <div className="flex items-center space-x-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setGuests(Math.max(1, guests - 1))}
            >
              -
            </Button>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>{guests}</span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setGuests(guests + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Search Hotels
        </Button>
      </form>
    </div>
  );
};

export default HotelSearchForm;
