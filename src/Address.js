import { useEffect } from "react";
import useFetch from "./useFetch";

const Address = ({position}) => {
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + position.lat+ "&lon=" + position.lng
    const { error, isPending, data } = useFetch(url)

    return (
        <div class="address">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { data && <p>{data.display_name}</p> }
        </div>
      );
}
 
export default Address;