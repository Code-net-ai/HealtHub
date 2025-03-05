import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage';
import About from './pages/Aboutpage'; 
import Patients from './pages/Patients'
import Nurses from './pages/Nurses';
import Doctor from './pages/Doctor';
import NursAdd from './pages/nursAdd';
import ViewNurses from './pages/viewNurses';
import ComponentTest from './component/informationbar'
import Adddocter from './pages/addDocter';
import VeiwDoctor from './pages/veiwDoctor';
import Addpati from './pages/addpati';
import Veiwpati from './pages/veiwpati';
import ViewID from './pages/doctorviewpage';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patients" element={<Patients/>}/>
        <Route path="/nurses" element={<Nurses/>}/>
        <Route path="/nursadd" element={<NursAdd/>}/>
        <Route path="/viewnurses" element={<ViewNurses/>}/>
        <Route path='/test' element={<ComponentTest/>}/>
        <Route path='/adddoctor' element={<Adddocter/>}/>
        <Route path='/viewdoc' element={<VeiwDoctor/>}/>
        <Route path='/patient' element={< Addpati/>}/>
        <Route path='/viewpati' element={<Veiwpati/>}/>
        <Route path='/viewid/:id' element={<ViewID/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

