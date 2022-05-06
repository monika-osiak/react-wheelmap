import InaccessibleMarker from "./InaccessibleMarker";

const InaccessiblePoints = ({ points }) => {
    return ( 
        <div className="points">
            {points.map(point => (
                <div className="inaccessible-place" key={point.id}>
                    <InaccessibleMarker point={point} />
                </div>
            ))}
        </div>
    );
}
 
export default InaccessiblePoints;