// import React from "react";
// import Contact from "./Contact";

// import Somthing, { One, Two } from "./test";

// const App = () => {
//   One();
//   Two();
//   Somthing();

//   return (
//     <div>
//       <h1>hey i am the best</h1>
//       <Contact />
//     </div>
//   );
// };

// export default App;

import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";

const App = () => {
  let count = 0;

  // let btn = document.querySelector("#btn");
  // btn.addEventListener("click",()=>{
  //   count++;
  // });   X

  return (
    <div>
      <h1>Count is - {count}</h1>
      <button onClick={()=>{
        count++;
        console.log("ignore hora h ");
        
      }}>Increment</button>
    </div>
  );
};

export default App;
