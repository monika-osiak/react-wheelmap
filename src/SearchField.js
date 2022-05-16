import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const SearchField = () => {
  const provider = new OpenStreetMapProvider(); 
  const handleLocation = (label, position) => {
    return `<div className="location">
      <p>${label}</p>
      <a href=#/points?lat=${position.lat}&lng=${position.lng}><button>Dodaj punkt</button><a>
      <a href=#/places?lat=${position.lat}&lng=${position.lng}><button>Dodaj miejsce</button><a>
    </div>`
  }
  const searchControl = new GeoSearchControl({
    provider: provider,
    position: 'topright',
    showPopup: false,
    autoComplete: true, // optional: true|false  - default true
    autoCompleteDelay: 250,
    showMarker: false,
    marker: {
      draggable: false,
    },
    popupFormat: ({ query, result }) => handleLocation(result.label, { lat: result.y, lng: result.x }),
    maxMarker: 1,
    autoClose: true,
    retainZoomLevel: true,
    maxSuggestions: 5,
    keepResult: false,
    resultFormat: ({ result }) => {
      const maxLength = 30;
      if (result.label.length <= maxLength) {
        return result.label;
      } else {
        return result.label.substring(0, maxLength) + '...';
      }
    },
    updateMap: !0
  });

  const map = useMap();
  const yourEventHandler = (e) => {
    console.log(e.location);
    var popup = L.popup({closeButton: false})
      .setLatLng([e.location.y, e.location.x])
      .setContent(handleLocation(e.location.label, { lat: e.location.y, lng: e.location.x }))
      .openOn(map);
  }

  map.on('geosearch/showlocation', yourEventHandler);

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
}
 
export default SearchField;