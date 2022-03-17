<<<<<<< HEAD
// import React from "react";
import {useState, useEffect} from 'react'
import NewListing from './NewListing'



const Home = () => {
  const [listings, setNewListings]=useState([])
    return (<>
        <div className="card" >
  <img className="card-img-top" src="..." alt="Card image cap" />
=======
import React from "react";
import list from '../disney.jpg'

function home() {
    return (
        <div className="card">
  <img className="card-img-top" src={list} alt="Card image cap" />
>>>>>>> 4b49fc40aa7444b7a843c7c273e6d48479059182
  <div className="card-body">
    <h3 className="card-title text-warning">Disney Sports Basketball</h3>
    <p className="card-text text-info">Rare Score(1-10): 11</p>
    <p className="card-text text-info">Asking Price: $550.00</p>
    <p className="card-text text-info">Condition: Great</p>
    <a href="#" className="btn btn-success d-flex justify-content-between">Buy it Now</a>
    <a href="#" className="btn btn-danger d-flex justify-content-between">Delete</a>
  </div>
</div>
<<<<<<< HEAD
<NewListing />
  </>  )
=======
  )
>>>>>>> 4b49fc40aa7444b7a843c7c273e6d48479059182
}

export default home
