import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useNavigate, useParams} from 'react-router-dom'

function AddLodging({onNewLodging, locations, user}) {
    const navigate = useNavigate()
    // const params = useParams()
    // const locationId = parseInt(params.id)
    // const currentLocation = locations.find(location => location.id === locationId)
 
  const [lodgingData, setLodgingData] = useState({
    dates: "",
    guests: 0,
    image: "",
    link: "",
    season: "",
    location_id: 0,
    user_id: user.id
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/lodgings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lodgingData),
    })
      .then((r) => r.json())
      .then(newLodging => {
          onNewLodging(newLodging)

          navigate(`/locations`)
        }
    )
}

const locationSelect = () => locations.map(location => (
    <option key={location.id} value={location.id} >{location.name}</option>
))
    return (
        <div>
            {locations ?
            <>
            
            <h1>Your new stay in </h1>
            <Form.Select 
            aria-label="Choose city" 
            onChange={e => setLodgingData({...lodgingData, location_id: e.target.value})}
            >
                <option>Open this select menu</option>
                {locationSelect()}
            </Form.Select>

            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Dates of trip MM/DD/YYYY-MM/DD/YYYY ...'
            value={lodgingData.dates}
            onChange={(e) => setLodgingData({...lodgingData, dates: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Image url ...'
            value={lodgingData.image}
            onChange={(e) => setLodgingData({...lodgingData, image: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Link url ...'
            value={lodgingData.link}
            onChange={(e) => setLodgingData({...lodgingData, link: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='What Season is this trip? ...'
            value={lodgingData.season}
            onChange={(e) => setLodgingData({...lodgingData, season: e.target.value})}
            />
            <h5>Estimated exact number of guests</h5>
            <input 
            type="text" 
            placeholder='Estimated exact number of guests ...'
            value={lodgingData.guests}
            onChange={(e) => setLodgingData({...lodgingData, guests: e.target.value})}
            />
            <Button onClick={handleSubmit}>Add your lodging</Button>
            </form>
            </>
            : <h1>Loading..</h1>
        }
            
            
        </div>
  )
}

export default AddLodging