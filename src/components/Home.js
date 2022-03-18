
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
        <button className="btn btn-success justify-content-between btn-sm btn-block">Buy it Now</button><br />
        <button className="btn btn-danger justify-content-between btn-sm btn-block" onClick={ (event)=>{ handleDelete(listing.id)}}>Delete</button><br />
        <button className="btn btn-warning justify-content-between btn-sm btn-block" onClick={editViewOn}>Edit Listing</button><br />
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
