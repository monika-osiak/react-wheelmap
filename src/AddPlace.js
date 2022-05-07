import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const AddPlace = () => {
    const { lat, lng } = useParams();
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat+ "&lon=" + lng
    const { error, isPending, data: addressData } = useFetch(url)
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const accessibility = { isHardcoded: true };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const place = {
            name,
            description,
            lat,
            lng,
            country: addressData.address.country,
            voivodeship: addressData.address.state,
            city: addressData.address.city,
            postal_code: addressData.address.postcode,
            street: addressData.address.road,
            number: addressData.address.house_number,
            accessibility
        };
        setLoading(true);
        
        fetch('http://localhost:8000/places', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(place)
        }).then(() => {
          setLoading(false);
          navigate('/');
        })
    }

    return ( 
        <div>
            <h2>Oceń dostępność miejsca</h2>
            <form onSubmit={handleSubmit}>
                <label>Adres: </label>
                { addressData && <p>{ prettifyAddress(addressData) }</p>}
                { addressData && <p>{ JSON.stringify(addressData) }</p>}
                <label>Nazwa:</label>
                <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Opis:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Kategoria:</label>
                { !loading && <button>Dodaj punkt</button>}
                { loading && <button disabled>Dodawanie punktu...</button>}
            </form>
        </div>
    );
}
 
export default AddPlace;