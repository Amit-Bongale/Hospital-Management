import React from 'react'
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation module styles
import 'swiper/css/pagination'; // Import Pagination module styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules'; // Import necessary Swiper modules

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
                    <img
                        src="https://thumbs.dreamstime.com/b/big-build-note-hospital-big-build-note-hospital-d-illustration-101484001.jpg"
                        className="w-full h-full object-cover"
                        alt="Slide 1"
                    />
                 
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://img.freepik.com/premium-photo/hospital-building-with-white-walls-red-cross-modern-building-white-with-red-cross_483949-29966.jpg"
                        className="w-full h-full object-cover"
                        alt="Slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://thehospitallocation.co.uk/wp-content/uploads/2022/06/IMG_8854-1024x768.webp" 
                        className="w-full h-full object-cover"
                        alt="Slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
      {/* <div class="flex items-center mt-2.5 mb-2 ">
        <div class="flex flex-wrap p-1 m-1.5">
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow s ml-3 mr-3">
            <img src="https://thumbs.dreamstime.com/b/big-build-note-hospital-big-build-note-hospital-d-illustration-101484001.jpg" alt="" />
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow s ml-3 mr-3">
            <img src="https://img.freepik.com/premium-photo/hospital-building-with-white-walls-red-cross-modern-building-white-with-red-cross_483949-29966.jpg" alt="" />
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow s ml-3 mr-3">
            <img src="https://thehospitallocation.co.uk/wp-content/uploads/2022/06/IMG_8854-1024x768.webp" alt="" />
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow s ml-3 mr-3">
            <img src="https://img.lovepik.com/photo/40177/1395.jpg_wh300.jpg" alt="" />
          </div>
        </div>
      </div> */}
    </div>



  )
}

export default Herosection;