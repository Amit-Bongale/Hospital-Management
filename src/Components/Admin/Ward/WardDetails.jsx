import React from 'react'
import { useState , useEffect } from 'react'

function WardDetails() {

  let [edit , setedit ] = useState(false)
  let [deleteitem , setdelete] = useState(false)

  let [warddetails , setwarddetails] = useState([])
  let [doctorid , setdoctorid] = useState('')

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/alldoctors` , { method: "POST" })
      .then((res) => res.json())
      .then((data) => setwarddetails(data))
      .catch((err) => console.log("Error Fetching Data :" , err))
    } catch (error) {
      console.log("Error :" , error)
    }
  },[edit,deleteitem])


  return (
    <div>
        
    </div>
  )
}

export default WardDetails