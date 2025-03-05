import { React, useState } from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";
import { Loogin } from "../server/loginauthentication";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const setusernamechange = (e) => {
    setusername(e.target.value);
  };

  const setuserpasswordchange = (e) => {
    setpassword(e.target.value);
  };

  const Vlidation = () => {
    let res;
    res = Loogin(username, password);
    if (res === "Success") {
      navigate("/aboutpage");
    } else {
      setError("Check Credentials");
    }
  };

  return (
    <div className="in">
      <div>
        <input
          className="inp"
          type="text"
          placeholder="name"
          id="username"
          onChange={setusernamechange}
        />

        <input
          className="inp"
          type="password"
          placeholder="Password"
          name="password"
          onChange={setuserpasswordchange}
        />
        <button id="btn2" onClick={Vlidation}>
          login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default LogIn;
