import React from "react";
import Manu from "../component/manu";
import Patients from "../pages/Patients";
import Nurses from "../pages/Nurses";
import Doctor from "../pages/Doctor";
import { Link } from "react-router-dom";
import "../style/about.css";

function About() {
  return (
    <div className="nav">
      <div className="container1">
        <h4>
          <Link to="/nurses">Nurses</Link>
        </h4>
      </div>
      <div className="container2">
        <h4>
          <Link className="doctorLink" to="/doctor">
            Doctor
          </Link>
        </h4>
      </div>

      <div className="container3">
        {" "}
        <h4>
          <Link to="/patients">Patients</Link>
        </h4>
      </div>
    </div>
  );
}

export default About;
