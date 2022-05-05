import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navbar from './Navbar';
import InaccessiblePoints from './InaccessiblePoints';
import AddInaccessiblePoint from './AddInaccessiblePoint';

function App() {
  let data = require('./points.json');

  return (
    <div id="map">
      <Navbar/>
      <MapContainer center={[52.246501, 21.085599]} zoom={15} scrollWheelZoom={false}>
        <AddInaccessiblePoint/>
        <InaccessiblePoints points={data.points}></InaccessiblePoints>
        <Marker position={[52.246501, 21.085599]}>
          <Popup>
            <h3>Kobielska 23</h3>
            An accessible building. <br /> Yay!
          </Popup>
        </Marker>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
   
  );
}

export default App;
