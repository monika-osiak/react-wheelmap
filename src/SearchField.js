import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import SearchResultIcon from './SearchResultIcon';
import { Link } from 'react-router-dom';
import L from 'leaflet';

const SearchField = () => {
  const provider = new OpenStreetMapProvider(); 
  const handleLocation = (label, position) => {
    return `<div className="location">
      <p>${label}</p>
      <a href=/points?lat=${position.lat}&lng=${position.lng}><button>Dodaj punkt</button><a>
      <a href=/places?lat=${position.lat}&lng=${position.lng}><button>Dodaj miejsce</button><a>
    </div>`
  }
  const searchControl = new GeoSearchControl({
    provider: provider,
    position: 'topright',
    showPopup: true,
    autoComplete: true, // optional: true|false  - default true
    autoCompleteDelay: 1,
    showMarker: true,
    marker: {
      icon: SearchResultIcon(),
      draggable: false,
    },
    popupFormat: ({ query, result }) => handleLocation(result.label, { lat: result.y, lng: result.x }),
  });

  const map = useMap();
  // const yourEventHandler = (e) => {
  //   console.log(e.location);
  //   var popup = L.popup()
  //     .setLatLng([e.location.y, e.location.x])
  //     .setContent(handleLocation(e.location.label, { lat: e.location.y, lng: e.location.x }))
  //     .openOn(map);
  // }

  // map.on('geosearch/showlocation', yourEventHandler);

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
}
 
export default SearchField;