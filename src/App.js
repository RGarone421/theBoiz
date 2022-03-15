import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
const App = () => {
  const [item, setItem]=useState('')

  return(
    <>
    <h1>Re-Play</h1>
    <button>Home</button>
    <button>Login</button>
    <button>Listings</button>
    <button>Create a Listing</button>
    </>
  )
}

export default App;
