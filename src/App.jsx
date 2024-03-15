import "./App.css";

import Cntr from "./assets/layouts/components/Cntr";
import Rep from "./assets/layouts/components/Rep";
import Cntc from "./assets/layouts/components/Cntc";
import Frases from "./assets/layouts/components/Frases";
import Nv from "./assets/layouts/components/Nv";
import Membresias from "./assets/layouts/components/Membresias";
import Footer from "./assets/layouts/components/Footer";
import ContVideo from "./assets/layouts/components/ContVideo";
import CardCurso from "./assets/layouts/components/CardCurso";

import { Route, Routes } from "react-router-dom";

import Home from "./assets/layouts/pages/Home";
import Cu from "./assets/layouts/pages/Cu";
import SignIn from "./assets/layouts/pages/SignIn";

function App() {
  return (
    <>      
        
        <Routes>
          <Route path="/index" element={<Home/>} />
          <Route path='/profile' element={<Cu/>}/>
          <Route path='/register' element={<SignIn/>}/>
        </Routes>
    </>
  );
}

export default App;
