import PlaceMarker from "./PlaceMarker";

const Places = ({ places }) => {
    return ( 
        <div className="places">
            {places.map(place => (<PlaceMarker place={place} />))}
        </div>
    );
}
 
export default Places;