import React from "react";
import "../style/patientce.css";
import Addpati from "./addpati";
import { Link } from "react-router-dom";
function Patients() {
  return (
    <div>
      <div className="Patient">
        <div className="containerMMM">
          <h1>Patient</h1>
          <div className="row">
            <button className="btn5">
              <Link to="/patient">Add Patient</Link>
            </button>
            <button className="btn5"><Link to="/viewpati">VEIW Patient</Link></button>
            <button className="btn5">DELETE Patient</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
