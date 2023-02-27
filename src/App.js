// import logo from './logo.svg';
import './App.css';
import { useState } from "react"


function App() {
  const [isPalindrome, setIsPalindrome] = useState(false);
  
  let input 
  let palindrome = []

  const handleInput = (e) => {
    input = e.target.value;
  }

  const reverseWord = (value) => {
    for (let i = value.length-1; i > -1; i--) {
      const element = value[i]
      palindrome.push(element)
    }
  }

  const concatWord = () => {
    palindrome = palindrome.join('');
  }

  const confirmMatch = () => {
    if (input === palindrome) { 
      setIsPalindrome(true)
    } else {
      setIsPalindrome(false)
    }
  }

  const clearPalindrom = () => {
    palindrome = []
  }

  const checkPalindrome = (value) => {
    reverseWord(value)
    concatWord()
    confirmMatch()
    clearPalindrom()
  }

  return (
    <div className="App">
      <input onChange={(e) => handleInput(e)} type="text"/>
      <button onClick={() => checkPalindrome(input)}>Submit</button>
      <p>Is it a palindrome: { isPalindrome.toString() }</p>
    </div>
  );
}

export default App;
