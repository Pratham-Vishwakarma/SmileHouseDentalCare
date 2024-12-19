"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-center">
      <nav className="bg-slate-900 font-poppins fixed w-[90%] z-50 rounded-3xl shadow-2xl mt-4 opacity-90">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center sm:justify-between"> {/* Use justify-center for centering */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                {!isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <a href="/.">
                  <Image
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Nav Links */}
                  <a
                    href="/about"
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    About
                  </a>
                  <a
                    href="/services"
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Services
                  </a>
                  <a
                    href="/contact"
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </a>
                  <a
                    href="/appointment"
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Book An Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
              >
                About
              </a>
              <a
                href="/services"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Services
              </a>
              <a
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </a>
              <a
                href="/appointment"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Book An Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
