import React from "react";
import { useState } from "react";

function AddSalary({ setisopen }) {
  let [id, setid] = useState("");
  let [name, setname] = useState("");
  let [type, settype] = useState("");
  let [salary, setsalary] = useState("");
  let [month, setmonth] = useState("");
  let [status, setstatus] = useState("");
 

  function Send() {
    
    let data = {
        'employeeid' : id,
        'name' : name,
        'employeetype' : type,
        'salary' : salary,
        'month' : month,
        'status' : status
    };

    try {
      fetch(`${process.env.REACT_APP_API_URL}/salary/addsalary`, {
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
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20  border-2 shadow-xl rounded-3xl">
        <h2 className="text-2xl font-bold py-2 mb-5 ">
          Add Employee Salary Details
        </h2>
        <form onSubmit={() => Send()}>
          <div className="grid gap-6 mb-5  md:grid-cols-2">
            <div>
              <label
                for="id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Employee Id
              </label>
              <input
                type="text"
                id="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Doctor Id"
                required
                onChange={(val) => setid(val.target.value)}
              />
            </div>
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
                placeholder="Enter Doctor Name"
                required
                onChange={(val) => setname(val.target.value)}
              />
            </div>
            <div>
              <label
                for="gendere"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type
              </label>
              <select
                name="gender"
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="gender"
                required
                onChange={(val) => settype(val.target.value)}
              >
                <option value=""></option>
                <option value="Doctor">Doctor</option>
                <option value="Staff">staff</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label
                for="salary"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Salary
              </label>
              <input
                type="text"
                id="salary"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="salary Amount"
                required
                onChange={(val) => setsalary(val.target.value)}
              />
            </div>
            <div>
              <label
                for="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="status"
                required
                onChange={(val) => setstatus(val.target.value)}
              >
                <option value=""></option>
                <option value="paid">Paid</option>
                <option value="not paid">Not Paid</option>
              </select>
            </div>
            <div>
              <label
                for="month"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                month
              </label>
              <input
                type="date"
                id="month"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="choose month"
                required
                onChange={(val) => setmonth(val.target.value)}
              />
            </div>
            
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

export default AddSalary;
