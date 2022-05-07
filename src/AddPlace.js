import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";

const AddPlace = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat+ "&lon=" + lng
    const { error, isPending, data: addressData } = useFetch(url)
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ postcode, setPostcode ] = useState('');
    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');
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
            country,
            city,
            postcode,
            street,
            number,
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
        <div className="create">
            <h2>Oceń dostępność miejsca</h2>
            { addressData && <form onSubmit={handleSubmit}>
                <label>Nazwa:</label>
                <input 
                    type="text" 
                    required
                    value={name === '' && addressData.name !== null ? addressData.name : name}
                    onChange={(e) => setName(e.target.value)}
                />
                <h4>Adres:</h4>
                <label>Ulica:</label>
                <input 
                    type="text" 
                    required
                    value={street === '' ? addressData.address.road : street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <label>Numer budynku:</label>
                <input 
                    type="text"
                    value={number === '' && ("house_number" in addressData.address) ? addressData.address.house_number : number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <label>Kod pocztowy:</label>
                <input 
                    type="text" 
                    required
                    value={postcode === '' ? addressData.address.postcode : postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                />
                <label>Miasto:</label>
                <input 
                    type="text" 
                    required
                    value={city === '' ? addressData.address.city : city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>Kraj:</label>
                <input 
                    type="text" 
                    required
                    value={country === '' ? addressData.address.country : country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <h4>Informacje:</h4>
                <label>Opis:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                { !loading && <button>Dodaj punkt</button>}
                { loading && <button disabled>Dodawanie punktu...</button>}
            </form>}
        </div>
    );
}
 
export default AddPlace;