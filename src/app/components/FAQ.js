"use client";
import React from 'react';
import { useState } from 'react';

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-tr from-stone-700 from-10% via-slate-700 via-40% to-zinc-700 to-90% py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
            Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-3">
            
            {/* FAQ 1 */}
            <div className="text-left">
            <button
                className={`w-full font-semibold text-left bg-zinc-500 p-4 ${openIndex === 1 ? 'rounded-t-xl' : 'rounded-3xl'} text-white`}
                onClick={() => toggleAccordion(1)}
            >
                Where is clinic located?
                <span className="float-right">{openIndex === 1 ? "-" : "+"}</span>
            </button>
            {openIndex === 1 && (
                <p className="p-3 text-gray-100 bg-gray-600 rounded-b-xl">
                Smile House Dental Care is located at D/3, Omkar Society, Plot No. 32, Mhada, Lokhandwala Complex, Kandivali East, Mumbai-400101.
                </p>
            )}
            </div>

            {/* FAQ 2 */}
            <div className="text-left">
            <button
                className={`w-full font-semibold text-left bg-zinc-500 p-4 ${openIndex === 2 ? 'rounded-t-xl' : 'rounded-3xl'} text-white`}
                onClick={() => toggleAccordion(2)}
            >
                What dental services do you offer?
                <span className="float-right">{openIndex === 2 ? "-" : "+"}</span>
            </button>
            {openIndex === 2 && (
                <p className="p-3 text-gray-100 bg-gray-600 rounded-b-xl">
                We offer a wide range of dental services including Root Canal Treatment, Tooth-Colored Fillings, Dental Implants, Braces, Aligners, Teeth Whitening, and more.
                </p>
            )}
            </div>

            {/* FAQ 3 */}
            <div className="text-left">
            <button
                className={`w-full font-semibold text-left bg-zinc-500 p-4 ${openIndex === 3 ? 'rounded-t-xl' : 'rounded-3xl'} text-white`}
                onClick={() => toggleAccordion(3)}
            >
                How do I book an appointment?
                <span className="float-right">{openIndex === 3 ? "-" : "+"}</span>
            </button>
            {openIndex === 3 && (
                <p className="p-3 text-gray-100 bg-gray-600 rounded-b-xl">
                You can book an appointment online through this site or visit the clinic directly. For online consultations, appointments can also be confirmed instantly via the Eka Care website.
                </p>
            )}
            </div>

            {/* FAQ 4 */}
            <div className="text-left">
            <button
                className={`w-full font-semibold text-left bg-zinc-500 p-4 ${openIndex === 4 ? 'rounded-t-xl' : 'rounded-3xl'} text-white`}
                onClick={() => toggleAccordion(4)}
            >
                What are the consultation hours?
                <span className="float-right items-center">{openIndex === 4 ? "-" : "+"}</span>
            </button>
            {openIndex === 4 && (
                <p className="p-3 text-gray-100 bg-gray-600 rounded-b-xl">
                The consultation hours are from Monday to Saturday, 10:00 AM to 10:00 PM. Please check the appointment calendar for availability and to book a slot.
                </p>
            )}
            </div>

            {/* FAQ 5 */}
            <div className="text-left">
            <button
                className={`w-full font-semibold text-left bg-zinc-500 p-4 ${openIndex === 5 ? 'rounded-t-xl' : 'rounded-3xl'} text-white`}
                onClick={() => toggleAccordion(5)}
            >
                <span className="float-right">{openIndex === 5 ? "-" : "+"}</span>
                What languages are spoken?
            </button>
            {openIndex === 5 && (
                <p className="p-3 text-gray-100 bg-gray-600 rounded-b-xl">
                Dr. Ratnesh Vishwakarma and the staff are fluent in English and ensure clear communication for all patients.
                </p>
            )}
            </div>
        </div>
        </div>
    </div>
    )
}

export default FAQ