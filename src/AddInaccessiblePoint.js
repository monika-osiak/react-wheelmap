import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"


function AddInaccessiblePoint() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng)
        setPosition(e.latlng)
      }
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>
            <button>Dodaj miejsce</button>
        </Popup>
      </Marker>
    )
  }

export default AddInaccessiblePoint;