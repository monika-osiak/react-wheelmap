import { useEffect } from "react";
import useFetch from "./useFetch";

const pretifyAddress = (address) => {
  let result = address.road + " "
  result = result + address.house_number + ", "
  result = result + address.postcode + " "
  result = result + address.city + ", "
  result = result + address.country
  return result
}

const Address = ({position}) => {
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + position.lat+ "&lon=" + position.lng
    const { error, isPending, data } = useFetch(url)

    return (
        <div class="address">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { data && <p>{pretifyAddress(data.address)}</p> }
        </div>
      );
}
 
export default Address;