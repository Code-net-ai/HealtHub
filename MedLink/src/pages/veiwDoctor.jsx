import React, { useEffect, useState } from "react";
import Informationbar from "../component/informationbar";
import axios from "axios";

function ViewDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/doctors");
        setDoctors(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Doctors</h1>
      <Informationbar info={doctors} />
    </div>
  );
}

export default ViewDoctor;
