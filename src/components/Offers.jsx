import React from "react";

const offers = [
  {
    id: 1,
    name: "Airport Transfer",
    image: "/images/airport.jpg",
    price: "$25",
  },
  { id: 2, name: "City Tour", image: "/images/city-tour.jpg", price: "$30" },
  {
    id: 3,
    name: "Hourly Rental",
    image: "/images/hourly.jpg",
    price: "$15/hr",
  },
];

const Offers = () => (
  <div className="p-8 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Offers</h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer) => (
        <div key={offer.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src={offer.image}
            alt={offer.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
          <p className="text-lg text-blue-600 font-bold">{offer.price}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Offers;
