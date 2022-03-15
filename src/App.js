import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
const App = () => {
  const [item, setItem]=useState('')
  const [homeCheck, setHomeCheck]=useState(true)
  const [loginCheck, setLoginCheck]=useState(false)
  const [listingCheck, setListingCheck]=useState(false)
  const [createCheck, setCreateCheck]=useState(false)

  const goToHome = () => {
    setLoginCheck(false)
    setListingCheck(false)
    setCreateCheck(false)
    setHomeCheck(true)
  }
  const goLogin = () => {
    setLoginCheck(true)
    setListingCheck(false)
    setCreateCheck(false)
    setHomeCheck(false)
  }
  const goToListings = () => {
    setListingCheck(true)
    setLoginCheck(false)
    setCreateCheck(false)
    setHomeCheck(false)
  }
  const goToCreate = () => {
    setCreateCheck(true)
    setLoginCheck(false)
    setHomeCheck(false)
    setListingCheck(false)
  }
  return(
    <>
    <h1>Re-Play</h1>
    <button onClick={goToHome}>Home</button>
    <button onClick={goLogin}>Login</button>
    <button onClick={goToListings}>Listings</button>
    <button onClick={goToCreate}>Create a Listing</button>
    </>
  )
}

export default App;
