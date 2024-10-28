import React from 'react'


function AboutHospital() {
  return (
    <div>
        <div className="mt-14">
          <h1 class="text-6xl font-bold text-gray-900 m-4 ml-48">About Hospital</h1>
        </div>
        <div className="flex flex-nowrap">
          <div class="text-justify mr-40">
            <h1 class="text-xl ml-28 mt-8 font-medium">A hospital is an institution specifically designed, staffed, and equipped to offer comprehensive care for individuals suffering from illness, injury, or other health conditions. This includes both the diagnosis and treatment of diseases through a combination of medical, surgical, and therapeutic interventions. Hospitals serve as a key component of healthcare systems, providing inpatient care where patients can be housed during their treatment and recovery.In modern healthcare systems, hospitals have evolved beyond just treating the sick and injured. Many are equipped with advanced technology for medical imaging, laboratory tests, and surgeries, facilitating accurate diagnoses and effective treatments. They often encompass specialized departments such as emergency rooms, intensive care units (ICUs), surgical theaters, maternity wards, and oncology units, among others.</h1>
          </div>
          <div class="mr-32">
            <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt='' class="max-w-sm h- shadow-md shadow-slate-500" />
          </div>
        </div>
        <div className="flex flex-nowrap">
          <div class="text-justify mr-40">
            <h1 class="text-xl ml-28 mt-8 font-medium">Additionally, modern hospitals frequently serve as hubs for medical research and education. They collaborate with academic institutions to train future healthcare professionals, including doctors, nurses, and medical technicians, through residency programs, internships, and continuous medical education programs. This research and education component is essential for advancing medical knowledge, developing new treatments, and improving healthcare practices.
            Hospitals may also offer outpatient services, such as consultation, diagnostic tests, minor surgeries, and rehabilitation programs, enabling patients to receive care without the need for overnight stays. In many regions, hospitals have expanded their roles to address public health issues, community outreach, and preventative care programs.
            Overall, hospitals are central to the delivery of healthcare, playing a multifaceted role in providing immediate medical care, supporting medical education, fostering innovation in treatment methods, and contributing to the broader public health ecosystem.</h1>
          </div>
          <div class="flex items-center mt-2.5 mb-2 ">
            <div class="flex flex-wrap">
              <div class="ml-28 mr-16 flex">
                <div>
                  <div class="mr-2">
                    <img src="https://images.unsplash.com/photo-1619975101891-8dc1c752aece?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxob3NwaXRhbHxlbnwwfHwwfHx8MA%3D%3D " alt='' class="max-w-sm h-72 w-96 shadow-md shadow-slate-500" />
                  </div>
                  <div class="mr-2 mt-2">
                    <img src="https://velammalmedicalcollege.edu.in/wp-content/uploads/2021/07/DSC06932.jpg " alt='' class="max-w-sm h-72 w-96 shadow-md shadow-slate-500" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' class="max-w-sm  shadow-md shadow-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutHospital