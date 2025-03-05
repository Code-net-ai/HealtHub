import React from "react";
import { Link } from "react-router-dom";
import "../style/doctor.css";
import Adddocter from "../pages/addDocter";
function Doctor() {
  return (
    <div className="Doctor">
      <div className="containerXXX">
        <h1>Doctors</h1>

        <button className="btn1">
          <Link to="/adddoctor">ADD Doctor</Link>
        </button>
        <button className="btn1">
          <Link to="/viewdoc">VIEW Doctor</Link>
        </button>
        <button className="btn1">DELETE Doctor</button>
      </div>
    </div>
  );
}

export default Doctor;
