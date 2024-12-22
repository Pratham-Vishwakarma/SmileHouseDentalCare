import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-stone-700 via-slate-700 to-zinc-700 py-24 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We provide exceptional dental care to create a perfect smile for you.
            </p>
          </div>

          {/* Service List */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Tooth Color Filling */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg max-w-sm mx-auto">
              <Image
                src="/default-image.jpeg" 
                alt="Tooth Color Filling"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Tooth Color Filling
              </h3>
              <p className="mt-2 text-gray-400">
                Restore decayed or damaged teeth with fillings that match the natural color of your teeth.
              </p>
            </div>

            {/* Service 2: Root Canal Treatment */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg max-w-sm mx-auto">
              <Image
                src="/default-image.jpeg" 
                alt="Root Canal Treatment"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Root Canal Treatment
              </h3>
              <p className="mt-2 text-gray-400">
                Treat infected or damaged teeth with precise and effective root canal therapy.
              </p>
            </div>

            {/* Service 3: Crown & Bridges */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg max-w-sm mx-auto">
              <Image
                src="/default-image.jpeg" 
                alt="Crown & Bridges"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Crown & Bridges
              </h3>
              <p className="mt-2 text-gray-400">
                Restore your smile and functionality with durable crowns and bridges.
              </p>
            </div>

            {/* Service 4: Braces & Aligners */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg max-w-sm mx-auto">
              <Image
                src="/default-image.jpeg" 
                alt="Braces & Aligners"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Braces & Aligners
              </h3>
              <p className="mt-2 text-gray-400">
                Achieve a straighter smile with traditional braces or modern aligners.
              </p>
            </div>

            {/* Service 5: Dentures */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg max-w-sm mx-auto">
              <Image
                src="/default-image.jpeg" 
                alt="Dentures"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Dentures
              </h3>
              <p className="mt-2 text-gray-400">
                Replace missing teeth with comfortable and natural-looking dentures.
              </p>
            </div>

            {/* Service 6: Implants */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg max-w-sm mx-auto">
              <Image
                src="/default-image.jpeg" 
                alt="Implants"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Implants
              </h3>
              <p className="mt-2 text-gray-400">
                Restore your smile with permanent and sturdy dental implants.
              </p>
            </div>

            {/* Service 7: Teeth Whitening (center-aligned for last row) */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg col-span-1 max-w-sm mx-auto md:col-span-2 lg:col-span-1 lg:col-start-2">
              <Image
                src="/default-image.jpeg" 
                alt="Teeth Whitening"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Teeth Whitening
              </h3>
              <p className="mt-2 text-gray-400">
                Brighten your smile with advanced teeth whitening solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
