import React from "react";
import hospitalimg1 from "../../../Assets/Images/hospital building 1.jpg";
import hospitalimg2 from "../../../Assets/Images/hospital building 2.png";



function AboutHospital() {
  return (
    <div>

      {/* <h1 class="text-6xl mt-10 font-bold text-gray-900 m-4 ml-48 text-center">
        About Our Hospital
      </h1> */}

      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 md:text-4xl text-2xl tracking-tight font-bold text-gray-900 text-center md:text-left dark:text-white">
             Most Advanced and Coordinated Care
            </h2>
            <p class="mb-4 text-justify" >
             At or Hospital, we pride ourselves on delivering advanced and seamless healthcare services designed to meet the diverse needs of our patients. With cutting-edge technology and a patient-first approach, we ensure that every individual receives the highest quality of care. 
            </p>
            <p className="hidden md:block">
             Whether it's routine check-ups or complex surgeries, our team of experts is here to guide you every step of the way. We provide a safe, comfortable, and healing environment where patients can focus on recovery with confidence.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src={hospitalimg1}
              alt="office content 2"
            />
            <img
              class="w-full rounded-lg"
              src={hospitalimg2}
              alt="hospital 1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHospital;
