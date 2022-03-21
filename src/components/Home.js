
// import React from "react";
import {useState, useEffect} from 'react'
import NewListing from './NewListing'
import list from '../disney.jpg'
import EditListing from './EditListing'
import axios from 'axios'

const Home = () => {
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newRarity, setNewRarity] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newCondition, setNewCondition] = useState('')
  const [listings, setListings]=useState([])
  const [showEdit, setShowEdit]=useState(false)

  const editViewOn = () => {
    setShowEdit(true)
  }
  const editViewOff = () => {
    setShowEdit(false)
  }
  const handleNewListingEdit = (listingData) => {

    const postData =   {
        name:newName,
        image: newImage,
        description: newDesc,
        price: newPrice,
        rarity: newRarity,
        condition: newCondition,


      }
    axios.put(`https://re-play-back.herokuapp.com/api/listings/${listingData}`, postData
  ).then((response)=>{
      axios
        .get(`https://re-play-back.herokuapp.com/api/listings`).then((response)=>{
          setListings(response.data)
          setNewName('')
          setNewImage('')
          setNewCondition('')
          setNewPrice('')
          setNewRarity('')
          setNewDesc('')
        })
    })

  }
  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewImageChange = (event) => {
    setNewImage(event.target.value)
  }
  const handleNewPriceChange = (event) => {
    setNewPrice(event.target.value)
  }
  const handleNewDescriptionChange = (event) => {
    setNewDesc(event.target.value)
  }
  const handleNewRarityChange = (event) => {
    setNewRarity(event.target.value)
  }
  const handleNewConditionChange = (event) => {
    setNewCondition(event.target.value)
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
  },[])
    return (
      <div className='flex-container'>

    {listings.map((listing)=>{
      return <div className='card' key={listing.id}>
      <img className="card-img-top" src={listing.image} alt="Card image cap" />
      <div className="card-body">
        <h3 className="card-title text-warning">{listing.name}</h3>
        <p className="card-text text-info">{listing.description}</p>
        <p className="card-text text-info">Asking Price: {listing.price}</p>
        <p className="card-text text-info">Condition: {listing.condition}</p>
        <button className="btn btn-success justify-content-between btn-sm btn-block">Buy it Now</button><br />
        <button className="btn btn-danger justify-content-between btn-sm btn-block" onClick={ (event)=>{ handleDelete(listing.id)}}>Delete</button><br />
        <button className="btn btn-warning justify-content-between btn-sm btn-block" onClick={editViewOn}>Edit Listing</button><br />
        {showEdit ? (
          <form className='form' onSubmit={ (event) => { handleNewListingEdit(listing.id)}}>
          Name: <input type='text' name='name' placeholder={listing.name} onChange={handleNewNameChange} /><br />
          Image: <input type='text' name='image' placeholder={listing.image}onChange={handleNewImageChange} /><br />
          Description: <input type='text' placeholder={listing.description}name='description' onChange={handleNewDescriptionChange} /><br />
          Price: <input type='number' placeholder={listing.price}name='price' onChange={handleNewPriceChange} /><br />
          Rarity: <input type='text' placeholder={listing.rarity} name='rarity' onChange={handleNewRarityChange} /><br />
          Condition: <input type='text' placeholder={listing.condition} name='condition' onChange={handleNewConditionChange} /><br />
          <button onClick={editViewOff}>Close Edit</button>
          <input type='submit' value='submit'/>
          </form>


        ):null}
      </div>
      </div>
    })}
    </div>
  )

}

export default Home
