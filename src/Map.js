import { MapContainer, TileLayer } from 'react-leaflet'
import Places from './Places';
import InaccessiblePoints from './InaccessiblePoints';
import HandleClickOnMap from './HandleClickOnMap';


const Map = ({ points, places }) => {
    return ( 
        <MapContainer center={[52.246501, 21.085599]} zoom={15} scrollWheelZoom={false}>
            <HandleClickOnMap/>
            {points && <InaccessiblePoints points={points}></InaccessiblePoints>}
            {places && <Places places={places}></Places>}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}
 
export default Map;