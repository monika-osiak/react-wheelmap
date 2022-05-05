import { Marker, Popup} from "react-leaflet"

const InaccessibleMarker= ({point}) => {
    return <Marker position={[point.lat, point.long]}>
        <Popup>
            <h3>{point.name}</h3>
            <p>{point.description}</p>
        </Popup>
    </Marker>
  }

export default InaccessibleMarker;