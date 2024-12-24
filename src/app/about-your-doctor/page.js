"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function AboutYourDoctor() {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-stone-700 via-slate-700 to-zinc-700 min-h-screen flex items-center justify-center py-8 px-6">
                <div className="bg-gradient-to-b from-stone-600 via-slate-600 to-zinc-600 rounded-3xl drop-shadow-2xl w-full max-w-4xl p-8 mt-16">
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                        {/* Doctor's Image */}
                        <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
                            <Image
                                src="/default-image.jpeg"
                                alt="Doctor's Profile"
                                width={150}
                                height={150}
                                className="w-32 h-32 rounded-full object-cover"
                            />
                        </div>

                        {/* Doctor's Information */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-semibold text-white leading-tight">
                                Dr. Ratnesh Vishwakarma
                            </h2>
                            <p className="text-gray-300 mt-2 text-lg">
                                BDS - Oral and Maxillofacial Surgery
                            </p>
                            <p className="text-gray-300 text-lg">
                                Certified in Advanced Cosmetic Dentistry
                            </p>
                        </div>
                    </div>

                    {/* Biography */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">Biography</h3>
                        <p className="text-gray-200 leading-relaxed text-lg">
                            Dr. Ratnesh Vishwakarma is a highly skilled dentist and cosmetic surgeon with extensive experience in delivering high-quality dental care. With a compassionate approach, he specializes in creating confident smiles and providing personalized treatment plans tailored to each patient’s unique needs.
                        </p>
                    </div>

                    {/* Specialties */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">Specialties</h3>
                        <ul className="list-disc list-inside text-gray-200 text-lg">
                            <li>Dental Implants</li>
                            <li>Cosmetic Dentistry</li>
                            <li>Root Canal Treatment</li>
                            <li>Teeth Whitening</li>
                            <li>Oral and Maxillofacial Surgery</li>
                        </ul>
                    </div>

                    {/* Experience */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
                        <p className="text-gray-200 leading-relaxed text-lg">
                            Dr. Vishwakarma has been practicing dentistry for over a decade, offering state-of-the-art treatments in top clinics and hospitals. His commitment to staying updated with advancements in dentistry ensures every patient receives the highest standard of care.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
                        <p className="text-gray-200 text-lg">Email: smile.drratnesh@gmail.com</p>
                        <p className="text-gray-200 text-lg">Phone: +91-98923-99293 / +91-90827-95649</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
