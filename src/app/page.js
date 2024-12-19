import Navbar from './components/Navbar'; // Import Navbar
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Home Page Content */}
      <div className="relative bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://wallpaperaccess.com/full/4219039.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 px-6 py-16 sm:py-24 lg:py-32 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Welcome to Our Dental Clinic
          </h1>
          <p className="mt-4 text-xl sm:text-2xl">
            Providing expert dental care for your healthy, beautiful smile.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            What Our Patients Are Saying
          </h2>
          <div className="mt-12 space-y-8">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-300">
                {`"The dental care I received was outstanding! The staff was friendly, and the treatment was quick and painless."`}
              </p>
              <h4 className="mt-4 text-xl font-semibold">John Doe</h4>
              <p className="mt-1 text-gray-400">Satisfied Patient</p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-300">
                {`"I love my new smile! The clinic’s team made sure I was comfortable throughout the procedure. Highly recommend!"`}
              </p>
              <h4 className="mt-4 text-xl font-semibold">Jane Smith</h4>
              <p className="mt-1 text-gray-400">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Before and After Gallery */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Before & After Gallery
          </h2>
          <div className="mt-12 flex justify-center gap-8">
            {/* Before Image */}
            <div className="flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1680710254589-c61565d41bdd?q=80&w=1622&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Before and After"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-lg font-semibold">Before</p>
              <p className="mt-1 text-gray-400">Smile Makeover</p>
            </div>

            {/* After Image */}
            <div className="flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1680710254589-c61565d41bdd?q=80&w=1622&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Before and After"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-lg font-semibold">After</p>
              <p className="mt-1 text-gray-400">Smile Makeover</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-8">
            {/* FAQ 1 */}
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">What dental services do you offer?</h4>
              <p className="mt-2 text-gray-300">
                We offer a wide range of dental services including general dentistry, orthodontics, cosmetic dentistry, and more.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Do you accept insurance?</h4>
              <p className="mt-2 text-gray-300">
                Yes, we accept most major insurance plans. Please contact us to confirm if we accept your specific plan.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">How do I schedule an appointment?</h4>
              <p className="mt-2 text-gray-300">
                You can schedule an appointment by calling us directly or using the online booking system on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}