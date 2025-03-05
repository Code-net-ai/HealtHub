import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Page2() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/doctors/${id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>DATA</h1>
      <p><h3>ID:</h3> {data.ID}</p>
      <p><h3>Name:</h3> {data.name}</p>
      <p><h3>Date of birth:</h3>{data.date}</p>
      <p><h3>Gender:</h3>{data.gender}</p>

      <p><h3>Phone number:</h3>{data.phone}</p>
      <p><h3>Institutional id:</h3>{data.id}</p>
      <p><h3>Password:</h3>{data.password}</p>
      <p><h3>Qualification:</h3>{data.Qualification}</p>
      <p><h3>Expeirence:</h3>GHC{data.expeirence} years</p>
      
      <p><h3>Salary:</h3>{data.salary}.00</p>


    </div>
  );
}

export default Page2;
