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
        <h1 className='title2'>Replay!</h1>
        <h4 className='motto2'>"Where video games always have extra lives"</h4>
        {addCheck ? (
          <div>
          <NewListing />
          <button onClick={closeNewForm}>Close Form</button>
        </div>):null}
      </>
    )
}

export default Nav
