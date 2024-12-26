"use client";
import Navbar from './components/Navbar'; // Import Navbar
import Image from 'next/image'; // Import Page
import Footer from './components/Footer';
import React, { useState } from "react";
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-black text-white min-h-screen">
      {/* Home Page Content */}
      <div className="relative bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rotate-180"
          style={{
            backgroundImage: "url('https://wallpaperaccess.com/full/4219039.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-zinc-700 from-10% via-slate-700 via-60% to-stone-700 to-90% opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 py-24 sm:py-24 lg:py-32 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Welcome to SmileHouse Dental Care
          </h1>
          <p className="mt-4 text-xl sm:text-2xl">
            Let&apos;s create a perfect smile.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* Before and After Gallery */}
      <div className="bg-gradient-to-tl from-zinc-700 from-10% via-slate-700 via-60% to-stone-700 to-90% py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
            Before & After Gallery
          </h2>
          <span
            className="text-4xl bg-slate-700 p-2 px-4 rounded-lg text-gray-400 font-bold shadow-lg"
          >
            Smile Makeover
          </span>
          <div className="mt-10 flex justify-center gap-8">
            {/* Before Image */}
            <div className="flex flex-col items-center">
              <Image
                src="/bad-smile.png"
                alt="Before and After"
                width={300}
                height={200}
                className="h-auto rounded-lg shadow-lg"
                style={{
                  width: '300px',
                  height: '400px',
                }}
              />
              <p className="mt-4 text-2xl font-semibold">Before</p>
            </div>

            {/* After Image */}
            <div className="flex flex-col items-center">
              <Image
                src="/good-smile.png"
                alt="Before and After"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
                style={{
                  width: '300px',
                  height: '400px',
                }}
              />
              <p className="mt-4 text-2xl font-semibold">After</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ/>

    </div>
    {/* <Page/> */}
    <Footer/>
    </>
  );
}