import React from 'react'

function Card({details}) {
    console.log(details)
  return (
    <div>
        <div style={{border:'2px solid red', width:'350px', height:'350px', textAlign:'center'}}>
           <h1>{details.name}</h1>
           <img src={details.url} alt="" height="200px" width="200px"/>
           <h3>{details.price}</h3>
        </div>       
    </div>
  )
}

export default Card