// vite + bable transpiler + bundler

// jsx - javascript xml (markup)
// Component -- function


import React, { Component } from "react";

let App = () => {
  // let h1 = React.createElement("h1",{},"yes boss")
  // return h1;

  // let ui = React.createElement("div", {}, [
  //   React.createElement("h1",{},"hello"),
  //   React.createElement("h2",{},"hey"),
  //   React.createElement("h3",{},"buy"),
  // ]);
  // // if we want to build a big webpage then creating this become
  // complex so here bables comes in picture . bable is a transpiler
  // Babel is a transpiler.
  // JSX is not understood by the browser directly.
  // Babel converts JSX into React.createElement() calls.

  // return ui;

  return (
    <div>
      <h1>hello</h1>
      <h2>hey</h2>
      <h3>good night</h3>
    </div>
  );
};

export default App;
