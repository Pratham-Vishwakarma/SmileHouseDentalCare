"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function AboutYourDoctor() {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-stone-600 via-slate-600 to-zinc-600 min-h-screen flex items-center justify-center p-6">
                <div className="bg-gradient-to-b from-zinc-500 via-slate-500 to-stone-500 rounded-lg shadow-lg w-full max-w-4xl p-6 mt-20">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Doctor's Image */}
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden drop-shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
                            alt="Doctor's Profile"
                            width={150}
                            height={150}
                            className="w-32 h-32 rounded-full object-cover"
                        />
                        </div>
            
                        {/* Doctor's Information */}
                        <div className="md:ml-8 mt-4 md:mt-0">
                        <h2 className="text-2xl font-bold text-white">
                            Dr. Ratnesh Vishwakarma
                        </h2>
                        <p className="text-gray-200 mt-2">
                            BDS - Oral and Maxillofacial Surgery
                        </p>
                        <p className="text-gray-200">
                            Certified in Advanced Cosmetic Dentistry
                        </p>
                        </div>
                    </div>
            
                    {/* Biography */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-100">Biography</h3>
                        <p className="text-gray-200 mt-2 leading-relaxed">
                        Dr. Pratham Vishwakarma is a highly skilled dentist with over 10
                        years of experience in delivering exceptional dental care. Known for
                        his compassionate approach and attention to detail, he specializes
                        in oral surgery, cosmetic dentistry, and dental implants. Dr.
                        Pratham stays updated with the latest techniques and technologies to
                        ensure the best outcomes for his patients.
                        </p>
                    </div>
            
                    {/* Specialties */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-100">Specialties</h3>
                        <ul className="list-disc list-inside text-gray-200 mt-2">
                        <li>Dental Implants</li>
                        <li>Cosmetic Dentistry</li>
                        <li>Root Canal Treatment</li>
                        <li>Teeth Whitening</li>
                        <li>Oral and Maxillofacial Surgery</li>
                        </ul>
                    </div>
            
                    {/* Experience */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-100">Experience</h3>
                        <p className="text-gray-200 mt-2 leading-relaxed">
                        With over a decade of experience, Dr. Pratham has successfully
                        treated thousands of patients, ensuring pain-free and effective
                        dental care. He has worked in leading dental clinics and hospitals
                        across the country and is an active participant in dental health
                        camps and community programs.
                        </p>
                    </div>
            
                    {/* Contact Information */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-100">Contact</h3>
                        <p className="text-gray-200 mt-2">
                        Email: example@gmail.com
                        </p>
                        <p className="text-gray-200">Phone: +91-9876543210</p>
                    </div>
                </div>
            </div>
        </>
    );
  }
  