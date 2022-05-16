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
        <Popup closeButton={false} maxWidth={200}>
            <Address position={position}/>
            <Link to={`/points?lat=${position.lat}&lng=${position.lng}`}><button style={{backgroundColor: 'red'}}>Dodaj punkt niedostępny</button></Link>
            <Link to={`/places?lat=${position.lat}&lng=${position.lng}`}><button style={{backgroundColor: 'gold', color: 'black'}}>Oceń dostępność miejsca</button></Link>
        </Popup>
      </Marker>
    )
  }

export default HandleClickOnMap;