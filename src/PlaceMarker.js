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
        <Popup closeButton={false}>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <h4>Stopień dostosowania</h4>
            <p>{place.toaletaAkt ? "✅" : "❌"} Toaleta przystosowana dla osób na wózkach aktywnych</p>
            <p>{place.toaletaElektr ? "✅" : "❌"} Toaleta przystosowana dla osób na wózkach elektrycznych</p>
            <p>{place.parking ? "✅" : "❌"} Parking dla osób z niepełnosprawnością</p>
            <p>{place.winda ? "✅" : "❌"} Brak schodów lub winda</p>
            <p>{place.brakProgow ? "✅" : "❌"} Brak progów</p>
            <p>{place.swobodnyAkt ? "✅" : "❌"} Możliwość swodobnego poruszania się na wózku aktywnym</p>
            <p>{place.swobodnyElektr ? "✅" : "❌"} Możliwość swodobnego poruszania się na wózku elektrycznym</p>
            <p>{place.drzwiAkt ? "✅" : "❌"} Drzwi wystarczająco szerokie dla wózka aktywnego</p>
            <p>{place.drzwiElektr ? "✅" : "❌"} Drzwi wystarczająco szerokie dla wózka elektrycznego</p>
            <p>{place.rownyTeren ? "✅" : "❌"} Brak nierówności terenu</p>
            <button onClick={handleClick}>Usuń lokalizację</button>
        </Popup>
    </Marker>
  }

export default PlaceMarker;