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
              About Our Dental Clinic
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We are dedicated to providing top-quality dental care in a friendly and comfortable environment.
            </p>
          </div>

          {/* Clinic Mission */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="https://images.unsplash.com/photo-1734126048491-a98cd0bef202?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dental Clinic"
                width={500}
                height={300}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-gray-300">
                Our mission is to offer exceptional dental care while making sure our patients feel at home and well taken care of. We focus on the well-being of our patients and provide personalized treatment tailored to their unique needs.
              </p>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white">Meet Our Team</h3>
            <p className="mt-2 text-lg text-gray-400">
              Our experienced and friendly team is here to provide you with the highest standard of dental care.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dentist 1"
                  width={150}
                  height={150}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <h4 className="mt-4 text-xl font-semibold text-white">Dr. John Doe</h4>
                <p className="mt-1 text-gray-400">Lead Dentist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
