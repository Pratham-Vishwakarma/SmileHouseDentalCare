"use client";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    useremail: "",
    phoneNumber: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    let timeout;
    if (responseMessage) {
      timeout = setTimeout(() => setResponseMessage(""), 3000); // Hide after 3 seconds
    }
    return () => clearTimeout(timeout);
  }, [responseMessage]);

  const setChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("FormData:", formData);
    try {
      setIsDisabled(true);
      const response = await fetch("../api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResponseMessage(data?.message || "Form submitted successfully!");
    } catch (error) {
      setResponseMessage(error.message || "Something went wrong!");
    } finally {
      setIsDisabled(false);
      window.location.reload();
    }
  };

  return (
    <>
      <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
      <form
        className="mt-4 space-y-3 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-300 font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name..."
            value={formData.name}
            onChange={setChange}
            required
            className="w-full px-4 py-2 bg-slate-500 text-white rounded-lg"
          />
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="useremail" className="text-gray-300 font-medium">
            Your Email
          </label>
          <input
            type="email"
            name="useremail"
            placeholder="Enter Your Email..."
            value={formData.useremail}
            onChange={setChange}
            required
            className="w-full px-4 py-2 bg-slate-500 text-white rounded-lg"
          />
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="phoneNumber" className="text-gray-300 font-medium">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter Your Phone Number..."
            value={formData.phoneNumber}
            onChange={setChange}
            required
            className="w-full px-4 py-2 bg-slate-500 text-white rounded-lg"
          />
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="message" className="text-gray-300 font-medium">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter Your Message..."
            value={formData.message}
            onChange={setChange}
            required
            className="w-full px-4 py-3 bg-slate-500 text-white rounded-lg mb-2"
          />
        </div>

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

      {/* Full-Screen Alert */}
      {responseMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center w-[90%]">
            <p>{responseMessage}</p>
            <button
              onClick={() => setResponseMessage("")}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
