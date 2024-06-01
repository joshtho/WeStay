import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'
import Container from 'react-bootstrap/esm/Container'

function LodgingList({user, onHandleDelete, setLoading }) {
  const userLodgings = () => 
    user.lodgings.map(lodging => (
      <>
      <LodgingTile 
      key={lodging.id} 
      lodging={lodging} 
      onHandleDelete={onHandleDelete} 
      setLoading={setLoading} 
      />
      </>
    ))
  return (
    <>
    <Container className='card-grid'>
        {userLodgings()}
    </Container>
    <Link className='btm-btn' as={Link} to="/lodgings/add">Add New</Link>
    </>
  )
}

export default LodgingList;