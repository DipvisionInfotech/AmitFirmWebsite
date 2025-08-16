import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css"; // custom styles

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This service exceeded my expectations in delivering outstanding results.",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Manager, BrightAds",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "A great experience from start to end. Highly recommend quality and reliability.",
  },
  {
    name: "Michael Johnson",
    role: "Founder, StartUpX",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "The support team went above and beyond to ensure our satisfaction.",
  },
  {
    name: "Emily Davis",
    role: "Product Designer, Creatives Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The quality of work was exceptional. The team was friendly and easy to communicate with.",
  },
  {
    name: "David Miller",
    role: "CTO, InnovateNow",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    text: "Reliable, efficient, and creative — exactly what we were looking for in a partner.",
  },
  {
    name: "Olivia Brown",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    text: "From concept to execution, everything was handled perfectly. I’m beyond impressed.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-6 px-2 md:px-8 lg:px-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real stories from people who have worked with us
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg p-1 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 h-full mb-12">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
