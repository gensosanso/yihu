import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Travel Agency</h3>
            <p className="text-sm">
              Connecting Canada and Cameroon with exceptional travel
              experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/flights"
                  className="hover:text-white transition-colors"
                >
                  Flights
                </Link>
              </li>
              <li>
                <Link
                  to="/hotels"
                  className="hover:text-white transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/deals"
                  className="hover:text-white transition-colors"
                >
                  Special Deals
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Destinations</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors">Douala</li>
              <li className="hover:text-white transition-colors">Yaoundé</li>
              <li className="hover:text-white transition-colors">Kribi</li>
              <li className="hover:text-white transition-colors">Toronto</li>
              <li className="hover:text-white transition-colors">Vancouver</li>
              <li className="hover:text-white transition-colors">Montreal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span>contact@travelagency.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>123 Travel Street, Toronto, ON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Travel Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
