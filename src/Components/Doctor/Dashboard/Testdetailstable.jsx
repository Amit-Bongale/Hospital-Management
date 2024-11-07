import React from "react";
import { useEffect , useState } from "react";

function Testdetails() {
  // let [queueinfo,setqueueinfo] = useState()
  // let [view, setview] = useState(false);

  // useEffect(() => {
  //   try {
  //     fetch(`${process.env.REACT_APP_API_URL}/test/testdetails`, {
  //       method: "POST",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setqueueinfo(data);
  //         console.log(data);
  //       })
  //       .catch((error) => console.log("Fetching Error:", error));
  //   } catch (error) {
  //     console.log("error :", error);
  //   }
  // }, [view]);


    return(
        <div class="ml-4 ">
        <h1 className="font-bold text-xl p-4 text-center mt-10">Test Details</h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-auto table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> Patient Id </th>
              <th scope="col" class="px-6 py-3"> Staff Id </th>
              <th scope="col" class="px-6 py-3"> Doctor Id </th>
              <th scope="col" class="px-6 py-3"> Test Name </th>
              <th scope="col" class="px-6 py-3"> Result </th>
              
            </tr>
          </thead>

            <tbody>
              {/* {queueinfo.map((item, index) => ( */}
              <tr class="bg-white border-b font-medium text-sm text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                {/* <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> */}
                 {/* </td> */}
                <td class="px-6 py-4"> 1234 </td>
                <td class="px-6 py-4"> 5678 </td>
                <td class="px-6 py-4"> 1245 </td>
                <td class="px-6 py-4"> Blood Test </td>
                <td class="px-6 py-4"> Low wbc count </td>
                
              </tr>
              {/* //))} */}
            </tbody>
            
        </table>
      </div>

      
      

    </div>


    )
    
}

export default Testdetails