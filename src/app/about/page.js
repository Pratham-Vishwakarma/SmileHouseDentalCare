import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutClinic = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-stone-700 via-slate-700 to-zinc-700 py-24 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About SmileHouse Dental Care
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Providing comprehensive dental solutions to help you achieve a perfect smile in a comfortable and compassionate environment.
            </p>
          </div>

          {/* Clinic Mission */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/drratnesh3.png"
                alt="SmileHouse Dental Care"
                width={425}
                height={200}
                className="rounded-lg shadow-lg"
                // style={{
                //   width: '450px',
                //   height: '325px',
                // }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-gray-200">
                At SmileHouse Dental Care, we are dedicated to creating perfect smiles through personalized care and advanced dental treatments. Your comfort and health are our top priorities.
              </p>
            </div>
          </div>

          {/* Our Clinic Philosophy */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white">Our Philosophy</h3>
              <p className="mt-4 text-gray-200">
                We believe in providing high-quality dental care that focuses on both aesthetics and oral health. Using modern technology and a compassionate approach, we aim to deliver the best possible experience for our patients.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
                  <div className="shadow-xl">
                    <Image
                        src="/clinic1 1.png"
                        alt="Doctor's Profile"
                        width={2500}
                        height={300}
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
          </div>

          {/* Doctor's Commitment */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white">Meet Dr. Ratnesh Vishwakarma</h3>
            <p className="mt-2 text-lg text-gray-400">
              Dr. Ratnesh Vishwakarma, a skilled dental and cosmetic surgeon, is committed to providing exceptional care tailored to your needs. His expertise ensures the best outcomes for every patient.
            </p>

            <div className="mt-8 flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
                    <Image
                        src="/drratnesh-2.jpg"
                        alt="Doctor's Profile"
                        width={300}
                        height={300}
                        className="rounded-full object-cover"
                    />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-white">Dr. Ratnesh Vishwakarma</h4>
                <p className="mt-1 text-gray-400">Dental & Cosmetic Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutClinic
