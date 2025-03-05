import { React, useState } from "react";
import { Link } from "react-router-dom";
import Add from "../component/add";
import axios from "axios";

function Adddocter() {

  return (
    <div className="main">
      <h1> Add Doctor</h1>
      <Add />
      
    </div>
  );
}

export default Adddocter;
