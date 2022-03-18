import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Home from './components/Home'
import logo from './rg.jpg'
import NewListing from './components/NewListing'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
const App = () => {
  const [item, setItem]=useState('')
  const [homeCheck, setHomeCheck]=useState(false)
  const [loginCheck, setLoginCheck]=useState(false)
  const [listingCheck, setListingCheck]=useState(false)
  const [createCheck, setCreateCheck]=useState(false)
  const [startCheck, setStartCheck] = useState(false)
  const [addCheck, setAddCheck]= useState(false)
  const [profileCheck, setProfileCheck] = useState(false)
  const [openCheck, setOpenCheck] = useState(true)

  const openProfile = () => {
    setHomeCheck(false)
    setListingCheck(false)
    setProfileCheck(true)
    setOpenCheck(false)
  }
  const changeAddCheck = () => {
    setAddCheck(true)
  }
  const closeNewForm = () => {
    setAddCheck(false)
  }

  useEffect(()=>{

  }, [])

  const goToHome = () => {
    setLoginCheck(false)
    setListingCheck(false)
    setCreateCheck(false)
    setHomeCheck(true)
    setProfileCheck(false)
    setOpenCheck(false)
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
    setProfileCheck(false)
  }
  const goToCreate = () => {
    setCreateCheck(true)
    setLoginCheck(false)
    setHomeCheck(false)
    setListingCheck(false)
  }
  return(
    <>
    <main className='column'>
      <LoginButton />
      <LogoutButton />
      <button onClick ={goToHome}>Listings</button>
      <button onClick={openProfile}>My Profile</button>
      {profileCheck ? (<Profile />):null}
      <button onClick={changeAddCheck}>Add a New Listing</button>
      <button className='btn btn-info btn-sm col-xs-2 margin-left' onClick={changeAddCheck}>Create New Listing</button>
      {addCheck ? (
        <div>
        <NewListing />
        <button className='btn btn-danger btn-sm' onClick={closeNewForm}>Close Form</button>
      </div>):null}
    </main>
        {homeCheck ? (<div>
          <Nav />
          <Home />

          </div>
        ): null}
        {openCheck ? (
        <div className='container'>
        <h1>Replay!</h1>
        <h7>"Where video games always have extra lives"</h7>
        <div className="create">
            <ul>
              <h5>Press Start to enter..</h5>
            <li><button id="start" type="button" className="btn btn-success" onClick={goToHome}>Start</button></li>
            </ul>
            </div>
          </div>
        ):null}
    </>
  )
}

export default App;
