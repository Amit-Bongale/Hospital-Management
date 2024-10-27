import React  from "react";
import { useState } from "react";

function Adddoctor({ setisopen }) {

  let [id, setid ] = useState('')
  let [name , setname] = useState('')
  let [gender , setgender] = useState('')
  let [email , setemail] = useState('')
  let [password , setpassword] = useState('')
  let [specialization , setspecialization] = useState('')
  let [phone , setphone] = useState('')
  let [experience , setexperience] = useState('')
  let [dob , setdob] = useState('')
  let [image , setimage ] = useState(null)


  async function Send(e){

    e.preventDefault();

    console.log("called send")

    const uploadPreset = process.env.REACT_APP_cloudinary_api_upload_preset;
    const cloudName = process.env.REACT_APP_cloudinary_cloud_name;

    if (!uploadPreset || !cloudName) {
      alert("Cloudinary configuration is missing.");
      return;
    }


    // Cloudinary image uploader
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', uploadPreset );
    formData.append('cloud_name', cloudName);

    try {
      await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload/`, {
        method: "POST",
        body: formData,
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // alert("image inserted sucessfully")
        let id = data.public_id;
        let version = data.version;
        let format = data.format
        let imageurl = `https://res.cloudinary.com/${cloudName}/image/upload/c_thumb,g_face,w_1080,h_1080/v${version}/${id}.${format}`

        if(data.secure_url){
          Insert(imageurl);
        }
      })
      .catch((error) => {console.log("Image upload error:" , error , error.message)});
        
    } catch (error) {
      console.log("error :", error);
      return;
    }
    
  }

  // doctor data uploder
  function Insert(imageurl){

    let data = {
      "id": id,
      "name": name,
      "gender": gender,
      "email": email,
      "password":password,
      "specialization": specialization,
      "phone": phone,
      "experience": experience,
      "dob": dob,
      "image" : imageurl,
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/createdoctor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          alert(data.message);
          window.location.reload()
        }
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }

  }



  return (
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20  border-2 shadow-xl rounded-3xl">
        <h2 className="text-2xl font-bold py-2 mb-5 ">Add Doctor</h2>
        <form onSubmit={Send} >
          <div className="grid gap-6 mb-5  md:grid-cols-2">

            <div>
              <label
                for="file"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                image
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="choose file"
                accept="image/*" onChange={(e) => setimage(e.target.files[0])}
              />
            </div>

            <div>
              <label
                for="id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Id
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
              <label for="gendere" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                gender
              </label>
              <select name="gender" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="gender"
                required
                onChange={(val) => setgender(val.target.value)}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label
                for="mail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="mail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xyz@gmail.com"
                required
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
                placeholder=" +91 123-245-6780"
                // pattern="[0-9]{10}"
                required
                onChange={(val) => setphone(val.target.value)}
              />
            </div>
            <div>
              <label
                for="specialization"
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
                onChange={(val) => setspecialization(val.target.value)}
              />
            </div>
            <div>
              <label
                for="experience"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Experience
              </label>
              <input
                type="number"
                id="experience"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Doctor Experience"
                required
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
                onChange={(val) => setdob(val.target.value)}
              />
            </div>
            <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
              onChange={(val) => setpassword(val.target.value)}
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

export default Adddoctor;
