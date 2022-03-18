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
    event.preventDefault(
    axios.post('localhost:3000',
    {
      name: newName,
      image: newImage,
      price: newPrice,
      rarity: newRarity,
      condition: newCondition,
      descirption: newDesc,

    }).then((response)=>{
      axios
        .get('localhost:3000').then((response)=>{
          setListings(response.data)
          setNewName('')
          setNewImage('')
          setNewCondition('')
          setNewPrice('')
          setNewRarity('')
          setNewDesc('')
        })
    })
    )
  }

  const handleDelete = (listingData) => {
    axios
      .delete(`localhost:3000/${listingData._id}`)
      .then(()=> {
        axios
          .get('localhost:3000/listings').then((response)=> {
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
    <form className='form' onSubmit={handleNewListingSubmit}>
    Username: <input type='text'/><br />
    Name: <input type='text' onChange={handleNewNameChange} /><br />
    Image: <input type='text' onChange={handleNewImageChange} /><br />
    Description: <input type='text' onChange={handleNewDescriptionChange} /><br />
    Rarity (1-10): <input type='text' onChange={handleNewDescriptionChange} /><br />
    Condition: <br />
    <input type='radio' value="Poor" name='condition' /> Poor<br />
    <input type='radio' value="Fair" name='condition' /> Fair<br />
    <input type='radio' value="Good" name='condition' /> Good<br />
    <input type='radio' value="New" name='condition' /> New<br />
    <input type='submit' value='submit'/><br />
    </form>
    </div>
  )
}

export default NewListing
