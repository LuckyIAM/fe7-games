import { useContext} from "react";
import Ctx from "../context/Ctx1";

export default ({index, char}) => {
    const {setBoard, player, setPlayer, setCnt} = useContext(Ctx);
   
    
    const setStep = () => {
        if(!char){
            let ch = player ? "x" : "o";
            setPlayer(!player);
            setCnt();
            setBoard(prev => prev.map((el, i) => i === index ? ch: el))
        }
    }
    
    return <div className="card">
        <div className="card" 
        onClick={setStep}>{char}</div>
    </div>
}