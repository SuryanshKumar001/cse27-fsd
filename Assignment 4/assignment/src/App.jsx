import React, { useState } from 'react'


const App = () => {
  const [height, setHeight]= useState(300);
  const [width, setWidth]= useState(300);
  
  function rinc(){
    setHeight((prev)=>prev+5);
  }
  function rdec(){
    setHeight((prev)=>prev-5);
  }
  function cinc(){
    setWidth((prev)=>prev+5);
  }
  function cdec(){
    setWidth((prev)=>prev-5);
  }
  return (
    <div>
      <img height={height} width={width} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvM0G3Kg2D1iGpKktmtGlGWDHXTcfszkQROHhA0NxdAQ&s=10" alt="" />
      <button onClick={rinc}>row +</button>
      <button onClick={rdec}>row -</button>
      <button onClick={cinc}>col +</button>
      <button onClick={cdec}>col -</button>
    </div>
  )
}

export default App