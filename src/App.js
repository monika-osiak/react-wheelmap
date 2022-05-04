import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navbar from './Navbar';
import LocationMarker from './LocationMarker';

function App() {
  return (
    <div id="map">
      <Navbar/>
      <MapContainer center={[52.246501, 21.085599]} zoom={15} scrollWheelZoom={false}>
        <LocationMarker></LocationMarker>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.246501, 21.085599]}>
          <Popup>
            <h3>Kobielska 23</h3>
            An accessible building. <br /> Yay!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
   
  );
}

export default App;
