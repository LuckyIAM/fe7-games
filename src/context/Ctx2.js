import React, { createContext } from "react";


const Ctx = React.createContext({
    data: "",
    board: [],
    setData: () => {},
    setBoard: () => {}
});

export default Ctx;