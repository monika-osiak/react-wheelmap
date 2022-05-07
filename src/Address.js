import { useEffect } from "react";
import useFetch from "./useFetch";

const prettifyAddress = (data) => {
  let result = ""
  if (data.name !== null) {
      result = data.name + ", ";
  };
  result = result + data.address.road;
  if ("house_number" in data.address) {
      result = result + " " + data.address.house_number;
  }
  result = result + ", ";
  result = result + data.address.postcode + " ";
  result = result + data.address.city + ", ";
  result = result + data.address.country;

  return result;
}

const Address = ({position}) => {
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + position.lat+ "&lon=" + position.lng
    const { error, isPending, data } = useFetch(url)

    return (
        <div class="address">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { data && <p>{prettifyAddress(data)}</p> }
        </div>
      );
}
 
export default Address;