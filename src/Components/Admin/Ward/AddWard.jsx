import React, { useState } from "react";
import Loader from "../Loader/Loader";

function AddWard({ setisopen }) {
  let [wardnumber, setwardnumber] = useState();
  let [wardtype, setwardtype] = useState();
  let [betnumber, setbednumber] = useState();
  let [loader, setloader] = useState(false);

  function Send(){

    setloader(true)

    let data = {
      "wardnumber": wardnumber,
      "type": wardtype,
      "bednumber": betnumber,
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/ward/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: 'include',
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

    setloader(false)
    
  }

  return (
    <div>
      <div className="w-[100vw] h-full absolute top-0 left-0 flex justify-center items-center  ">
        <div className=" bg-white w-[55%] h-[70%] py-6 px-8 z-20  border-2 shadow-xl rounded-3xl">
          {loader ? <Loader /> : <></>}
          <h2 className="text-2xl font-bold py-2 mb-5 ">Add Ward</h2>

          <form onSubmit={Send}>
            <div className="grid gap-6 mb-5">
              <div>
                <label
                  for="id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ward Number
                </label>
                <input
                  type="text"
                  id="id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ward number"
                  required
                  onChange={(val) => setwardnumber(val.target.value)}
                />
              </div>
              <div>
                <label
                  for="type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ward Types
                </label>
                <input
                  type="text"
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ward Type"
                  required
                  onChange={(val) => setwardtype(val.target.value)}
                />
              </div>

              <div>
                <label
                  for="bednumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bed Number
                </label>
                <input
                  type="text"
                  id="bednumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bed No"
                  required
                  onChange={(val) => setbednumber(val.target.value)}
                />
              </div>

              <div className="mt-1">
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
              </div>
            </div>
          </form>
        </div>
        <div
          className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
          onClick={() => setisopen(false)}
        ></div>
      </div>
    </div>
  );
}

export default AddWard;
