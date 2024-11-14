import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-white text-center px-4 md:px-0">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Welcome to Klajdi Taxi
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-2xl">
      Experience the best taxi service in Tirana with our fleet of
      well-maintained cars and professional drivers.
    </p>
    <Link
      to="/booking"
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg md:text-xl"
    >
      Book a Taxi
    </Link>
  </div>
);

export default Home;
