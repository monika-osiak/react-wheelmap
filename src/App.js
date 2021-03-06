import { HashRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import AddPoint from './AddPoint';
import AddPlace from './AddPlace';
import './App.css';
import Map from './Map';
import Navbar from './Navbar';
import NotFound from './NoFound';
import About from './About';

function App() {

  return (
    <Router>
      <div id="app">
        <Navbar/>
        <Switch>
          <Route exact path="" element={<Map />} />
          <Route exact path="/react-wheelmap" element={<Map />} />
          <Route path="/about/" element={<About/>} />
          <Route path="/points/" element={<AddPoint/>}/>
          <Route path="/places/" element={<AddPlace/>}/>
          <Route path="*" element={<NotFound />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
