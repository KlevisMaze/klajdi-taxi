import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    start: "",
    destination: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    const whatsappLink = `https://wa.me/355123456789?text=${encodeURIComponent(
      `Booking: Name: ${formData.name}, Phone: ${formData.phone}, Start: ${formData.start}, Destination: ${formData.destination}`
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Book a Taxi
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="start"
          placeholder="Start Location"
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          Book Now via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Booking;
