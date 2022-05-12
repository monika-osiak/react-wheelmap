import { useEffect, useState } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import L from 'leaflet'
import FindMeIcon from './FindMeIcon'


const FindMe = () => {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius, {color: "#5D1979"});
        circle.addTo(map);
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={FindMeIcon()}>
        <Popup closeButton={false}>
          Tutaj jesteś. <br />
        </Popup>
      </Marker>
    );
}
 
export default FindMe;