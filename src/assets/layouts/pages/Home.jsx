
import Nv from "../components/Nv";
import Footer from "../components/Footer";
// import ContVideo from "../components/ContVideo";

import Frases from "../components/Frases";
import Membresias from "../components/Membresias";
import Cntc from "../components/Cntc";
import Cntr from "../components/Cntr";
import Rep from "../components/Rep";

function Home() {
  return (
    <>      
        <Nv></Nv>
        <Frases></Frases>
        
        
        <Membresias></Membresias>
        <Cntc></Cntc> 
        <Cntr></Cntr>
        <Rep></Rep>

        {/* <ContVideo></ContVideo> */}
        
        <Footer></Footer>

    </>
  );
}

export default Home;