import React from "react";
import { useState } from "react";

function ContactUs() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [message, setmessage] = useState("");

  function Send() {
    let data = {
      name: name,
      email: email,
      message: message,
    };

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
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900 px-4 py-8 md:py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-black-600 text-center md:mb-2">
          Contact Us
        </h2>
        <p className="text-sm md:text-xl font-medium text-center text-black-700 mb-6">
          We are here to help
        </p>
  
        <form onSubmit={Send} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full max-w-lg rounded border border-blue-400 text-sm font-normal leading-[18px] text-black-600 appearance-none block p-4"
              placeholder="Enter your Name"
              required
              onChange={(e) => setname(e.target.value)}
            />
          </div>
  
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full max-w-lg rounded border border-blue-400 text-sm font-normal leading-[18px] text-black-600 appearance-none block p-4"
              placeholder="name@google.com"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
  
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full max-w-lg rounded border border-blue-400 text-sm font-normal leading-[18px] text-black-500 appearance-none block p-4"
              placeholder="Leave your message..."
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-lg md:text-xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
  
}
export default ContactUs;
