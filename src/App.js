import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
const App = () => {
  const [item, setItem]=useState('')
  const [homeCheck, setHomeCheck]=useState(true)
  const [loginCheck, setLoginCheck]=useState(false)
  const [listingCheck, setListingCheck]=useState(false)
  const [createCheck, setCreateCheck]=useState(false)
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newRarity, setNewRarity] = useState('')
  const [newCondition, setNewCondition] = useState('')

  useEffect(()=>{
    goToHome()
  }, [])

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
    {homeCheck ? (
      <>
      <div class='container'>
        <h1>Re-Play</h1>
        <p>We know how much you like the nostolgia of old times, that's why, we're happy to present <b>Re-Play</b> a new store front that allows for listings of all things vintage at a good price. It's up to us as a community to stop scalpers, and those taking the joy out of the hobby. Let's help eachother out so we can all <i>Re-Play</i> our old favorites.</p>
        </div>
        </> ): null
    }
    </>
  )
}

export default App;
