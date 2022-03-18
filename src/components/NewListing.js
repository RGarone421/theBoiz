import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
const NewListing = () => {
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newRarity, setNewRarity] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newCondition, setNewCondition] = useState('')
  const [listings, setListings]=useState([])


  const handleNewListingSubmit = (event) => {
    event.preventDefault()
    const postData =   {
        name:newName,
        image: newImage,
        descirption: newDesc,
        price: newPrice,
        rarity: newRarity,
        condition: newCondition,
      }
      console.log(postData);
    axios.post('https://re-play-back.herokuapp.com/api/listings', postData
  ).then((response)=>{
      axios
        .get('https://re-play-back.herokuapp.com/api/listings').then((response)=>{
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
      .delete(`https://re-play-back.herokuapp.com/api/listings/${listingData.id}`)
      .then(()=> {
        axios
          .get('https://re-play-back.herokuapp.com/api/listings').then((response)=> {
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
    {newName}-{newDesc}-{newPrice}-{newRarity}-{newCondition}
    <form className='form' onSubmit={handleNewListingSubmit}>
    Name: <input type='text' onChange={handleNewNameChange} /><br />
    Image: <input type='text' onChange={handleNewImageChange} /><br />
    Description: <input type='text' onChange={handleNewDescriptionChange} /><br />
    Price: <input type='text' name='price' onChange={handleNewPriceChange} /><br />
    Rarity (1-10): <input type='text' onChange={handleNewRarityChange} /><br />
    Condition:
    <input type='text' name='condition' onChange={handleNewConditionChange}/><br />
    <input type='submit' value='submit'/><br />

    </form>
    </div>
  )
}

export default NewListing
