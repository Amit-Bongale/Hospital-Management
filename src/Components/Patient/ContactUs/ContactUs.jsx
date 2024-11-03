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
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="text-5xl font-bold mb-2 text-black-600 text-center">
          Contact Us
        </h2>
        <p class="text-xl font-medium mb-4 text-center text-black-700">
          We are here to help
        </p>

        <form onSubmit={Send} class="space-y-6 pl-16">
          <div>
            <label
              for="name"
              class="block mb-2 text-2xl font-bold text-gray-900 dark:text-gray-300"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              class="rounded border border-blue-400 text-sm  font-normal leading-[18px] text-black-600 appearance-none block h-15 w-[650px] m-0 p-4 focus:ring-2 ring-offset-2  ring-blue-200 outline-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter your Name"
              required
              onChange={(e) => setname(e.target.value)}
            ></input>
          </div>

          <div>
            <label
              for="email"
              class="block mb-2 text-2xl font-bold text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              class="rounded border border-blue-400 text-sm  font-normal leading-[18px] text-black-600 appearance-none block h-15 w-[650px] m-0 p-4 focus:ring-2 ring-offset-2  ring-blue-200 outline-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@google.com"
              required
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </div>

          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-2xl font-bold text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>

            <textarea
              id="message"
              rows="5"
              class="rounded border border-blue-400 text-sm  font-normal leading-[18px] text-black-500 appearance-none block h-15 w-[650px] m-0 p-[11px] focus:ring-2 ring-offset-2  ring-blue-200 outline-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave your message..."
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            class="py-3 ml-56 px-5 text-xl font-semibold text-center text-black-600 rounded-lg bg-blue-500 text-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default ContactUs;
