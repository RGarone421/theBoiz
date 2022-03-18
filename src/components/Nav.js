import React,{useState} from 'react'
import NewListing from './NewListing'

const Nav = () => {
  const [addCheck, setAddCheck]= useState(false)

  const changeAddCheck = () => {
    setAddCheck(true)
  }
  const closeNewForm = () => {
    setAddCheck(false)
  }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><h4>Replay! - Buy and Sell</h4></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
      </div>
    </div>
  </nav>

      </>
    )
}

export default Nav
