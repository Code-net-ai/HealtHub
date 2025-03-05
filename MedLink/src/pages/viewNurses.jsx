import React, { useEffect, useState } from "react";
import Informationbar from "../component/informationbar";
import axios from "axios";


function ViewNurses() {
  const [nurses, setNurses] = useState([]);
  useEffect(() => {
    const fetchnNurses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/nurses");
        setNurses(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchnNurses();
  }, []);
  return (
    <div>
      <h1>Nurses</h1>
      <Informationbar info={nurses} />
    </div>
  );
}

export default ViewNurses;
