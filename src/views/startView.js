import React from "react";
import "./startView.css"
import { StartViewCard } from "../components/StartViewCard";
import cardIcon1 from "../images/Glaciär.png";
import cardIcon2 from "../images/Havsnivåer.png";
import cardIcon3 from "../images/Fabrik.png";
import cardIcon4 from "../images/Temperatur.png";
import maskot from "../images/Maskot-ljusare.png";
import litenpilh from '../images/liten-pil-h.png';
import paths from "../routes/paths";
import { QuizButton } from "../components/quizButton";


export const StartView = () => {

  return (
    <div className="frame">
      <header>
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
      {/* lagt till text */}
      <div className="CardParent">
        <StartViewCard 
          image={cardIcon1} 
          category="Glaciär" 
          color="#8BD69E" 
          text="För att lära dig om varför glaciärerna smälter"
        />
        <StartViewCard 
          image={cardIcon2} 
          category="Havsnivåer" 
          color="#67A2B3" 
          text="För att lära dig om varför havnivåerna stiger"
        />
        <StartViewCard 
          image={cardIcon3} 
          category="Fossila Bränslen" 
          color="#FFB126" 
          text="För att lära dig om hur fossila bränslen påverkar jorden"
        />
        <StartViewCard 
          image={cardIcon4} 
          category="Temperatur" 
          color="#F76245"  
          text="För att lära dig om varför jordens temperatur förändras"
          path={paths.temperaturViewPath}
        />
      </div>
      {/*lagt till quizknapp, maskot och pratbubbla*/}
      <div style={{display: "flex", justifyContent: "center", marginTop: "40px", height: "150px"}}>
        <div style={{position: "relative", top: "20%"}}>
          <div className="quizButton"><QuizButton path={paths.quizViewPath}/></div>
        </div>
        <div style={{position: "absolute", left: "60%"}}>
          <img style={{ width: "18%", margin: "0 20px 0 0" }} src={maskot}/>
          <img style={{ width: "45%"}} src={litenpilh} />
        </div>
      </div>
     
    </div>
  );
};



