import React from "react";

const Ctx = React.createContext({
    board: [],
    setBoard: () => {},
    player: "",
    setPlayer: () => {},
    cnt: 0,
    setCnt: () => {}
});

export default Ctx;