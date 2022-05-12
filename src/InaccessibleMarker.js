import { Marker, Popup} from "react-leaflet"
import InaccessibleIcon from "./InaccessibleIcon"

const InaccessibleMarker= ({point}) => {
    return <Marker 
        position={[point.lat, point.lng]} 
        icon={InaccessibleIcon()}
    >
        <Popup closeButton={false}>
            <h3>{point.name}</h3>
            <p>{point.description}</p>
        </Popup>
    </Marker>
  }

export default InaccessibleMarker;