import React from 'react'
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation module styles
import 'swiper/css/pagination'; // Import Pagination module styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules'; // Import necessary Swiper modules

import { Link } from 'react-router-dom';

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
                      <div className='absolute text-white text-center top-44'>
                        <h1 className='text-9xl '>Advancing Health for Everyone, Every Day</h1>
                        <Link to="user/appointmentbooking">
                          <button className='bg-blue-600  py-4 px-8 rounded-lg m-8'>Book Appointment</button>
                        </Link>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1579684288599-e6b7e7a940ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-auto h-auto object-cover"
                        alt="Slide 1"
                    />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1545225088-15d3178518e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-auto h-auto object-cover"
                        alt="Slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className="w-auto h-auto object-cover"
                        alt="Slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    </div>



  )
}

export default Herosection;