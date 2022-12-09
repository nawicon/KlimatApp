import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import paths from "../routes/paths";
import { useLocation } from 'react-router-dom';
import mylogo from "../images/Maskot-ljusare.png";
import { NavButton } from "./NavButton";

export function NavBar() {
const currentPath = useLocation();
  return (
    
    <>        
    <div className="container">
      
      <NavButton 
        iconpath={mylogo} 
        title="Start" 
        path={paths.startViewPath} 
        selected={currentPath.pathname == paths.startViewPath ? true : false}
     
      />

      <NavButton 
        title="Glaciär" 
        footerColor="#8BD69E" 
      />

      <NavButton 
        title="Havsnivåer" 
        footerColor="#67A2B3"
      />

      <NavButton 
        title="Fossila Bränslen" 
        footerColor="#FFB126" 
      />

      <NavButton 
        title="Temperatur" 
        footerColor="#F76245" 
        path={paths.temperaturViewPath} 
        selected={currentPath.pathname == paths.temperaturViewPath ? true : false} 
        
      />

      <NavButton 
        title="Quiz" 
        footerColor="#2E8336" 
        path={paths.quizViewPath} 
        selected={currentPath.pathname == paths.quizViewPath ? true : false}
        
      />
      
    </div>
    
</>

   
  );
}

