import React from 'react'
import { useState } from 'react'

function Addimgae() {

    let [image , setimage] = useState(null)
    let [imgurl , setimgurl] = useState('')

    function Send(){

        console.log(image)


        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'hospital_management');
        formData.append('cloud_name', 'ddrmpskla');

        try {
            fetch(`https://api.cloudinary.com/v1_1/ddrmpskla/image/upload`, {
                method: "POST",
                body: formData,
            })
            .then((res) => res.json())
            .then((data) => {
                setimgurl(data.secure_url)
            })
            .catch((error) => console.log("Fetching Error:" , error));
            
        } catch (error) {
            console.log("error :", error);
        }

    }



  return (

    <div className='ml-8'>
        Addimgae

        <h2>Choose ypur file</h2>


        <label htmlFor="image"> Image</label>
        <input type="file" name="image" id="name" onChange={(e) => setimage(e.target.files[0])} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        <button onClick={() => Send()} className='bg-slate-300 p-6'> Submit</button>


        <h2>{imgurl}</h2>

    </div>
  )
}

export default Addimgae