import React, { useContext } from "react";
import { QuizContext } from "./Contexts";
import { Questions } from "./Questions";
import logo from "../../assets/Maskot-ljusare.png"
import bubble1 from "../../assets/quizbubbla-1.png"

export function Results() {

    //För över poängen från tidigare komponent för att visas på den här komponenten, setGameState kopplad till knappen för att göra om quizet
    const { score, setScore, setGameState } = useContext(QuizContext);

    //Om man får alla rätt visas första meddelandet annars visas det andra
    const message = () => {
        if (score == 3) {
            return <div>Bra jobbat, du förtjänar en guldstjärna!&#9734;</div>
        }
        else {
           return <div>
            <div>Du behöver nog läsa på lite mer om klimatet.</div>
            <div>Vi ses igen vid nästa försök!</div>
            </div>
        }

    }

    //Nollställer poängen när man vill göra om quizet
    const restartQuiz = () => {
        setScore(0)
        setGameState("start")
    }

    return (
        <div className="quizContainer">
            <div className="speechBubbleContainer">
                <img src={bubble1} style={{width: "100%", height: "320px"}} />
                <div className="speechBubbleContent">
                    <h2>DITT RESULTAT</h2>
                    <p className="quizScore" style={{fontSize: "48px"}}>{score} / {Questions.length}</p>
                    <p>
                        {message()}
                    </p>
                </div>
            </div>
            <div className="quizLogoContainer">
                <img className="quizLogo" src={logo} />
            </div>
            <div className="quizBtn">
                <button onClick={restartQuiz}>
                    Gör quiz igen
                </button>
                <div style={{width: "160px"}}></div>
                <button>Till startsidan</button>
            </div>
        </div>
    )
}