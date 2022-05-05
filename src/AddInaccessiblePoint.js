import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import Address from "./Address"


function AddInaccessiblePoint() {
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
            <button>Dodaj miejsce</button>
        </Popup>
      </Marker>
    )
  }

export default AddInaccessiblePoint;