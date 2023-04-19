import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'

function LodgingList({user, onHandleDelete, setLoading }) {
  const userLodgings = () => 
    user.lodgings.map(lodging => (
      <>
      <LodgingTile key={lodging.id} stay={lodging} onHandleDelete={onHandleDelete} setLoading={setLoading} />
      </>
    ))
  return (
    <div className='row'>
        {userLodgings()}
        <h1>Add a stay!</h1>
        <Link to="/lodgings/add">
            <Button>Add Lodging</Button>
        </Link>

    </div>
  )
}

export default LodgingList