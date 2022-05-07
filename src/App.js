import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import AddPoint from './AddPoint';
import AddPlace from './AddPlace';
import './App.css';
import Map from './Map';
import Navbar from './Navbar';
import NotFound from './NoFound';
import AddLocation from './AddLocation';

function App() {

  return (
    <Router>
      <div id="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" element={<Map />} />
          <Route path="/points/:lat/:lng" element={<AddPoint/>}/>
          <Route path="/places/:lat/:lng" element={<AddPlace/>}/>
          <Route path="/location" element={<AddLocation/>}/>
          <Route path="*" element={<NotFound />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
