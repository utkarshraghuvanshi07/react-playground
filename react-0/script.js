// let h1 = document.createElement("h1");
// h1.textContent = "hello";
// document.body.append(h1);

// let rh1 = React.createElement(
//   "h1",
//   {},
//   React.createElement("span", {}, "i am under h1"),
// );

// // console.dir(rh1);
// // document.body.append(rh1);

// let realDomElem = document.querySelector("#root");

// let rootOfReact = ReactDOM.createRoot(realDomElem);

// rootOfReact.render(rh1);
// console.dir(rh1);

import { a, sum } from "./main.js";
console.log(a);

let res = sum(50, 90);
console.log(res);

// let taskelm = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, React.createElement("span", {}, "i am span")),
// );

// let rootelm = document.querySelector("#root");

// let root = ReactDOM.createRoot(rootelm);

// root.render(taskelm);

let taskelm = React.createElement("div", {}, [
  React.createElement("h1", {}, React.createElement("span", {}, "i am span")),
  React.createElement("h1", {}, React.createElement("span", {}, "i am span")),
  React.createElement("h1", {}, React.createElement("span", {}, "i am span")),
]);

let rootelm = document.querySelector("#root");

let root = ReactDOM.createRoot(rootelm);

root.render(taskelm);
