import React, { useState } from 'react'

const Counter = () => {

    let [Count,setCount] = useState(0);
    console.log("Counter is rendering...");
    

  return (
    <div>
      <h1>Count is {Count}</h1>

      {/* batching - same setfunction() in a function */}
      <button  onClick={()=>{
        //  setCount(Count + 1);
        //  setCount(Count + 1);
        //  setCount(Count + 1);

        // setCount(Count + 3);
        
    //     setCount((prev)=>{
    //     //    console.log(prev);
    //    return prev +1;
           
    //     });

      setCount((prev => prev+1));
      setCount((prev => prev+1));
      setCount((prev => prev+1));

         
      }} className='bg-blue-500 rounded-lg p-3 shadow-2xl'>Increment</button>
    </div>
  )
}

export default Counter;

