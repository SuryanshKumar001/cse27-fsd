import { useState } from "react"


const CounterApp = () => {
  const [num,setNum] = useState(0);

  function inc(){
    if(num=10) console.log("Invalid");
    else{
      setNum((prev)=>prev+1);
    }
  }

  function dec(){
    if(num=0) console.log("Invalid");
    else{
      setNum((prev)=>prev-1);
    }
    
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={inc}>+</button>
      <p>{num}</p>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default CounterApp