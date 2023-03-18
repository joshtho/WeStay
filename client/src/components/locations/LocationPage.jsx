import React from 'react'
import {useParams, Link} from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'
import Button from 'react-bootstrap/Button'

function LocationPage({onHandleDelete, user}) {
const params = useParams()
const locationId = parseInt(params.id)

const userLocationObj = user.locations.find(location => location.id === locationId)
const stays = userLocationObj.lodgings.filter(lodging => lodging.user_id === user.id)

const listStays = () => (stays.map(stay => (
    <LodgingTile 
    key={stay.id} 
    stay={stay} 
    onHandleDelete={onHandleDelete} 
    />
)))

return (
    <div>
        
        {userLocationObj ? 
        <div>
            <h1>{userLocationObj.name}</h1>
            {listStays()}
            {/* <Link to={`/lodgings/${locationId}`} >
                <Button>Add new lodging</Button>
            </Link> */}
            
        </div>
         : "" }
    </div>
    )
}
      
export default LocationPage