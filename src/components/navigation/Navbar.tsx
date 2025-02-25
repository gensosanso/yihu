import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface NavbarProps {
  logo?: string;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  phoneNumber?: string;
}

const Navbar = ({
  logo = "Travel Agency",
  isLoggedIn = false,
  onLoginClick = () => console.log("Login clicked"),
  onSignUpClick = () => console.log("Sign up clicked"),
  phoneNumber = "+1 (555) 123-4567",
}: NavbarProps) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          {logo}
        </Link>

        {/* Main Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Flights</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid gap-3">
                  <Link to="/flights" className={navigationMenuTriggerStyle()}>
                    Search Flights
                  </Link>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Flight Status
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Check-in
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Hotels</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid gap-3">
                  <Link to="/hotels" className={navigationMenuTriggerStyle()}>
                    Find Hotels
                  </Link>
                  <Link to="/deals" className={navigationMenuTriggerStyle()}>
                    Deals
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Transfers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid gap-3">
                  <Link
                    to="/transfers"
                    className={navigationMenuTriggerStyle()}
                  >
                    Airport Transfers
                  </Link>
                  <Link to="/cars" className={navigationMenuTriggerStyle()}>
                    Car Rental
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Auth & Contact */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm text-gray-600">{phoneNumber}</span>
          </div>

          {!isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={onLoginClick}>
                Login
              </Button>
              <Button onClick={onSignUpClick}>Sign Up</Button>
            </div>
          ) : (
            <Button variant="ghost">My Account</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
