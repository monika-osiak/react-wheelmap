import InaccessibleMarker from "./InaccessibleMarker";

const InaccessiblePoints = ({ points }) => {
    return ( 
        <div className="points">
            {points.map(point => (<InaccessibleMarker point={point} />))}
        </div>
    );
}
 
export default InaccessiblePoints;