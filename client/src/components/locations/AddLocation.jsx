import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'

function AddLocation({onNewLocation, user}) {
    const navigate = useNavigate()
    const userId = user.id
  
    const [locationData, setLocationData] = useState({
    name: "",
    description: "",
    image: "",
    user_id: userId
    })

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    })
      .then((r) => r.json())
      .then(newLocation => {
          onNewLocation(newLocation)
          navigate('/locations')
        }
    )
}

    return (
        <div>
            <h1>Where would you like to go</h1>

            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='City and state ...'
            value={locationData.name}
            onChange={(e) => setLocationData({...locationData, name: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Description ...'
            value={locationData.description}
            onChange={(e) => setLocationData({...locationData, description: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Image url ...'
            value={locationData.image}
            onChange={(e) => setLocationData({...locationData, image: e.target.value})}
            />
            <Button onClick={handleSubmit}>Add Location</Button>
            </form>
            
            
        </div>
  )
}

export default AddLocation