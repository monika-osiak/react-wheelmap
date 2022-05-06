import { useParams } from "react-router-dom";

const AddPoint = () => {
    const { lat, lng } = useParams();

    return ( 
        <h2>You want to add point {lat} {lng}</h2>
    );
}
 
export default AddPoint;