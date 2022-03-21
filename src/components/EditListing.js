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
    listingData.preventDefault()
    const postData =   {
        name:newName,
        image: newImage,
        description: newDesc,
        price: newPrice,
        rarity: newRarity,
        condition: newCondition,


      }
      console.log(postData);
    axios.put(`https://re-play-back.herokuapp.com/api/listings/${listingData.id}`, postData
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

  const handleDelete = (listingData) => {
    axios
      .delete(`http://re-play-back.herokuapp.com/api/listings/${listingData.id}`)
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
    {newName}-{newDesc}-{newPrice}-{newRarity}-{newCondition}
    <form className='form' onSubmit={handleNewListingEdit}>
    Name: <input type='text' name='name' onChange={handleNewNameChange} /><br />
    Image: <input type='text' name='image'onChange={handleNewImageChange} /><br />
    Description: <input type='text' name='description' onChange={handleNewDescriptionChange} /><br />
    Price: <input type='number' name='price' onChange={handleNewPriceChange} /><br />
    Rarity: <input type='text' name='rarity' onChange={handleNewRarityChange} /><br />
    Condition: <input type='text' name='condition' onChange={handleNewConditionChange} /><br />
    <input type='submit' value='submit'/>
    </form>
    </div>
  )
}

export default EditListing
