import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-b from-stone-600 via-slate-600 to-zinc-600 py-24 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We offer a wide range of dental services to ensure your smile stays healthy and bright.
            </p>
          </div>

          {/* Service List */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant service image
                alt="Dental Cleaning"
                width={300}
                height={200}
                className="w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">Dental Cleaning</h3>
              <p className="mt-2 text-gray-400">
                Regular cleaning to remove plaque and tartar, keeping your teeth and gums healthy.
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1684607633080-df59e6874367?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant service image
                alt="Cosmetic Dentistry"
                width={300}
                height={200}
                className="w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">Cosmetic Dentistry</h3>
              <p className="mt-2 text-gray-400">
                Improve the appearance of your smile with veneers, whitening, and other cosmetic treatments.
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1684607633080-df59e6874367?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant service image
                alt="Orthodontics"
                width={300}
                height={200}
                className="w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">Orthodontics</h3>
              <p className="mt-2 text-gray-400">
                Straighten your teeth with braces or clear aligners for a healthier and more confident smile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
