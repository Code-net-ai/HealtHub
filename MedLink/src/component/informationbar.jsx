import React from "react";
import "../style/information.css";
import doctorsdb from "../database/doctors.json";
import Veiwpati from "../pages/veiwpati";
import ViewNurses from "../pages/viewNurses"
import { Link } from "react-router-dom";

function Informationbar({ info }) {
  
  return (
    <div>
      <div className="content">
        {info.map((what, index) => (
          <div key={index}>
            <h3>
              Doctor's ID: <span style={{ fontWeight: "lighter" }}>{what.ID}</span>
            </h3>
            <h3>
              Doctor's Name: <span style={{ fontWeight: "lighter" }}>{what.name}</span>
            </h3>
            <h3>
              Doctor's Date Of Birth:{" "}
              <span style={{ fontWeight: "lighter" }}>{what.date}</span>
            </h3>
            <h3>
              Doctor's Telephone:{" "}
              <span style={{ fontWeight: "lighter" }}>{what.phone}</span>
            </h3>
            <Link
              to={`/viewid/${what.id}`}
            >
              <button  style={{ backgroundColor: "green", color: "white" }}>View</button>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Informationbar;
