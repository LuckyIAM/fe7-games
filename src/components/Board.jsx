import { useContext } from "react";
import Ctx from "../context/Ctx1";
import Card from "./Card"

export default () => {
    const {board} = useContext(Ctx);
    return <div className="board">
        {board.map((el, i) => <Card 
        index={i}
        key={i}
        char={el}
        />)}
    </div>
}