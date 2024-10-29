import React from "react";

function AboutHospital() {
  return (
    <div>

      {/* <h1 class="text-6xl mt-10 font-bold text-gray-900 m-4 ml-48 text-center">
        About Our Hospital
      </h1> */}

      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
             Most Advanced and Coordinated Care
            </h2>
            <p class="mb-4">
            A hospital is an institution specifically designed, staffed, and equipped to offer comprehensive care for individuals suffering from illness, injury, or other health conditions. This includes both the diagnosis and treatment of diseases through a combination of medical, surgical, and therapeutic interventions. 
            </p>
            <p>
            Hospitals serve as a key component of healthcare systems, providing inpatient care where patients can be housed during their treatment and recovery.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"
              alt="hospital 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://avekshahospital.com/wp-content/uploads/2022/04/Building-Hero-1.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHospital;
