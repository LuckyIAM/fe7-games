import React from "react";


export default ({setValue, setActive, active}) => {
    const numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 9 , 0];
    const selectNum = e => {
        e.stopPropagation();
        setValue(e.target.innerText);
        setActive(false);
    }
    return <div className="modal" style={{display: active ? "grid" : "none"}}>
        {numbers.map(n => <div className="num" onClick={selectNum } key={n}>{n}</div>)}
    </div>
}