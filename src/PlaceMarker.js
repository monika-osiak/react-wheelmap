import { Marker, Popup} from "react-leaflet"
import PlaceIcon from "./PlaceIcon";

const PlaceMarker = ({ place }) => {
    return <Marker 
        position={[place.lat, place.long]} 
        icon={PlaceIcon()}
    >
        <Popup>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            {Object.entries(place.accessibility).map((key, value) => (<p>{key}: {value}<br/></p>))}
        </Popup>
    </Marker>
  }

export default PlaceMarker;