import React from "react";
import "../style/nurses.css";
import { Link } from "react-router-dom";
import NursAdd from "../pages/nursAdd";
import ViewNurses from "../pages/viewNurses";

function Nurses() {
  return (
    <div className="nurses">
      <div className="container">
        <h1>Nurses</h1>

        <button>
          <Link to="/nursadd">ADD Nurses</Link>
        </button>
        <button>
          <Link to="/viewnurses">View Nurses</Link>
        </button>
        <button>DELETE NURSES</button>
      </div>
    </div>
  );
}

export default Nurses;
