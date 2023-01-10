import React, { useState, useEffect} from "react";
import SuCard from "../components/sudoku";
import Ctx from "../context/Ctx2";
export default () =>{
    const n = 3;
    const [data, setData] = useState("1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--")
    const [board, setBoard] = useState([]); 
    useEffect(() =>{
        let cnt =  n ** 2;
        let brd = [];
        for (let i = 0; i<cnt; i++){
            brd.push([]);
            for(let j = 0; j < cnt; j++){
                brd[i].push(data[i * cnt + j] !=="-" ? data[i * cnt + j]:
                null)
                // console.log(i, j, i * cnt + j);
            }
        }
        setBoard(brd);
    },[])
    

    return <Ctx.Provider value={{
        data: data,
        setData: setData,
        board: board,
        setBoard: setBoard
    }}><div 
    className="board" 
    style={{
        gridTemplateColumns: `repeat(${n**2}, auto)`
        }}>
        {board.length > 0 && board.reduce((arr, el, i) => {
            el.forEach((cell,j) => {
                console.log(i*j+j)
                arr.push(<SuCard 
                    key={i * (n**2) + j} 
                    n={i * (n**2) + j}
                    cnt={n}
                    content={cell}

                    />)
            })
            return arr
        },[])}
    </div>
    </Ctx.Provider>
}