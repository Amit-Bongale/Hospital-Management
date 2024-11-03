import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


function Footersection() {

    const IsLoggedin = useSelector((state) => state.patient.loggedin)

    let [name , setname] = useState('')
    let [email , setemail] = useState('')
    let [message , setmessage] = useState('')

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

    function Send(e){

        // e.preventDefault()

        let data = {
          'name' : name,
          'email' : email,
          'message' : message
        }
    
        try {
          fetch(`${process.env.REACT_APP_API_URL}/contactus/request`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              console.log(data.message);
              alert(data.message);
            }
            console.log(data);
          })
          .catch((error) => console.log("Fetching Error:" , error));
        } catch (error) {
          console.log("error :", error);
        }
    }


    return(
        <div class="flex flex-wrap h-[450px] px-10 justify-between bg-blue-500 text-white mt-10">

            <div className="mt-12">
                <h1 class="text-5xl font-semibold text-wrap">Hospital</h1>
                <h1 class="text-5xl font-semibold text-wrap">Management</h1>

                <div className="text-xl flex flex-col gap-2 mt-6">
                    <div class="">
                        <p class="">Address: STJIT, Ranebennur</p>
                    </div>
                    <div class="">
                        
                        <p class="">Call Us: 9672574287</p>
                    </div>
                    <div class="">
                        
                        <p class="text-xl">Email: hsptlmgmt@gmail.com</p>
                    </div>
                </div>
                
            </div>

            <div className="mt-12">
                <h1 className="text-4xl font-semibold mb-6">Quick Links</h1>
                <div className="flex flex-col gap-4 text-xl">
                    <Link>
                        <button onClick={scrollToTop} className="hover:text-blue-200 transition-colors">
                            Home
                        </button>
                    </Link>
                    
                    <Link to="user/appointmentbooking">
                        <button className="hover:text-blue-200 transition-colors">
                            Appointment
                        </button>
                    </Link>

                    { IsLoggedin ? 
                        <Link to="/user/details">
                        <button className="mr-10"> Account </button>
                        </Link> :  <Link to="/login">
                        <button className="mr-10"> Login </button>
                        </Link>
                    }

                    {/* <Link to="contactusform">
                        <p className="hover:text-blue-200 transition-colors">Contact Us</p>
                    </Link> */}
                </div>
            </div>

            <div className="mt-12">
                <h1 className="text-4xl text-center font-semibold mb-6">Contact Us</h1>
                <form onSubmit={Send} className="flex flex-col gap-4 w-96">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="px-3 py-3 rounded text-black"
                        required
                        onChange={(e) => setname(e.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="px-3 py-3 rounded text-black"
                        required
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <textarea
                        name="message"
                        placeholder="Leave Your Message"
                        className="px-3 py-2 rounded text-black resize-none h-24"
                        required
                        onChange={(e) => setmessage(e.target.value)}
                    />
                    <button 
                        type="submit"
                        className="bg-white text-blue-500 py-3 rounded font-semibold hover:bg-blue-100 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            
        </div>
    )
}
export default Footersection;