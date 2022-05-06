import PlaceMarker from "./PlaceMarker";

const Places = ({ places }) => {
    return ( 
        <div className="places">
            {places.map(place => (
                <div className="place" key={place.id}>
                    <PlaceMarker place={place} />
                </div>
            ))}
        </div>
    );
}
 
export default Places;