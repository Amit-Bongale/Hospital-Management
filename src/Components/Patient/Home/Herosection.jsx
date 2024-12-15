import React from "react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import Navigation module styles
import "swiper/css/pagination"; // Import Pagination module styles
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Pagination } from "swiper/modules"; // Import necessary Swiper modules

import { Link } from "react-router-dom";

import hero1 from "../../../Assets/Images/waiting room copy.jpg";
import hero3 from "../../../Assets/Images/operation coopy.jpg";
import hero2 from "../../../Assets/Images/doctor copy.jpg";

function Herosection() {
  return (
    <div>
      <section className="relative w-full h-screen">
        <Swiper
          modules={[Navigation, Pagination]} // Include necessary modules
          loop={true} // Enable infinite loop
          pagination={{ clickable: true }} // Enable pagination dots
          navigation={true} // Enable navigation buttons
          slidesPerView={1} // Show one slide at a time
          className="swiper-container w-full h-full"
        >
          <SwiperSlide>
            <div>
              <div className="absolute text-white text-center top-40 left-96">
                <div className="">
                  <h1 className="text-9xl"> Your Health,</h1>
                  <h1 className="text-9xl"> Our Priority</h1>
                </div>
                <Link to="user/appointmentbooking">
                  <button className="bg-blue-600 py-4 px-8 rounded-lg m-8">
                    Book Appointment
                  </button>
                </Link>
              </div>
              <img
                src={hero1}
                className="w-auto h-auto object-cover"
                alt="Slide 1"
              />
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div>
              <div className="absolute text-white w-full ">
                {/* <Link to="user/appointmentbooking">
                  <button className="bg-blue-600 py-4 px-8 rounded-lg m-8">
                    Book Appointment
                  </button>
                </Link> */}
                <div className="">
                  <h1 className="text-9xl absolute left-10 w-full top-96  ">
                    Bringing Care
                  </h1>
                  <h1 className="text-9xl absolute left-[600px] w-full top-[500px]">
                    Closer to You
                  </h1>
                </div>
              </div>
              <img
                src={hero2}
                className="w-auto h-auto object-cover"
                alt="Slide 2"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="absolute text-white text-center top-44">
                <h1 className="text-9xl ">
                  Advancing Health for Everyone, Every Day
                </h1>
                <Link to="user/appointmentbooking">
                  <button className="bg-blue-600  py-4 px-8 rounded-lg m-8">
                    Book Appointment
                  </button>
                </Link>
              </div>
              <img
                src={hero3}
                className="w-auto h-auto object-cover"
                alt="Slide 3"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
    </div>
  );
}

export default Herosection;
