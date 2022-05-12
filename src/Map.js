import { MapContainer, TileLayer } from 'react-leaflet'
import Places from './Places';
import InaccessiblePoints from './InaccessiblePoints';
import HandleClickOnMap from './HandleClickOnMap';
import useFetch from './useFetch';
import SearchField from './SearchField';

const Map = () => {
    const { error: errorPoints, loading: loadingPoints, data: points } = useFetch('https://new-fast-wheelmap.herokuapp.com/points/')
    const { error: errorPlaces, loading: loadingPlaces, data: places } = useFetch('https://new-fast-wheelmap.herokuapp.com/places/')

    return ( 
        <MapContainer center={[52.246501, 21.085599]} zoom={15} scrollWheelZoom={false}>
            <HandleClickOnMap/>
            <SearchField/>
            {points && console.log(points)}
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