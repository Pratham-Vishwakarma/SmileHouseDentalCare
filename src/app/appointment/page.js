"use client";
import { useState } from "react";
import { format } from "date-fns";
import Navbar from "../components/Navbar";

export default function Page() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    "09:00 AM - 09:30 AM",
    "09:30 AM - 10:00 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "01:00 PM - 01:30 PM",
    "02:00 PM - 02:30 PM",
    "03:00 PM - 03:30 PM",
    "04:00 PM - 04:30 PM",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!selectedDate || !selectedTimeSlot) {
      alert("Please select a date and a time slot.");
      setIsSubmitting(false);
      return;
    }

    const formattedDate = format(new Date(selectedDate), "yyyy-MM-dd");
    const appointment = { date: formattedDate, timeSlot: selectedTimeSlot };

    try {
        const response = await fetch("/api/appointment", { // Use absolute path
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(appointment),
          });          

      if (response.ok) {
        setSuccessMessage(
          `Your appointment is booked for ${formattedDate} at ${selectedTimeSlot}!`
        );
        setSelectedDate("");
        setSelectedTimeSlot("");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-b from-stone-600 via-slate-600 to-zinc-600 min-h-screen flex items-center justify-center p-6">
        <div className="bg-gradient-to-b from-zinc-500 via-slate-500 to-stone-500 rounded-lg drop-shadow-2xl w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-100 mb-4">
            Book an Appointment
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-300"
              >
                Select Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="time-slot"
                className="block text-sm font-medium text-gray-300"
              >
                Available Time Slots
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`py-2 px-3 rounded-md text-sm font-medium ${
                      selectedTimeSlot === slot
                        ? "bg-indigo-500 text-white"
                        : "bg-slate-800 text-gray-300 hover:bg-indigo-500 hover:text-white"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-md py-2 px-4 text-white ${
                isSubmitting ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isSubmitting ? "Booking..." : "Confirm Appointment"}
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-green-300 text-sm text-center">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
