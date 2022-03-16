import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import logo from './rg.jpg'



const App = () => {
  const [item, setItem]=useState('')
  const [homeCheck, setHomeCheck]=useState(false)
  const [loginCheck, setLoginCheck]=useState(false)
  const [listingCheck, setListingCheck]=useState(false)
  const [createCheck, setCreateCheck]=useState(false)
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newRarity, setNewRarity] = useState('')
  const [newCondition, setNewCondition] = useState('')
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
        {homeCheck ? (<>
          <Home />
          <p>Welcome Home!</p>
      </>  ):<>
        <div className='container'>
        <h1>Re-Play</h1>
        <img src={logo} alt='' />
        <div className="create">
            <ul>
            <li><button id="start" type="button" className="btn btn-success" onClick={goToHome}>Start</button></li>
            </ul>
            </div>
          </div>
          </>}
    </>
  )
}

export default App;
