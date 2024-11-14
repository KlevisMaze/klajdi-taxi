import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const About = () => {
  const cars = [
    { id: 1, name: "Sedan", image: "/images/sedan.jpg" },
    { id: 2, name: "SUV", image: "/images/suv.jpg" },
    { id: 3, name: "Luxury", image: "/images/luxury.jpg" },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Klajdi Taxi</h2>
      <p className="mb-6 text-lg md:text-xl">
        Klajdi Taxi offers a premium fleet of well-maintained vehicles including
        sedans, SUVs, and luxury cars.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-60 object-cover rounded-lg"
            />
            <p className="text-lg mt-2">{car.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default About;
