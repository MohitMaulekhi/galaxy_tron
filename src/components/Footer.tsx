import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  All Space Gifts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Space Decor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Space Puzzles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Valentine's Day
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-gray-400">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
              />
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Galaxy Tron. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
