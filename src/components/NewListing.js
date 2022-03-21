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
        description: newDesc,
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
    Name: <input placeholder='Mr. Game and Watch' type='text' onChange={handleNewNameChange} /><br />
    Image: <input placeholder='Must be img url' type='text' onChange={handleNewImageChange} /><br />
    Description: <input placeholder='Any Flaws?' type='text' name='description' onChange={handleNewDescriptionChange} /><br />
    Price: <input placeholder='$ USD' type='number' name='price' onChange={handleNewPriceChange} /><br />
    Rarity (1-10): <input placeholder='10 = Unicorn' type='number' onChange={handleNewRarityChange} /><br />
    Condition:
    <input placeholder='Lets be honest here' type='text' name='condition' onChange={handleNewConditionChange}/><br />
    <input className=' submit btn btn-success btn-sm' type='submit' value='submit'/><br />

    </form>
    </div>
  )
}

export default NewListing
