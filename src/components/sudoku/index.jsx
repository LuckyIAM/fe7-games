import { useEffect, useState, useContext } from "react";
import Ctx from "../../context/Ctx2";
import Modal from "./modal";
import "./style.css"

export default ({n, content}) =>{ 
    const {data, board, setBoard} = useContext(Ctx);
    const i = Math.floor(n/board.length);
    const j = n - i * board.length;
    const [value, setValue] = useState(0);
    const [r, setR] = useState(true);
    const [c, setC] = useState(true);
    const [st, setSt] =useState({});
    const [mActive, setMActive] =useState(false);

    const checkRow = () => {
        for(let t = 0; t< board[i].length; t++){
            // console.log(board[i][t], i, t, n, i * board.length + t )
            if(board[i][t] && (i * board.length + t !== n)){
                
                if(+board[i][t] === +value){ // совпадение по оси х найдено!
                    setR(false);
                    break;
                }
            }
        }
    }
    const checkCol = () => {
        for(let t = 0; t< board[i].length; t++){
            if(board[t][j]&& (t * board.length + j !== n)){
                if(+board[t][j] === +value){
                    setC(false); // совпадение по оси y найдено!
                    break;
                }
            }
        }
    }
    useEffect(() => {
        if (value && value !==content){
            setBoard(prev => {
                let arr = [...prev];
                let cnt = arr.length;
                for(let i = 0; i< arr.length; i++){
                    for(let j = 0; j< arr.length; j++){
                        if(i * cnt + j === n){
                            arr[i][j] = value;
                            break;
                        }
                    }
                }
                return arr;
            })
        }
    }, [value])
    useEffect(() => {
        checkCol();
        checkRow();
    }, [board])

    useEffect(() => {
        console.log(r);
        setSt({color: r && c ? "springgreen" : "crimson"});
    }, [r, c])

    const setStep = (e) => {
        // setValue(e.target.value);
        // setBoard(prev => {
        //     let arr = [...prev];
        //     let cnt = arr.length;
        //     for(let i = 0; i< arr.length; i++){
        //         for(let j = 0; j< arr.length; j++){
        //             if(i * cnt + j === n){
        //                 arr[i][j] = e.target.value;
        //                 break;
        //             }
        //         }
        //     }
        //     return arr;
        // })
        
        setMActive(true)
    }

    

    return <div className={data[n] !== "-" ? "card inactive": "card"} onClick={setStep}>
        {content ?
        <span style ={ data[n] === "-" ? st : {}} >{content}</span> : <span></span>
        
        // <select onChange={setStep} value={content}>
        //     <option value={null}>0</option>
        //     <option>1</option>
        //     <option>2</option>
        //     <option>3</option>
        //     <option>4</option>
        //     <option>5</option>
        //     <option>6</option>
        //     <option>7</option>
        //     <option>8</option>
        //     <option>9</option>
        // </select>
        // <input type="munber" value={value} min={1} max={9} onChange={setStep}
    }
    {data[n] === "-" && <Modal 
    setActive={setMActive} 
    setValue={setValue} 
    active = {mActive}
    
    />}
        <span className="card-index">{n}</span>
    </div>
} 