import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Home from './components/Home'
import logo from './rg.jpg'
import NewListing from './components/NewListing'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

const App = () => {
  const [item, setItem]=useState('')
  const [homeCheck, setHomeCheck]=useState(false)
  const [loginCheck, setLoginCheck]=useState(false)
  const [listingCheck, setListingCheck]=useState(false)
  const [createCheck, setCreateCheck]=useState(false)
  const [startCheck, setStartCheck] = useState(false)
  const [addCheck, setAddCheck]= useState(false)

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
    <main className='column'>
      <LoginButton />
      <LogoutButton />
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
        ):<>
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
          </>}
    </>
  )
}

export default App;
