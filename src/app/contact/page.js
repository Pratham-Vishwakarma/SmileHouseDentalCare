"use client";
import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-stone-600 via-slate-600 to-zinc-600 py-24 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Get in touch with us for any inquiries or to schedule an appointment.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center bg-gradient-to-b from-slate-700 to-neutral-700 p-6 rounded-lg drop-shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Our Location</h3>
              <p className="mt-2 text-gray-400">
                123 Dental Street, Suite 100, Smile City, DC 12345
              </p>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col items-center text-center bg-gradient-to-b from-slate-700 to-neutral-700 p-6 rounded-lg drop-shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
