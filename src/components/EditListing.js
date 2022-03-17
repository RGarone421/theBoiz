import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
const EditListing = () => {
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newRarity, setNewRarity] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newCondition, setNewCondition] = useState('')
  const [listings, setListings]=useState([])

  const handleNewListingEdit = (listingData) => {

    axios.put(`http://re-play-back.herokuapp.com/api/listings/${listingData.id}`,
    {
      name: newName,
      image: newImage,
      price: newPrice,
      rarity: newRarity,
      condition: newCondition,
      descirption: newDesc,

    }).then((response)=>{
      axios
        .get('http://re-play-back.herokuapp.com/api/listings').then((response)=>{
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

  const handleDelete = (listingData) => {
    axios
      .delete(`http://re-play-back.herokuapp.com/api/listings/${listingData._id}`)
      .then(()=> {
        axios
          .get('http://re-play-back.herokuapp.com/api/listings').then((response)=> {
            setListings(response.data)
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
  return(
    <div>
    <form className='form' onSubmit={handleNewListingEdit}>
    Username: <input type='text'/><br />
    Name: <input type='text' onChange={handleNewNameChange} /><br />
    Image: <input type='text' onChange={handleNewImageChange} /><br />
    Description: <input type='text' onChange={handleNewDescriptionChange} /><br />
    Rarity: <input type='text' onChange={handleNewDescriptionChange} /><br />
    Condition: <input type='text' onChange={handleNewConditionChange} /><br />
    <input type='submit' value='submit'/>
    </form>
    </div>
  )
}

export default EditListing
