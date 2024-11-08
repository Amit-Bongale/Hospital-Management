import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { doctorlogin } from "../../Redux/Doctor/Doctor";

import { useState } from "react";

function Doctorlogin() {

  const dispatch = useDispatch();

  let [id, setid] = useState();
  let [password, setpassword] = useState();

    function Send(e) {
        
        e.preventDefault();

        let data = {
            'id': id,
            'password': password,
        };

        try {
            fetch(`${process.env.REACT_APP_API_URL}/doctor/login`, {
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
                if (data.success) {
                    console.log('User Info:', data.user);
                    dispatch(doctorlogin({ doctorid : data.user.id }));
                    window.location.href = "/doctor/dashboard";
                }
                console.log(data);
            })
            .catch((error) => console.log("Fetching Error:", error));
        } catch (error) {
            console.log("error :", error);
        }
    }

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Hello Doc!
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={Send}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your ID
                  </label>

                  <input
                    type="text"
                    name="id"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ID"
                    required
                    onChange={(e) => setid(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                
                <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-3 text-center mt-6 "
                >
                Log in
                </button>
           

                <Link to={"/chooserole"}>
                  <button
                    type="submit"
                    class="w-full text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-3 text-center mt-6 "
                  >
                    Back to Home
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctorlogin;