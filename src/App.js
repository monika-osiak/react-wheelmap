import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navbar from './Navbar';
import InaccessiblePoints from './InaccessiblePoints';
import AddInaccessiblePoint from './AddInaccessiblePoint';
import Places from './Places';

function App() {
  let data1 = require('./points.json');
  let data2 = require('./places.json');

  return (
    <div id="map">
      <Navbar/>
      <MapContainer center={[52.246501, 21.085599]} zoom={15} scrollWheelZoom={false}>
        <AddInaccessiblePoint/>
        <InaccessiblePoints points={data1.points}></InaccessiblePoints>
        <Places places={data2.places}></Places>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
   
  );
}

export default App;
