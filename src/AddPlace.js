import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const AddPlace = () => {
    const { lat, lng } = useParams();
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat+ "&lon=" + lng
    const { error, isPending, data } = useFetch(url)

    return ( 
        <div>
            <h2>Oceń dostępność miejsca</h2>
            { data && <p>{ data.display_name }</p>}
        </div>
    );
}
 
export default AddPlace;