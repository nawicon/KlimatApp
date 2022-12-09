import React, { useContext } from "react";
import { QuizContext } from "./Contexts";
import "./Quiz.css"
import logo from "../../assets/Maskot-ljusare.png"
import bubble1 from "../../assets/quizbubbla-1.png"


export function Start() {

  //Kopplas ihop med quizView med knapptryck ska quiz-komponenten visas
  const { gameState, setGameState } = useContext(QuizContext);
    
  return (
      <div className="quizContainer">
        <div className="speechBubbleContainer">
          <img src={bubble1} style={{width: "100%", height: "320px"}} />
          <div className="speechBubbleContent">
            <h1>VÄLKOMMEN TILL MITT QUIZ!</h1>
            <div className="quizIngress">
              Hur mycket kan du om klimatet?
            </div>
            <p>
              När du lärt dig om&nbsp;
              <a href="glaciärer">glaciärer</a>,&nbsp;
              <a href="havsnivåer">havsnivåer</a>,&nbsp;
              <a href="fossila bränslen">fossila bränslen</a>&nbsp;
              och&nbsp;
              <a href="temperatur">temperatur</a>
              &nbsp;kan du utmana dig själv och andra!
            </p>
          </div>
        </div>
        <div className="quizLogoContainer">
          <img className="quizLogo" src={logo} />
        </div>
          <div className="quizBtn">
            <button onClick={() => {setGameState("quiz")}}>
              Starta Quiz
            </button>
          </div>
      </div>
    );
  }