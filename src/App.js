import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import AddPoint from './AddPoint';
import AddPlace from './AddPlace';
import './App.css';
import Map from './Map';
import Navbar from './Navbar';
import NotFound from './NoFound';
import useFetch from './useFetch';

function App() {
  const { error: errorPoints, loading: loadingPoints, data: points } = useFetch('http://localhost:8000/points')
  const { error: errorPlaces, loading: loadingPlaces, data: places } = useFetch('http://localhost:8000/places')

  return (
    <Router>
      <div id="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" element={<Map points={points} places={places} />} />
          <Route path="/points/:lat/:lng" element={<AddPoint/>}/>
          <Route path="/places/:lat/:lng" element={<AddPlace/>}/>
          <Route path="*" element={<NotFound />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
