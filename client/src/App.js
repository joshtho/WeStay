import './App.css';
import HomePage from './components/static/HomePage';
import LoginPage from './components/navigation/LoginPage';
import { useEffect, useState } from 'react';
import LocationsList from './components/locations/LocationsList';
import NavBar from './components/navigation/NavBar'
import EditLodging from './components/lodging/EditLodging';
import AddLodging from './components/lodging/AddLodging';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/navigation/SignupPage';
import LodgingList from './components/lodging/LodgingList';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({lodgings: []})
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/locations')
    .then(r => r.json())
    .then(setLocations)
    
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          
          setUser(user);
          setLoggedIn(true)
          setLoading(false)
        })
      } else {
        console.log("no user")
        setLoading(false)
      }})
    }, []);


  function handleNewLocation(newLocation) {
    setLocations([...locations, newLocation])
  }

  function handleNewLodging(newLodging) {
    setUser({...user, lodgings: [...user.lodgings, newLodging]})
    const locationUsers = locations.find(location => location.id === newLodging.location.id).unique_users
    if (locationUsers.includes(newLodging.user.username)) {} else {
      return setLocations(locations.map(location => {
        if (location.id === newLodging.location.id) {
          return {...location, unique_users: [...locationUsers, newLodging.user.username]}
        } else {
          return location
        }
      })
      )
      
    }
  }
  
  function handleDeleteLodging(lodging) {
    const updateUserLodgings = user.lodgings.filter(lodgings => lodgings.id !== lodging.id)
    const updatedLocationUsers = locations.find(location => location.id === lodging.location.id).users.filter(user => user.id !== lodging.user.id )
    const updatedLocations = locations.map(location => {
      if (location.id === lodging.location.id) {
       return {...location, users: updatedLocationUsers}
      } else {
        return location
      }
    })

    setUser({...user, lodgings: updateUserLodgings})
    setLocations(updatedLocations)
  }

  function handleUpdate(updatedObj) {
    const updateUserLodgings = user.lodgings.filter(lodging => lodging.id !== updatedObj.id)
    setUser({...user, lodgings: [...updateUserLodgings, updatedObj]})
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <Router>
      <NavBar loggedIn={loggedIn} user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
      <Routes>
          <Route path="/" element={<HomePage loading={loading} />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage setLoggedIn={setLoggedIn} setUser={setUser} setLoading={setLoading} />} />
          <Route path="/locations" element={<LocationsList locations={locations} />} />
          <Route path="/lodgings" element={<LodgingList user={user} onHandleDelete={handleDeleteLodging} setLoading={setLoading}/>} />
          <Route 
            path="/lodgings/:id/edit" 
            element={
              <EditLodging 
              user={user} 
              onHandleUpdate={handleUpdate} 
              onHandleDelete={handleDeleteLodging}
              setLoading={setLoading}
              />
            } 
          />
          <Route 
            path="/lodgings/add" 
            element={
              <AddLodging 
              onNewLodging={handleNewLodging} 
              locations={locations} 
              setLoading={setLoading}
              onNewLocation={handleNewLocation}
              user={user}
              />
            } 
          /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;