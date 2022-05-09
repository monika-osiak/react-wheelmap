import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const SearchField = () => {
  const provider = new OpenStreetMapProvider(); 
  const searchControl = new GeoSearchControl({
    provider: provider,
    position: 'topright'
  });
  const map = useMap();

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
}
 
export default SearchField;