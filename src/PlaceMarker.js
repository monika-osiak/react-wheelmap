import { Marker, Popup} from "react-leaflet"
import PlaceIcon from "./PlaceIcon";

const PlaceMarker = ({ place }) => {
    const places_url = 'https://new-fast-wheelmap.herokuapp.com/places/';
    const places_url_local = 'http://127.0.0.1:8000/places/';

    const handleClick = () => {
        fetch(places_url + place.id, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    }

    return <Marker 
        position={[place.lat, place.lng]} 
        icon={PlaceIcon()}
    >
        <Popup closeButton={false} maxHeight={400}>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <h4>Stopień dostosowania</h4>
            <p>Czy toaleta jest przystosowana dla osób na wózkach aktywnych? {'\t'} {place.toaletaAkt ? "✅" : "❌"}</p>
            <p>Czy toaleta jest przystosowana dla osób na wózkach elektrycznych? {place.toaletaElektr ? "✅" : "❌"}</p>
            <p>Czy dostępne jest miejsce parkingowe dla osoby z niepełnosprawnością? {place.parking ? "✅" : "❌"}</p>
            <p>Czy na miejscu nie ma schodów lub dostępna jest winda? {place.winda ? "✅" : "❌"}</p>
            <p>Czy wejścia nie mają progów? {place.brakProgow ? "✅" : "❌"}</p>
            <p>Czy główne funkcje tego miejsca są dostępne dla osoby na wózku aktywnym? {place.swobodnyAkt ? "✅" : "❌"}</p>
            <p>Czy główne funkcje tego miejsca są dostępne dla osoby na wózku elektrycznym?{place.swobodnyElektr ? "✅" : "❌"}</p>
            <p>Czy drzwi są wystarczająco szerokie dla wózka aktywnego? {place.drzwiAkt ? "✅" : "❌"}</p>
            <p>Czy drzwi są wystarczająco szerokie dla wózka elektrycznego? {place.drzwiElektr ? "✅" : "❌"}</p>
            <p>Czy teren jest pozbawiony nierówności? {place.rownyTeren ? "✅" : "❌"}</p>
            <button onClick={handleClick}>Usuń lokalizację</button>
        </Popup>
    </Marker>
  }

export default PlaceMarker;