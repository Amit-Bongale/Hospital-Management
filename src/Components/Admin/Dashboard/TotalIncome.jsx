import React from "react";
import { useState, useEffect } from "react";

function TotalIncome() {
  let [income, setincome] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/bill/revenue`)
        .then((res) => res.json())
        .then((data) => {
          setincome(data);
          console.log("income:", data);
        })
        .catch((err) => console.log("Error fetching data", err));
    } catch (error) {
      console.log("Error:", error);
    }
  }, []);
  

  return (
    <div>
      <div className="flex gap-10 my-6 text-center">
        <div className="border-2 p-8 rounded-3xl  max-h-fit">
          <h1 className="text-2xl font-bold">Todays Revenue</h1>
          <p className="text-5xl font-bold mt-8"> ₹{income.dailyRevenue}</p>
        </div>
        <div className="border-2 p-8 rounded-3xl  max-h-fit">
          <h1 className="text-2xl font-bold">Monthly Revenue</h1>
          <p className="text-5xl font-bold mt-8">₹{income.monthlyRevenue}</p>
        </div>
        <div className="border-2 p-8 rounded-3xl max-h-fit min-w-72">
          <h1 className="text-2xl font-bold">Yearly Revenue</h1>
          <p className="text-5xl font-bold mt-8"> ₹{income.yearlyRevenue}</p>
        </div>
      </div>
    </div>
  );
}

export default TotalIncome;
