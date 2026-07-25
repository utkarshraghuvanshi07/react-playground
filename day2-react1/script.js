import React from "react";

let root = document.querySelector("#root");

let h1= React.createElement("h1",{},"hello react");

ReactDOM.createRoot(root).render(h1);
