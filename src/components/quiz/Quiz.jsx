import React, { useState, useContext } from "react";
import { Questions } from "./Questions";
import { QuizContext } from "./Context";
import logo from "../../images/Maskot-ljusare.png";
import bubble2 from "../../images/quizbubbla-2.png";

export function Quiz() {

    //Visar data för den aktuella frågan
    const [currentQuestion, setcurrentQuestion] = useState(0);
    //För att veta vilket alternativ som valts
    const [optionChosen, setOptionChosen] = useState("");
    //Används för att visa svaret
    const [showAnswer, setShowAnswer] = useState(false)
    //Används för att inaktivera "Välj svar"-knappen om inget val är iklickat, https://bobbyhadz.com/blog/react-disable-button
    const [check, setCheck] = useState(false);

    //Data/värden som förs över eller kopplas till andra komponenter i detta fall hur många poäng(score) och vilka komponenter som ska visas(gameState)
    const { score, setScore, gameState, setGameState } = useContext(QuizContext); 

    //Om valt alternativ är lika med rätt svar visas "rätt svar"-texten, annars visas "fel svar"-texten
    const answer = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            return <div>{Questions[currentQuestion].correct}</div>
        }
        else {
            return <div>{Questions[currentQuestion].wrong}</div>
        }
    }

    //Lägger till 1 poäng för varje rätt svar
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1)
            console.log(Questions[currentQuestion].correct)
        }
        else {
            console.log(Questions[currentQuestion].wrong)
        }
        //Vid onClick plussar det på med 1 på staten currentQuestion för att gå vidare till nästa fråga
        console.log(score);
        setcurrentQuestion(currentQuestion + 1);
    };

    //Vad som ska hända när man kommer till sista frågan, tar en till resultat-komponenten
    const finishQuiz = () => {
        //Upprepar detta eftersom sista knappen också ger poäng vid rätt svar
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1)
        }
        console.log(score);
        setGameState("results");
    }

    //Återställer vald radioknapp vid knapptryck inför nästa fråga, https://surajsharma.net/blog/react-handle-radio-buttons
    const resetRadioState = () => {
        setOptionChosen('');
      }
    
    //Döljer svarstexten igen vid knapptryck, https://www.youtube.com/watch?v=ZCvemsUfwPQ
    const answerState = () => {
        setShowAnswer(false);
    }
    
    return (
        <div className="quizContainer">
            <div className="speechBubbleContainer">
                <img src={bubble2} style={{width: "100%", height: "673px"}} />
                <div className="speechBubbleContent">
                    {/*La till hur av question.length för att användaren ska veta hur många frågor som förväntas*/}
                    <h2>
                        Fråga {Questions[currentQuestion].id} av {Questions.length}
                    </h2>
                    <img src={Questions[currentQuestion].img} />
                    {/*När "Välj svar"-knappen klickas visas svarstexten istället*/}
                    {showAnswer && answer() ? (
                        <div>
                            <div className="quizAnswerContainer">
                                <p className="quizAnswer">
                                    {answer()}
                                </p>
                                <div className="continueBtn">
                                    {/*Om man är på sista frågan kommer knappen ändras till "Visa poäng" istället*/}
                                    {currentQuestion == Questions.length - 1 ? (
                                        <button 
                                            onClick={finishQuiz}
                                        >
                                            Visa poäng
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={() => {
                                                nextQuestion(); 
                                                resetRadioState(); 
                                                answerState()
                                            }}
                                        >
                                            Fortsätt
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ):(
                        <div>
                            <p className="quizQuestion">
                                {Questions[currentQuestion].prompt}
                            </p>
                            <div>
                                <form className="quizOptions">
                                    <div className="quizOption">
                                        <div className="optionBtn">
                                            <label className="radio">
                                                <input 
                                                    type="radio"
                                                    id="check"
                                                    name="options"
                                                    value={check}
                                                    checked={optionChosen === "A"}
                                                    onChange={() => {setOptionChosen("A"); setCheck(true)}}
                                                />
                                                <span className="checkmark"></span>
                                                <span style={{margin: "17px"}}></span>
                                                {Questions[currentQuestion].optionA}
                                            </label>
                                        </div>
                                        <div className="optionBtn">
                                            <label className="radio">
                                                <input      
                                                    type="radio"
                                                    name="options"
                                                    checked={optionChosen === "B"}
                                                    onChange={() => {setOptionChosen("B"); setCheck(true)}}
                                                />
                                                <span className="checkmark"></span>
                                                <span style={{margin: "17px"}}></span>
                                                {Questions[currentQuestion].optionB}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="optionBtn">
                                        <div className="quizOption">
                                            <label className="radio">
                                                <input
                                                    type="radio"
                                                    name="options"
                                                    checked={optionChosen === "C"}
                                                    onChange={() => {setOptionChosen("C"); setCheck(true)}}
                                                />
                                                <span className="checkmark"></span>
                                                <span style={{margin: "17px"}}></span>
                                                {Questions[currentQuestion].optionC}
                                            </label>
                                        </div>
                                        <div className="optionBtn">
                                            <label className="radio">
                                                <input 
                                                    type="radio"
                                                    name="options"
                                                    checked={optionChosen === "D"}
                                                    onChange={() => {setOptionChosen("D"); setCheck(true)}}
                                                />
                                                <span className="checkmark"></span>
                                                <span style={{margin: "17px"}}></span>
                                                {Questions[currentQuestion].optionD}
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="chooseAnswerBtn">
                                <button 
                                disabled={!check} 
                                onClick={()=>{setShowAnswer(true); setCheck(false)}}
                                >
                                    Välj svar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="quizSmallLogoContainer">
                    <img className="quizSmallLogo" src={logo} />
                </div>
            </div>
        </div>
    );
}