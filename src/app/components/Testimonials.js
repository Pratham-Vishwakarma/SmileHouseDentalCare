import React from 'react'

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-tr from-stone-700 from-10% via-slate-700 via-40% to-zinc-700 to-90% py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
                What Our Patients Are Saying
            </h2>
            <div className="relative overflow-hidden py-2 flex mt-10">
                <div className="flex space-x-8 animate-scroll">
                    {testimonial.map((testimonial, idx) => (
                        <div
                        key={idx}
                        className="flex-shrink-0 w-72 h-72 p-9 bg-gray-600 rounded-2xl shadow-xl text-center relative"
                        >
                        {/* Left Quote */}
                        <span className="absolute top-5 left-4 text-6xl text-stone-400">“</span>

                        {/* Testimonial Text */}
                        <p className="text-lg text-gray-200 italic">
                            {testimonial.text}
                        </p>

                        {/* Right Quote */}
                        <span className="absolute bottom-16 right-4 text-6xl text-stone-400">”</span>

                        {/* Author's Name and Role */}
                        <h4 className="mt-6 text-xl font-semibold">{testimonial.name}</h4>
                        <p className="mt-1 text-gray-400">{testimonial.role}</p>
                        </div>
                    ))}
                </div>

                <div className="ml-8 flex space-x-8 animate-scroll" aria-hidden="true">
                    {testimonial.map((testimonial, idx) => (
                        <div
                        key={idx}
                        className="flex-shrink-0 w-72 h-72 p-9 bg-gray-600 rounded-2xl shadow-xl text-center relative"
                        >
                        {/* Left Quote */}
                        <span className="absolute top-5 left-4 text-6xl text-stone-400">“</span>

                        {/* Testimonial Text */}
                        <p className="text-lg text-gray-200 italic">
                            {testimonial.text}
                        </p>

                        {/* Right Quote */}
                        <span className="absolute bottom-16 right-4 text-6xl text-stone-400">”</span>

                        {/* Author's Name and Role */}
                        <h4 className="mt-6 text-xl font-semibold">{testimonial.name}</h4>
                        <p className="mt-1 text-gray-400">{testimonial.role}</p>
                        </div>
                    ))}
                </div>

                <div className="lg:absolute md:absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-400 blur-2xl"></div>{/* Left side blur */}
                <div className="lg:absolute md:absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-400 blur-2xl"></div>{/* Right side blur */}
            </div>
        </div>
    </div>
  )
}

export default Testimonials

const testimonial = [
    {
        "index": "1",
        "text": "Smile House Dental Care is best place for dental treatment. The doctor is honest and treatment was pain-free.",
        "name": "Khushboo Pal",
        "role": "Satisfied Patient"
    },
    {
        "index": "2",
        "text": "I visited Dr. Ratnesh with acute tooth pain. He explained the treatment professionally and made the procedure smooth.",
        "name": "Deepa Yadav",
        "role": 'Happy Customer',
    },
    {
        "index": "3",
        "text": "Dr. Ratnesh is professional. He explains everything thoroughly and ensures you're comfortable.",
        "name": "Anita Yadav",
        "role": 'Long-term Patient',
    },
    {
        "index": "4",
        "text": "Dr. Ratnesh is an excellent doctor who puts you at ease and provides personalized visits. Highly recommended.",
        "name": "Ramchandra Khadye",
        "role": "Long-term Patient"
    },
    {
        "index": "5",
        "text": "The root canal and wisdom tooth removal was succesfull, thanks to Dr. Ratnesh's guidance and efforts.",
        "name": "Sandeep Sharma",
        "role": "Happy Customer"
    },
    { 
        "index": "6",
        "text": "Dr. Ratnesh Vishwakarma is professional and explains everything clearly. I highly recommend him to everyone.",
        "name": "Naveen Painuly",
        "role": "Long-term Patient"
    },
    {
        "index": "7",
        "text": "I always recommend this clinic to my friends and family. Dr. Ratnesh Vishwakarma is my preferred dentist.",
        "name": "Komal Sawant",
        "role": "Satisfied Patient"
    },
    {
        "index": "8",
        "text": "Dr. Ratnesh is excellent and sensitive to dental anxiety. He makes you feel at ease and explains everything clearly.",
        "name": "Jyoti Vishwakarma",
        "role": "Happy Customer"
    },
    {
        "index": "9",
        "text": "Highly recommend. Dr. Ratnesh relieved my pain much quicker than expected with effective treatment.",
        "name": "Shruti Agrawal",
        "role": "Satisfied Patient"
    },
    {
        "index": "10",
        "text": "The treatment I received here was excellent. Friendly doctor and provided honest advice with excellent treatment.",
        "name": "Jitendra Vishwakarma",
        "role": "Long-term Patient"
    },
];

