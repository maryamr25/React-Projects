import { useState } from 'react'

import './App.css'
 
  function App() { 
  const [quote, setCount] = useState('');

  
const quotes = [
  "Code is like humor. When you have to explain it, it's not funny anymore.",
  "JavaScript is the duct tape of the internet.",
  "The best way to predict the future is to invent it.",
  "Code is not just for coders, it's for anyone who wants to solve a problem.",
  "The only way to do great work is to love what you do.",
  "JavaScript is not just a language, it's a lifestyle.",
  "The biggest risk is not taking any risk.",
  "Code is not just about writing, it's about solving problems.",
  "The best code is the code that doesn't need to be written.",
  "JavaScript is the language of the web.",
  "The only thing necessary for the triumph of evil is for good men to do nothing.",
  "Code is not just about functionality, it's about aesthetics.",
  "The best way to get started is to quit talking and begin doing.",
  "JavaScript is not just a tool, it's a craft.",
  "The biggest challenge is not the technology, it's the people."];
  
  function generateQuote() {
 const randomqoutes = Math.floor(Math.random() * quotes.length);
 setCount(quotes[randomqoutes])
 
}
  return (
    <>
      
      <h1>Random Code Generater</h1>
      <h3>{quote}</h3>
      <button onClick={generateQuote}>Generate Quote</button>
      
    </>
  )
}

export default App
