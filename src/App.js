import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Home from './components/Home'
import logo from './rg.jpg'
import NewListing from './components/NewListing'


const App = () => {
  const [item, setItem]=useState('')
  const [homeCheck, setHomeCheck]=useState(false)
  const [loginCheck, setLoginCheck]=useState(false)
  const [listingCheck, setListingCheck]=useState(false)
  const [createCheck, setCreateCheck]=useState(false)
  const [startCheck, setStartCheck] = useState(false)

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
        {homeCheck ? (<div>
          <Nav />
          <Home />
          
          </div>
        ):<>
        <div className='container'>
        <h1>Replay!</h1>
        <h7>"Where video games always have extra lives"</h7>
        <img src={logo} alt='' />
        <div className="create">
            <ul>
              <h7>Press Start to enter..</h7>
            <li><button id="start" type="button" className="btn btn-success" onClick={goToHome}>Start</button></li>
            </ul>
            </div>
          </div>
          </>}
    </>
  )
}

export default App;
