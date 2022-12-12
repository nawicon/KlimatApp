import { useNavigate } from "react-router-dom";
import './quizButton.css';


export function QuizButton(props) {
  const navigate = useNavigate();

  return (
    <button
      className="QuizButton"
      onClick={() => {
        navigate(props.path);
      }}
    >
      {"Quiz"}
    </button>
  );
}

