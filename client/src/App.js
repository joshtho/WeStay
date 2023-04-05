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
  const [user, setUser] = useState({})
  const [locations, setLocations] = useState([])
  const [lodgings, setLodgings] = useState([])
  const [loading, setLoading] = useState(true)
  const [suggest, setSuggest] = useState(false)

  useEffect(() => {
    fetch('/locations')
    .then(r => r.json())
    .then(setLocations)
    fetch('/lodgings')
    .then(r => r.json())
    .then(setLodgings)
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
    setLodgings([...lodgings, newLodging])
    setUser({...user, lodgings: [...user.lodgings, newLodging]})
  }
  
  function handleDeleteLodging(id) {
    const updatedLodgings = lodgings.filter(lodgings => lodgings.id !== id)
    const updateUserLodgings = user.lodgings.filter(lodgings => lodgings.id !== id)
    setLodgings(updatedLodgings)
    setUser({...user, lodgings: updateUserLodgings})
  }

  function handleUpdate(updatedObj) {
    const updatedLodgings = lodgings.map(lodging => {
      if (lodging.id === updatedObj.id) {
        return updatedObj
      } else {
        return lodging
      }
    })
    
    const updateUserLodgings = user.lodgings.filter(lodgings => lodgings.id !== updatedObj.id)
    setLodgings(updatedLodgings)
    setUser({...user, lodgings: [...updateUserLodgings, updatedObj]})
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <Router>
      <NavBar loggedIn={loggedIn} user={user} setUser={setUser} setLoggedIn={setLoggedIn} setSuggest={setSuggest} setLoading={setLoading}/>
      <Routes>
          <Route path="/" element={<HomePage loading={loading} />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage setLoggedIn={setLoggedIn} setUser={setUser} setLoading={setLoading} />} />
          <Route path="/locations" element={<LocationsList locations={locations} />} />
          <Route path="/lodgings" element={<LodgingList user={user} onHandleDelete={handleDeleteLodging}/>} />
          <Route 
            path="/lodgings/:id/edit" 
            element={
              <EditLodging 
              lodgings={lodgings} 
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