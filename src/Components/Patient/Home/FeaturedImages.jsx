import React from 'react'

function FeaturedImages() {
  return (
    <div>
        <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Best Medical Service That all can Trust.
          </h2>
          <p className="text-md text-justify md:text-lg text-gray-600 mb-10">
          At Our Hospital, we don’t just provide healthcare; we build trust. Our hospital is more than a place of treatment—it’s a center for healing, education, and community care. Every patient we serve becomes a part of our extended family, and we are committed to ensuring their journey toward wellness is supported every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 max-w-6xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1619975101891-8dc1c752aece?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxob3NwaXRhbHxlbnwwfHwwfHx8MA%3D%3D "
            alt="Teamwork"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://velammalmedicalcollege.edu.in/wp-content/uploads/2021/07/DSC06932.jpg "
            alt="Coworking"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://www.virohan.com/_next/image?url=https%3A%2F%2Fmedia-cms.virohan.com%2Fstaging%2FHA_Course_141e21778e.jpg&w=2048&q=75"
            alt="Office"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://www.bcmch.org/asset/uploads/common/1743362111655450263c1d3.webp"
            alt="Creative Team"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah_m.webp"
            alt="Workplace"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://sgrh.com/assets/img/uploads/event-small-default.jpg"
            alt="Team Meeting"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </div>
  )
}

export default FeaturedImages