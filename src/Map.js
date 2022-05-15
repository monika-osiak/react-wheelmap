import { MapContainer, TileLayer } from 'react-leaflet'
import Places from './Places';
import InaccessiblePoints from './InaccessiblePoints';
import HandleClickOnMap from './HandleClickOnMap';
import useFetch from './useFetch';
import SearchField from './SearchField';
import FindMe from './FindMe';

const Map = () => {
    const points_url = 'https://new-fast-wheelmap.herokuapp.com/points/';
    const points_url_local = 'http://127.0.0.1:8000/points/';

    const places_url = 'https://new-fast-wheelmap.herokuapp.com/places/';
    const places_url_local = 'http://127.0.0.1:8000/places/';

    const { error: errorPoints, loading: loadingPoints, data: points } = useFetch(points_url);
    const { error: errorPlaces, loading: loadingPlaces, data: places } = useFetch(places_url);

    return ( 
        <MapContainer center={[52.229902301977944, 21.01143836975098]} zoom={13} scrollWheelZoom={false}>
            <FindMe/>
            <HandleClickOnMap/>
            <SearchField/>
            {points && console.log(points)}
            {places && console.log(places)}
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