
// import React from "react";
import {useState, useEffect} from 'react'
import NewListing from './NewListing'
import list from '../disney.jpg'
import EditListing from './EditListing'
import axios from 'axios'

const Home = () => {

  const [listings, setListings]=useState([])
  const [showEdit, setShowEdit]=useState(false)

  const editViewOn = () => {
    setShowEdit(true)
  }
  const editViewOff = () => {
    setShowEdit(false)
  }
  const handleDelete = (listingData) => {
    console.log(listingData);
    axios
      .delete(`https://re-play-back.herokuapp.com/api/listings/${listingData}`)
      .then(()=> {
        axios
          .get('https://re-play-back.herokuapp.com/api/listings').then((response)=> {
            setListings(response.data)
          })
      })
  }
  useEffect(()=>{
    axios.get('http://re-play-back.herokuapp.com/api/listings').then((response)=>{
      setListings(response.data)
    })
  })
    return (
      <div className='container'>

    {listings.map((listing)=>{
      return <div className='card' key={listing.id}>
      <img className="card-img-top" url={listing.image} alt="Card image cap" />
      <div className="card-body">
        <h3 className="card-title text-warning">{listing.name}</h3>
        <p className="card-text text-info">{listing.description}</p>
        <p className="card-text text-info">Asking Price: {listing.price}</p>
        <p className="card-text text-info">Condition: {listing.condition}</p>
        <button className="btn btn-success d-flex justify-content-between">Buy it Now</button>
        <button className="btn btn-danger d-flex justify-content-between" onClick={ (event)=>{ handleDelete(listing.id)}}>Delete</button>
        <button className="btn btn-success d-flex justify-content-between" onClick={editViewOn}>Edit</button>
        {showEdit ? (<>
          <EditListing />
          <button onClick={editViewOff}>Close Edit</button>
        </>):null}
      </div>
      </div>
    })}
    </div>
  )

}

export default Home
