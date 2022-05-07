import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import { Link } from "react-router-dom"
import Address from "./Address"


function HandleClickOnMap() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng)
      }
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>
            <Address position={position}/>
            <Link to={`/points?lat=${position.lat}&lng=${position.lng}`}>Dodaj punkt</Link>
            <Link to={`/places?lat=${position.lat}&lng=${position.lng}`}>Dodaj miejsce</Link>
        </Popup>
      </Marker>
    )
  }

export default HandleClickOnMap;