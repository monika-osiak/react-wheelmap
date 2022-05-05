import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navbar from './Navbar';
import LocationMarker from './LocationMarker';
// import * as points from "./points.json";

function App() {
  let data = require('./points.json');

  return (
    <div id="map">
      <Navbar/>
      <MapContainer center={[52.246501, 21.085599]} zoom={15} scrollWheelZoom={false}>
        {/* <LocationMarker></LocationMarker> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.points.map(point => (
          <Marker position={[point.lat, point.long]}>
            <Popup>
              <h3>{point.name}</h3>
              <p>{point.description}</p>
            </Popup>
          </Marker>
        ))}
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
