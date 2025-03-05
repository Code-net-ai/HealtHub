import { React, useState } from "react";
import "../style/nursAdd.css";
import axios from 'axios';

function Add2() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    ID: "",
    password: "",
    expeirence: "",
    Qualification: "",
    salary: "",
  });
  const handleGenderChange = (e) => {
    setFormData((prev) => ({ ...prev, gender: e.target.value }));
  };
  const handleformDatachange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  const handleSubmitBackend = async() => {
    // console.log("Data to be sent: ", formData)
    try{
      const response = await axios.post("http://localhost:3000/nurses", formData);
      console.log(response.data);
    }catch(err){
      console.log("Error Message: ", err);
    }
  }

  return (
    <div className="header-right">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleformDatachange}
      />
      <input
        type="number"
        placeholder="Telephone Number"
        name="phone"
        onChange={handleformDatachange}
      />
      <input
        type="date"
        placeholder="date of birth"
        name="date"
        onChange={handleformDatachange}
      />
      <div id="radio">
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleGenderChange}
        />{" "}
        <br />
        <label htmlFor="">Male</label> <br />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleGenderChange}
        />
        <label htmlFor="">Female</label>
      </div>

      <input
        type="text"
        placeholder="ID number"
        name="ID"
        onChange={handleformDatachange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={handleformDatachange}
      />
      <input
        type="number"
        placeholder="Years of expeirence"
        name="expeirence"
        onChange={handleformDatachange}
      />
      <input
        type="text"
        placeholder="Qualification"
        name="Qualification"
        onChange={handleformDatachange}
      />
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={handleformDatachange}
      />
     <button id="BB" onClick={handleSubmitBackend}>Register</button>
    </div>
  );
}

export default Add2;
