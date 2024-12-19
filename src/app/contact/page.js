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
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Get in touch with us for any inquiries or to schedule an appointment.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex flex-col items-center text-center bg-gradient-to-b from-slate-700 to-neutral-700 p-6 rounded-lg drop-shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Our Location</h3>
              <p className="mt-2 text-gray-400">
                123 Dental Street, Suite 100, Smile City, DC 12345
              </p>
              <div className="mt-6 w-full max-w-xs">
                <Image
                  src="https://images.unsplash.com/photo-1734273729325-c4e3c0d28d87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D" // Replace with a map or location image
                  alt="Clinic Location"
                  width={400}
                  height={250}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col items-center text-center bg-gradient-to-b from-slate-700 to-neutral-700 p-6 rounded-lg drop-shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
              <form className="mt-6 space-y-4 w-full max-w-md">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-900 text-white rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-900 text-white rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 bg-gray-900 text-white rounded-md"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-800 text-gray-200 rounded-md bg-opacity-99"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
