import { Marker, Popup} from "react-leaflet"
import PlaceIcon from "./PlaceIcon";

const PlaceMarker = ({ place }) => {
    return <Marker 
        position={[place.lat, place.lng]} 
        icon={PlaceIcon()}
    >
        <Popup>
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
        </Popup>
    </Marker>
  }

export default PlaceMarker;