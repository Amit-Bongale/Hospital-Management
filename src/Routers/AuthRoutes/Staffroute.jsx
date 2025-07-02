import { useEffect, useState } from 'react'
import { Outlet , Navigate } from 'react-router-dom'

import Loader from '../../Components/Admin/Loader/Loader';

function Staffroute() {

  const [ IsStaff , setIsStaff ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(`${process.env.REACT_APP_API_URL}/auth/user`, {
      method: "POST",
      credentials: "include",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("User data called");
      console.log("data: ",data);
      if(data.LoggedIn && data.role === "staff") {
        setIsStaff(true);
      } else {
        setIsStaff(false);
      }
    })
    .catch((error) => console.log("Fetching Error:", error))
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      { IsStaff ?  <Outlet></Outlet> : <Navigate to="/stafflogin" /> }
    </div>
  )
}

export default Staffroute