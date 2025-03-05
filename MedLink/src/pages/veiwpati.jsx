import React,{useEffect, useState} from 'react'
import Informationbar from '../component/informationbar';
import axios from 'axios';
function Veiwpati() {
    const [pati, setpati] = useState([]);
    useEffect (()=>{
        const fetchpati = async () => {
            try{
                const response= await axios.get("http://localhost:3000/patients")
                setpati(response.data)

            }catch(err){
                console.error(err);
            }
        }
        fetchpati();
        
    },[])

  return (
    <div>
        <h1>Patients</h1>
     <Informationbar info={pati}/>
    </div>
  )
}

export default Veiwpati;