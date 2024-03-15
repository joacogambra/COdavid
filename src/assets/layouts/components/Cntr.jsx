import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Cntr() {
  const [counterOn, setCounterOn] = useState(false);
  React;
  return (<>
  <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div className="c-cntr">
        <div>
          <h2>Tasa de exito</h2>
          <h3>
          {counterOn && <CountUp start={0} end={97} duration={2} delay={0}/>}%
          </h3> 
        </div>
         
        <div>
          <h2>Miembros</h2>
          <h3>+
          {counterOn && <CountUp start={0} end={197} duration={2} delay={0}/>}
          </h3> 
        </div>
          
        <div>
          <h2>Membresias</h2>
          <h3>
          {counterOn && <CountUp start={0} end={2189} duration={2} delay={0}/>}
          </h3> 
        </div>

      </div>
    </ScrollTrigger>

    
  </>
    
  );
}
