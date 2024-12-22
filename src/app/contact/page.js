"use client";
import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import Footer from '../components/Footer';

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-stone-700 via-slate-700 to-zinc-700 py-24 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Get in touch with us for any inquiries.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center bg-gradient-to-bl from-slate-600 to-neutral-600 p-6 rounded-lg drop-shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Our Location</h3>
              <p className="mt-2 text-gray-400">
              Plot Number 32, Omkar Society, D/3, Lokhandwala Twp, Kandivali East, Mumbai, Maharashtra, 400101
              </p>
              <div className="mt-6">
                <Image
                  src="/default-image.jpeg" // Replace with a map or location image
                  alt="Clinic Location"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-slate-600 to-neutral-600 p-6 rounded-lg drop-shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
