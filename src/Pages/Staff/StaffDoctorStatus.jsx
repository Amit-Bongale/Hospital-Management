import React from "react";
import DoctorStatusInfo from "../../Components/Staff/DoctorStatus/DoctorStatusInfo";
import Staffnav from "../../Components/Staff/Nav/Staffnav";

function StaffDoctorStatus() {
  return (
    <div>
        <div className="flex">
            <Staffnav />
            <div>
                <DoctorStatusInfo />
            </div>
        </div>
    </div>
  );
}

export default StaffDoctorStatus;
