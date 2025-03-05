import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import LogIn from "../component/logIn";

function Home() {
  return (
    <div className="cav">
      <div className="home">
        <h3>Log in</h3>
        <LogIn />
      </div>
    </div>
  );
}

export default Home;
