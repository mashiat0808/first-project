import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
    </>
  )
}

function MyButton() {
  return (
    <button>
      Im a button
    </button>
  );
}

export default App
