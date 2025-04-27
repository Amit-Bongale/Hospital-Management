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
            credentials: "include",
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

    return (
        <div className="bg-blue-500 text-white mt-10 px-4 md:px-8 lg:px-10 py-8 md:py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Hospital Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">City General</h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Hospital</h1>
              </div>
    
              <div className="text-base md:text-lg space-y-3">
                <div>
                  <p>Address: STJIT, Ranebennur</p>
                </div>
                <div>
                  <p>Call Us: 9672574287</p>
                </div>
                <div>
                  <p>Email: hsptlmgmt@gmail.com</p>
                </div>
              </div>
            </div>
    
            {/* Quick Links */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Quick Links</h1>
              <div className="flex flex-col gap-4 text-base md:text-lg">
                <Link>
                  <button onClick={scrollToTop} className="hover:text-blue-200 transition-colors hover:underline">
                    Home
                  </button>
                </Link>
                
                <Link to="user/appointmentbooking">
                  <button className="hover:text-blue-200 transition-colors hover:underline">
                    Appointment
                  </button>
                </Link>
    
                {IsLoggedin ? (
                  <Link to="/user/details">
                    <button className="hover:text-blue-200 transition-colors hover:underline">
                      Account
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="hover:text-blue-200 transition-colors hover:underline">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
    
            {/* Contact Form */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left">Contact Us</h1>
              <form onSubmit={Send} className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="px-3 py-2 md:py-3 rounded text-black w-full"
                  required
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="px-3 py-2 md:py-3 rounded text-black w-full"
                  required
                  onChange={(e) => setemail(e.target.value)}
                />
                <textarea
                  name="message"
                  placeholder="Leave Your Message"
                  className="px-3 py-2 rounded text-black resize-none h-24 w-full"
                  required
                  onChange={(e) => setmessage(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-white text-blue-500 py-2 md:py-3 rounded font-semibold hover:bg-blue-100 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
    );

}
export default Footersection;