import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddLocation from "./AddLocation";
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

const getAddressQuery = (data) => {
  let query = "/location?";
  query += `country=${data.address.country}&`;
  query += `city=${data.address.city}&`;
  query += `postcode=${data.address.postcode}&`;
  query += `street=${data.address.road}`;
  if ("house_number" in data.address) {
    query += `&number=${data.address.house_number}`
  }
  if (data.name !== null) {
    query += `&name=${data.name}`;
  }
  return query;
}

const Address = ({position}) => {
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + position.lat+ "&lon=" + position.lng
    const { error, isPending, data } = useFetch(url)
    let addressQuery = "?";

    return (
        <div class="address">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { data && <p>{prettifyAddress(data)}</p> }
          { data && <Link to={getAddressQuery(data)}>Przekaz adres</Link>}
        </div>
      );
}
 
export default Address;