"use client";
import { useState, useEffect } from "react";
import { db } from "./firebaseConfig"; // Firebase configuration
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookAppointment() {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        useremail: "",
        date: "",
        time: "",
        service: "",
        notes: ""
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [availableSlots, setAvailableSlots] = useState([]);

    useEffect(() => {
        let timeout;
        if (responseMessage) {
            timeout = setTimeout(() => setResponseMessage(""), 3000);
        }
        return () => clearTimeout(timeout);
    }, [responseMessage]);

    useEffect(() => {
        const fetchBookedSlots = async () => {
            if (formData.date) {
                const booked = await getBookedSlots(formData.date);
    
                // Localized function to filter slots
                const allSlots = [
                    "10:00", "11:00", "12:00",
                    "13:00", "14:00", "15:00", "16:00", "17:00"
                ];
                const formattedBookedSlots = booked.map(slot => slot.trim());
                const available = allSlots.filter(slot => !formattedBookedSlots.includes(slot));
                const formattedAvailable = available.map(convertTo12HourFormat);    
                setAvailableSlots(formattedAvailable);
            }
        };
    
        fetchBookedSlots();
    }, [formData.date]);
    

    const getBookedSlots = async (date) => {
        try {
            const docRef = doc(db, "bookedSlots", date);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return docSnap.data().timeSlots || [];
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error fetching booked slots:", error);
            return [];
        }
    };

    const convertTo12HourFormat = (time) => {
        const [hour, minute] = time.split(":").map(Number);
        const period = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12; // Convert to 12-hour format
        return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };    

    const updateFirestore = async () => {
        try {
            const docRef = doc(db, "bookedSlots", formData.date);
            const docSnap = await getDoc(docRef);

            const selectedTime = convertTo24HourFormat(formData.time); // Convert back to 24-hour format

            if (docSnap.exists()) {
                // Append the new slot to the existing list
                await updateDoc(docRef, {
                    timeSlots: arrayUnion(selectedTime)
                });
            } else {
                // Create a new document for the date
                await setDoc(docRef, {
                    timeSlots: [selectedTime]
                });
            }
        } catch (error) {
            console.error("Error updating Firestore:", error);
        }
    };

    const convertTo24HourFormat = (time) => {
        const [hourMinute, period] = time.split(" ");
        let [hour, minute] = hourMinute.split(":").map(Number);

        if (period === "PM" && hour !== 12) hour += 12;
        if (period === "AM" && hour === 12) hour = 0;

        return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsDisabled(true);

            // Simulate email submission or any other process
            const response = await fetch("../api/booking", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            setResponseMessage(data?.message || "Form submitted successfully!");

            // Update Firestore after successful submission
            await updateFirestore();
        } catch (error) {
            setResponseMessage(error.message || "Something went wrong!");
        } finally {
            setIsDisabled(false);
            window.location.reload();
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center bg-gradient-to-b from-stone-700 via-slate-700 to-zinc-700">
                <form
                    className="bg-gradient-to-br from-zinc-600 via-slate-600 to-stone-600 p-6 rounded-2xl shadow-lg w-[70%] mt-24 mb-20"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-200">Book an Appointment</h2>

                    <label className="block mb-2 font-semibold text-gray-300" htmlFor="name">Full Name</label>
                    <input
                        className="w-full p-2 mb-4 border-2 border-slate-700 shadow-lg rounded-lg bg-slate-600 text-gray-300"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 font-semibold text-gray-300" htmlFor="number">Phone Number</label>
                    <input
                        className="w-full p-2 mb-4 border-2 border-slate-700 shadow-lg rounded-lg bg-slate-600 text-gray-300"
                        type="text"
                        id="number"
                        name="number"
                        placeholder="Enter Your Number..."
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 font-semibold text-gray-300" htmlFor="useremail">Email</label>
                    <input
                        className="w-full p-2 mb-4 border-2 border-slate-700 shadow-lg rounded-lg bg-slate-600 text-gray-300"
                        type="email"
                        id="useremail"
                        name="useremail"
                        placeholder="Enter Your Email..."
                        value={formData.useremail}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 font-semibold text-gray-300" htmlFor="date">Date</label>
                    <input
                        className="w-full p-2 mb-4 border-2 border-slate-700 shadow-lg rounded-lg bg-slate-600 text-gray-300"
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 font-semibold text-gray-300" htmlFor="time">Time</label>
                    <select
                        className="w-full p-2 mb-4 border-2 border-slate-700 shadow-lg rounded-lg bg-slate-600 text-gray-300"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    >
                    <option value="">Select a time</option>
                    {availableSlots.length === 0 ? (
                        <option disabled>No available slots</option>
                    ) : (
                        availableSlots
                            .map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))
                    )}
                    </select>

                    <label className="block mb-2 font-semibold text-gray-300" htmlFor="service">Service</label>
                    <select
                        className="w-full p-2 mb-4 border-2 border-slate-700 shadow-lg rounded-lg bg-slate-600 text-gray-300 focus:bg-slate-700"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select A Service</option>
                        <option value="tooth-color-filling">Tooth Color Filling</option>
                        <option value="root-canal-treatment">Root Canal Treatment</option>
                        <option value="crown-and-bridges">Crown & Bridges</option>
                        <option value="Braces-and-aligners">Braces & Aligners</option>
                        <option value="dentures">Dentures</option>
                        <option value="implants">Implants</option>
                        <option value="teeth-whitening">Teeth Whitening</option>
                        <option value="other">Others</option>
                    </select>

                    <label className="block mb-2 font-semibold text-gray-300" htmlFor="notes">Additional Notes</label>
                    <textarea
                        className="w-full p-2 mb-4 border-2 border-slate-700 shadow-lg rounded-lg bg-slate-600 text-gray-300"
                        id="notes"
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                    ></textarea>

                    {!isDisabled && (
                    <input
                        className="bg-blue-500 text-white w-full rounded-xl p-2 hover:bg-gray-300 hover:text-blue-500 hover:border-black hover:font-bold font-bold drop-shadow-2xl"
                        type="submit"
                        value="Send Email"
                        disabled={isDisabled}
                    />
                    )}
                    {isDisabled && (
                    <div role="status" className="flex justify-center">
                        <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 9C26.8046 9 9 26.8046 9 50C9 73.1954 26.8046 91 50 91C73.1954 91 91 73.1954 91 50C91 26.8046 73.1954 9 50 9Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5531C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.723 75.2124 7.41289C69.5422 4.10274 63.2754 1.94025 56.7688 1.05125C51.7669 0.367373 46.6976 0.446778 41.7345 1.27834C39.2603 1.69453 37.8331 4.19808 38.4702 6.62354C39.1074 9.049 41.6012 10.4718 44.0979 10.1077C47.8753 9.55664 51.7139 9.55664 55.4913 10.1077C60.9023 10.9091 66.0891 12.9855 70.7896 16.1991C75.4902 19.4126 79.6341 23.7131 82.9424 28.841C85.4553 32.641 87.3929 36.847 88.6919 41.3176C89.4267 43.8036 91.5422 45.2421 93.9676 44.6049Z"
                            fill="currentFill"
                        />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                    )}
                </form>
            </div>
            {/* Full-Screen Alert */}
            {responseMessage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-slate-600 text-black p-6 rounded-lg shadow-lg text-center w-[90%]">
                        <p className="text-gray-200">{responseMessage}</p>
                        <button
                        onClick={() => setResponseMessage("")}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                        >
                        Close
                        </button>
                    </div>
                </div>
            )}
            <Footer />
            <style jsx>{`
                input[type="date"]::-webkit-calendar-picker-indicator {
                    filter: invert(80%) sepia(20%) saturate(200%) hue-rotate(180deg);
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}
