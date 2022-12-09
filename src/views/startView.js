import React from "react";
import "./startView.css"
import { StartViewCard } from "../components/StartViewCard";
import cardIcon1 from "../images/Glaciär.png";
import cardIcon2 from "../images/Havsnivåer.png";
import cardIcon3 from "../images/Fabrik.png";
import cardIcon4 from "../images/Temperatur.png";
import paths from "../routes/paths";


export const StartView = () => {

  return (
    <div className="frame">
      <header>
        {/* <h1>LÄR DIG OM KLIMATFÖRÄNDRINGAR</h1>
        <p>
          Utforska klimatförändringarnas orsaker och påverkan genom att klicka
          dig vidare bland följande ämnen!
        </p> */}
        <h1 className="font-link-h1" style={{ textAlign: 'center' }}>
        LÄR DIG OM KLIMATFÖRÄNDRINGAR
              </h1>
              <p
                className="font-link-p-ingress"
                style={{ textAlign: 'center' }}
              >
                Utforska klimatförändringarnas orsaker och påverkan genom att klicka
          dig vidare bland följande ämnen!
              </p>
      </header>
      <div className="CardParent">
        <StartViewCard image={cardIcon1} category="Glaciär" color="#8BD69E" />
        <StartViewCard image={cardIcon2} category="Havsnivåer" color="#67A2B3" />
        <StartViewCard image={cardIcon3} category="Fossila Bränslen" color="#FFB126" />
        <StartViewCard image={cardIcon4} category="Temperatur" color="#F76245"  path={paths.temperaturViewPath}/>
      </div>

  
      <footer></footer>
    </div>
  );
};


