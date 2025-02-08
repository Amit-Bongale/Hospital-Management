import React from "react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import Navigation module styles
import "swiper/css/pagination"; // Import Pagination module styles
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import necessary Swiper modules

import { Link } from "react-router-dom";

import hero1 from "../../../Assets/Images/waiting room copy.jpg";
import hero3 from "../../../Assets/Images/operation coopy.jpg";
import hero2 from "../../../Assets/Images/doctor copy.jpg";

function Herosection() {
  return (
    <div
      className="w-full h-[70vh] md:h-[80vh] lg:h-screen"
      style={{ minHeight: "400px" }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        style={{ height: "100%" }}
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={hero1}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl  mb-4 whitespace-nowrap">
                  Your Health,
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl  mb-8 whitespace-nowrap">
                  Our Priority
                </h1>
                <Link to="user/appointmentbooking">
                  <button className="bg-blue-600 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={hero2}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Slide 2"
            />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex flex-col justify-center  md:p-4 top-56">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-white md:mb-4 whitespace-nowrap">
                  Bringing Care
                </h1>
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-white whitespace-nowrap md:ml-[30%] lg:ml-[40%]">
                  Closer to You
                </h1>
                <Link
                  to="user/appointmentbooking"
                  className="block mt-2 lg:hidden md:hidden"
                >
                  <button className="bg-blue-600 py-2 px-4 md:py-3 md:px-6 md:text-sm sm:text-sm text-white rounded-lg hover:bg-blue-700 transition-colors mt-2 mb-4">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={hero3}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Slide 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <div className="text-center max-w-[95%] md:max-w-[90%] lg:max-w-[80%]">
                <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl  mb-8">
                  Advancing Health for Everyone, Every Day
                </h1>
                <Link to="user/appointmentbooking">
                  <button className="bg-blue-600 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style>{`
        .swiper {
          height: 100% !important;
        }
        
        .swiper-slide {
          height: 100% !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transform: translateY(-50%);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          
          .swiper-pagination {
            bottom: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Herosection;
