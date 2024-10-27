import React from "react";
import { useState, useEffect } from "react";

function EditDoctor({ setisopen, doctorid }) {
  let [id, setid] = useState("");
  let [name, setname] = useState("");
  let [gender, setgender] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [specialization, setspecialization] = useState("");
  let [phone, setphone] = useState("");
  let [experience, setexperience] = useState("");
  let [dob, setdob] = useState("");

  useEffect(() => {

    if (!doctorid) return;

    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/finddoctor/${doctorid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setid(data.id);
          setname(data.name);
          setgender(data.gender);
          setemail(data.email);
          setpassword(data.password);
          setspecialization(data.specialization);
          setphone(data.phone);
          setexperience(data.experience);
          setdob(data.dob);

          console.log(data);
        })
        .catch((err) => console.log("Error Fetching Data :", err));
    } catch (error) {
      console.log("Error :", error);
    }
  }, [doctorid]);

  function update() {
    let data = {
      'id': id,
      'name': name,
      'gender': gender,
      'email': email,
      'password': password,
      'specialization': specialization,
      'phone': phone,
      'experience': experience,
      'dob': dob,
    };

    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/updatedoctor/${doctorid}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }

  return (
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center">
      <div className=" bg-white w-[55%] h-[95%] py-6 px-8 z-20 border-2 shadow-xl rounded-3xl">
        <h2 className="text-2xl font-bold py-2 mb-5 ">Edit Doctor Details</h2>
        <form onSubmit={() => update()}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name"
                required
                Value={name}
                onChange={(val) => setname(val.target.value)}
              />
            </div>
            <div>
              <label
                for="gendere"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                gender
              </label>
              <select
                name="gender"
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={gender}
                onChange={(val) => setgender(val.target.value)}
              >
                <option value="" key=""> </option>
                <option value="Male" key="Male"> Male </option>
                <option value="Female" key="Female"> Female </option>
                <option value="Others" key="Others"> Others </option>
              </select>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xyz@gmail.com"
                required
                defaultValue={email}
                onChange={(val) => setemail(val.target.value)}
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{10}"
                required
                defaultValue={phone}
                onChange={(val) => setphone(val.target.value)}
              />
            </div>
            <div>
              <label
                for="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Specialization
              </label>
              <input
                type="text"
                id="specialization"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Specialization"
                required
                defaultValue={specialization}
                onChange={(val) => setspecialization(val.target.value)}
              />
            </div>
            <div>
              <label
                for="experience"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Experience
              </label>
              <input
                type="number"
                id="experience"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Years of experience"
                required
                defaultValue={experience}
                onChange={(val) => setexperience(val.target.value)}
              />
            </div>
            <div>
              <label
                for="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                defaultValue={dob ? dob.split("T")[0] : ""}
                onChange={(val) => setdob(val.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
              defaultValue={password}
              onChange={(val) => setpassword(val.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <button
            onClick={() => setisopen(false)}
            className="ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            close
          </button>
        </form>
      </div>
      <div
        className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
        onClick={() => setisopen(false)}
      ></div>
    </div>
  );
}

export default EditDoctor;
