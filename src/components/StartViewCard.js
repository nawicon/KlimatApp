import "./StartViewCard.css";
import { useNavigate } from "react-router-dom";

export function StartViewCard(props) {
 const navigate = useNavigate();
 
   return (
    
    <div 
      className="card" 
      style={{backgroundColor:props.color}}
      onClick={() => navigate(props.path)} 
      >
        <div className="imgHolder">
          <img src={props.image}/>
        </div>
        <h3>{props.category}</h3>
        {/* lagt till */}
        <div class="cardTextContainer">
          <div 
          className="clickHere"
          style={{fontWeight:"600"}}>KLICKA</div>
          <p class="cardText">{props.text}</p>
      </div>
    </div>


  );
}

