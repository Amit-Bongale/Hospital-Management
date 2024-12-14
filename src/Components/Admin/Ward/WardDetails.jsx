import React from "react";
import { useState, useEffect } from "react";

import EditWard from "./EditWard";
import DeleteWard from "./DeleteWard";

function WardDetails() {
  let [edit, setedit] = useState(false);
  let [deleteitem, setdelete] = useState(false);

  let [warddetails, setwarddetails] = useState([]);
  let [wardid , setwardid] = useState()

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/ward/details`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setwarddetails(data))
        .catch((err) => console.log("Error Fetching Data :", err));
    } catch (error) {
      console.log("Error :", error);
    }
  }, [edit, deleteitem]);

  return (
    <div>
      {edit ? <EditWard setisopen={setedit} wardid={wardid} /> : <></>}
        {deleteitem ? (
          <DeleteWard setisopen={setdelete} wardid={wardid} />
        ) : (
          <></>
        )}
      <div className="w-full  absolute p-4 m-[-20px]">
        

        <h1 className="font-bold text-xl p-4">Ward Details</h1>

        <div class="relative overflow-x-auto  sm:rounded-lg">
          <table class=" table-auto shadow-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Ward Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Ward Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Bed Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3"> 
                  <span class="sr-only"> Edit </span>
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only"> Delete </span>
                </th>
              </tr>
            </thead>

            {warddetails.map((ward) => (
              <tbody>
                <tr class="bg-white border-b font-medium text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4"> {ward.wardnumber}</td>
                  <td class="px-6 py-4"> {ward.type} </td>
                  <td class="px-6 py-4"> {ward.bednumber} </td>
                  <td class="px-6 py-4">
                    {ward.status ? (
                      <span className="bg-green-700 py-2 px-6 text-white rounded-2xl">
                        {ward.status}
                      </span>
                    ) : (
                      <span className="bg-red-700 py-2 px-6 text-white rounded-2xl">
                        {" "}
                        Inactive{" "}
                      </span>
                    )}
                  </td>

                  <td class="px-6 py-4 text-right">
                    <button
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                        setedit(true);
                        setwardid(ward._id);
                      }}
                    >
                      Edit
                    </button>
                  </td>

                  <td class="px-6 py-4 text-right">
                    <button
                      class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                        setdelete(true);
                        setwardid(ward._id);
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default WardDetails;
