import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet'
import Navbar from './Navbar';
import InaccessiblePoints from './InaccessiblePoints';
import AddInaccessiblePoint from './AddInaccessiblePoint';
import Places from './Places';
import useFetch from './useFetch';

function App() {
  const { error: errorPoints, loading: loadingPoints, data: points } = useFetch('http://localhost:8000/points')
  const { error: errorPlaces, loading: loadingPlaces, data: places } = useFetch('http://localhost:8000/places')

  return (
    <div id="map">
      <Navbar/>
      <MapContainer center={[52.246501, 21.085599]} zoom={15} scrollWheelZoom={false}>
        <AddInaccessiblePoint/>
        {points && <InaccessiblePoints points={points}></InaccessiblePoints>}
        {places && <Places places={places}></Places>}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
   
  );
}

export default App;
