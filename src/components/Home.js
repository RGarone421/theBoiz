
// import React from "react";
import {useState, useEffect} from 'react'
import NewListing from './NewListing'
import list from '../disney.jpg'
import EditListing from './EditListing'

const Home = () => {
  const [listings, setNewListings]=useState([])
    return (
      <div className='container'>
        <div className="card" >
  <img className="card-img-top" src="..." alt="Card image cap" />
  <img className="card-img-top" src={list} alt="Card image cap" />
  <div className="card-body">
    <h3 className="card-title text-warning">Disney Sports Basketball</h3>
    <p className="card-text text-info">Rare Score(1-10): 11</p>
    <p className="card-text text-info">Asking Price: $550.00</p>
    <p className="card-text text-info">Condition: Great</p>
    <a href="#" className="btn btn-success d-flex justify-content-between">Buy it Now</a>
    <a href="#" className="btn btn-danger d-flex justify-content-between">Delete</a>
  </div>
</div>
<NewListing />
</div>
  )

}

export default Home
