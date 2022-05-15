import { Marker, Popup } from "react-leaflet"
import InaccessibleIcon from "./InaccessibleIcon"

const InaccessibleMarker= ({point}) => {
    const points_url = 'https://new-fast-wheelmap.herokuapp.com/points/';
    const points_url_local = 'http://127.0.0.1:8000/points/';

    const handleClick = () => {
        fetch(points_url + point.id, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    }

    return <Marker 
        position={[point.lat, point.lng]} 
        icon={InaccessibleIcon()}
    >
        <Popup closeButton={false}>
            <h3>{point.name}</h3>
            <p>{point.description}</p>
            <button onClick={handleClick}>Usuń punkt</button>
        </Popup>
    </Marker>
  }

export default InaccessibleMarker;