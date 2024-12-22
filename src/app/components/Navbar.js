"use client";
import { useState } from "react";
import Image from "next/image";

/* Logo: https://instagram.fbom65-1.fna.fbcdn.net/v/t51.2885-19/464061757_391810724026524_8824501406397353932_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=instagram.fbom65-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=yWKNdPd3cvYQ7kNvgFK19WC&_nc_gid=d1856208a6fe4d079e3b6e0685ba8bf6&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB3iInjO0aCtwUFkXK2lbtFkS4Ev4c8vaTNS2Dz8QU_lw&oe=676DB0E5&_nc_sid=8b3546 */

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-center">
      <nav className="bg-gradient-to-tl from-stone-700 via-slate-700 to-zinc-700 font-poppins fixed w-[90%] z-50 rounded-3xl shadow-2xl mt-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center sm:justify-between"> {/* Use justify-center for centering */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:rounded-2xl focus:ring-gray-400"
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
                  src="/smilehouse-logo.png"
                  alt="Your Company Logo"
                  width={44}
                  height={44}
                  priority
                />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-3">
                  {/* Nav Links */}
                  <a
                    href="/about"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    About Clinic
                  </a>
                  <a
                    href="/services"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    Services
                  </a>
                  <a
                    href="/about-your-doctor"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    About Your Doctor
                  </a>
                  <a
                    href="/contact"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    Contact
                  </a>
                  <a
                    href="/appointment"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    Book Appointment
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
                className="block rounded-xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200"
                aria-current="page"
              >
                About Clinic
              </a>
              <a
                href="/services"
                className="block rounded-xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200"
              >
                Services
              </a>
              <a
                href="/about-your-doctor"
                className="block rounded-xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200"
              >
                About Your Doctor
              </a>
              <a
                href="/contact"
                className="block rounded-xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200"
              >
                Contact
              </a>
              <a
                href="/appointment"
                className="block rounded-xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
