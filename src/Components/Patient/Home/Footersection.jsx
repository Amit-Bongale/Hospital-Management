import { Link } from "react-router-dom";

function Footersection() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };


    return(
        <div class="flex flex-wrap items-center justify-evenly bg-green text-black mt-10">

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl ml-28 mt-14 font-semibold">Hospital Management</h1>
                <div className="mt-10">
                    <div class="flex items-center ml-4 mt-2">
                       
                        <p class="ml-4 text-xl">Address: STJIT, Ranebennur</p>
                    </div>
                    <div class="flex items-center ml-4 m-2">
                        
                        <p class="ml-4 text-xl">Call Us: 9672574287</p>
                    </div>
                    <div class="flex items-center ml-4 m-2">
                        
                        <p class="ml-4 text-xl">Email: hsptlmgmt@gmail.com</p>
                    </div>
                </div>
                
            </div>

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl  mt-14 ml-20 font-semibold">Quick Links</h1>

                <button onClick={scrollToTop} class=" ml-28 pl-6 my-5 pt-3 text-2xl">Home</button>

                <Link to='/appointmentbooking'><p class="ml-28 pl-6 text-2xl ">Appointment</p></Link>

                <Link to='/loginform'><p class="ml-28 pl-6 my-4 text-2xl">Login</p></Link>

                <Link to='/contactusform'><p class="ml-28 pl-6 my-4 text-2xl">Contact Us</p></Link>
            
            </div>

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl pl-20 mt-14 font-semibold">About Hospital</h1>
                <div className="ml-20 mt-4">
                </div>
            </div>
            
        </div>
    )
}
export default Footersection;