import React from "react";
import { Link } from "react-router-dom";
import "../style/addpati.css";
import { useState } from "react";
import axios from "axios";

function Addpati() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    result: "",
    cost: "",
    gender: "",
  });

  const handleGenderChange = (e) => {
    setFormData((prev) => ({ ...prev, gender: e.target.value }));
  };

  const handleformDatachange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };
  const handleSubmitBackend = async () => {
    try {
      const response = await axios.post("http://localhost:3000/patients", formData);
      console.log(response);
    } catch (err) {
      console.log("Error message: ", err);
    }
  
  };

  return (
    <div id="input">
      <h2>Add Patient</h2>
      <input
        type="text"
        name="name"
        onChange={handleformDatachange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        onChange={handleformDatachange}
        placeholder="Age"
      />
      <div id="radio">
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleGenderChange}
        />{" "}
        <br />
        <label htmlFor="">Male </label> <br />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleGenderChange}
        />
        <label htmlFor="">Female</label>
      </div>

      <input
        type="telephone "
        name="phone"
        onChange={handleformDatachange}
        placeholder="Telephone"
      />
      <input
        type="Adress"
        name="address"
        onChange={handleformDatachange}
        placeholder="Place of residence"
      />
      <input
        type="number"
        name="cost"
        onChange={handleformDatachange}
        placeholder="cost of treatment"
      />
      <input
        type="text"
        name="result"
        onChange={handleformDatachange}
        placeholder="Diagnos result"
      />

      <div>
        <button id="BB2" onClick={handleSubmitBackend}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Addpati;
