import './App.css';
import Map from './Map';
import Navbar from './Navbar';
import useFetch from './useFetch';

function App() {
  const { error: errorPoints, loading: loadingPoints, data: points } = useFetch('http://localhost:8000/points')
  const { error: errorPlaces, loading: loadingPlaces, data: places } = useFetch('http://localhost:8000/places')

  return (
    <div id="map">
      <Navbar/>
      <Map points={points} places={places} />
    </div>
  );
}

export default App;
