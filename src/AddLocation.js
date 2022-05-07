import { useSearchParams } from "react-router-dom";

const AddLocation = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return ( 
        <div>
            <h2>Próba przekazania adresu...</h2>
            <p>{ searchParams.get("country") }</p>
        </div>
    );
}
 
export default AddLocation;