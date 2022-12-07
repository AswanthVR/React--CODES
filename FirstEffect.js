import React from 'react'
import { useState,useEffect } from 'react'


 const FirstEffect = () => {

   const [count, setCount] = useState(0)

   useEffect(()=>{
    document.title= "clicked me "+count
   })

   
  return (
    <div>
     <h1>number of clicks{count}</h1>
    <button onClick={()=>setCount(count+1)}>CLICK</button>
    </div>
  )
}

export default FirstEffect;
// life cycle of class components mounting example