import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  function dec(){
    if(counter > 0){
     setCount(counter-1)
     }else{
      alert("you go in rong direction")
     }
     }

     function incre(){
      setCount(counter+1)
     }
  
  return (
    <>
      <h1>{counter}</h1>
      
      <button onClick={dec}>Decrement</button>
      <button onClick={incre}>Increment</button>
     
    </>

   
  )
}

export default App

