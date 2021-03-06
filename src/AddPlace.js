import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";

const AddPlace = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    const places_url = 'https://new-fast-wheelmap.herokuapp.com/places/';
    const places_url_local = 'http://127.0.0.1:8000/places/';

    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat+ "&lon=" + lng
    const { error, isPending, data: addressData } = useFetch(url)

    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ nameChanged, setNameChanged ] = useState(false);
    const [ description, setDescription ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ streetChanged, setStreetChanged ] = useState(false);
    const [ number, setNumber ] = useState('');
    const [ numberChanged, setNumberChanged ] = useState(false);
    const [ postcode, setPostcode ] = useState('');
    const [ postcodeChanged, setPostcodeChanged ] = useState(false);
    const [ city, setCity ] = useState('');
    const [ cityChanged, setCityChanged ] = useState(false);
    const [ country, setCountry ] = useState('');
    const [ countryChanged, setCountryChanged ] = useState(false);

    const [ toaletaAkt, setToaletaAkt ] = useState(true);
    const [ toaletaElektr, setToaletaElektr ] = useState(true);
    const [ parking, setParking ] = useState(true);
    const [ winda, setWinda ] = useState(true);
    const [ brakProgow, setBrakProgow ] = useState(true);
    const [ swobodnyAkt, setSwobodnyAkt ] = useState(true);
    const [ swobodnyElektr, setSwobodnyElektr ] = useState(true);
    const [ drzwiAkt, setDrzwiAkt ] = useState(true);
    const [ drzwiElektr, setDrzwiElektr ] = useState(true);
    const [ rownyTeren, setRownyTeren ] = useState(true);

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
            toaletaAkt,
            toaletaElektr,
            parking,
            winda,
            brakProgow,
            swobodnyAkt,
            swobodnyElektr,
            drzwiAkt,
            drzwiElektr,
            rownyTeren
        };
        setLoading(true);
        
        fetch(places_url, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(place)
        }).then(() => {
          setLoading(false);
          navigate('/');
        })
    }

    const setAddress = () => {
        if (!nameChanged && addressData.name !== null) {
            setName(addressData.name);
        }
        if (!countryChanged) {
            setCountry(addressData.address.country);
        }
        if (!cityChanged && addressData.address.city !== null) {
            setCity(addressData.address.city);
        }
        if (!postcodeChanged) {
            setPostcode(addressData.address.postcode);
        }
        if (!streetChanged) {
            setStreet(addressData.address.road);
        }
        if (!numberChanged && addressData.address.house_number !== null) {
            setNumber(addressData.address.number);
        }
    }

    return ( 
        <div className="create">
            <h2>Oce?? dost??pno???? miejsca</h2>
            { addressData && <form 
                onSubmit={handleSubmit}
            >
                <label>Nazwa:</label>
                <input 
                    type="text" 
                    required
                    value={!nameChanged ? addressData.name : name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameChanged(true);
                    }}
                />
                <h4>Adres</h4>
                <label>Ulica:</label>
                <input 
                    type="text" 
                    required
                    value={!streetChanged ? addressData.address.road : street}
                    onChange={(e) => {
                        setStreet(e.target.value);
                        setStreetChanged(true);
                    }}
                />
                <label>Numer budynku:</label>
                <input 
                    type="text"
                    value={!numberChanged ? addressData.address.house_number : number}
                    onChange={(e) => {
                        setNumber(e.target.value);
                        setNumberChanged(true);
                    }}
                />
                <label>Kod pocztowy:</label>
                <input 
                    type="text" 
                    required
                    value={!postcodeChanged ? addressData.address.postcode : postcode}
                    onChange={(e) => {
                        setPostcode(e.target.value);
                        setPostcodeChanged(true);
                    }}
                />
                <label>Miasto:</label>
                <input 
                    type="text" 
                    required
                    value={!cityChanged ? addressData.address.city : city}
                    onChange={(e) => {
                        setCity(e.target.value);
                        setCityChanged(true);
                    }}
                />
                <label>Kraj:</label>
                <input 
                    type="text" 
                    required
                    value={!countryChanged ? addressData.address.country : country}
                    onChange={(e) => {
                        setCountry(e.target.value);
                        setCountryChanged(true);
                    }}
                />
                <h4>Informacje</h4>
                <label>Og??lny opis:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="accessibility">
                    <div>
                        <label>Czy toaleta jest przystosowana dla os??b na w??zkach aktywnych?</label>
                        <input type="checkbox" 
                            defaultChecked={toaletaAkt}
                            onChange={(e) => setToaletaAkt(!toaletaAkt)}
                        />
                    </div>
                    <div>
                        <label>Czy toaleta jest przystosowana dla os??b na w??zkach elektrycznych?</label>
                        <input type="checkbox" 
                            defaultChecked={toaletaElektr}
                            onChange={(e) => setToaletaElektr(!toaletaElektr)}
                        />
                    </div>
                    <div>
                        <label>Czy dost??pne jest miejsce parkingowe dla osoby z niepe??nosprawno??ci???</label>
                        <input type="checkbox" 
                            defaultChecked={parking}
                            onChange={(e) => setParking(!parking)}
                        />
                    </div>
                    <div>
                        <label>Czy na miejscu nie ma schod??w lub dost??pna jest winda?</label>
                        <input type="checkbox" 
                            defaultChecked={winda}
                            onChange={(e) => setWinda(!winda)}
                        />
                    </div>
                    <div>
                        <label>Czy wej??cia nie maj?? prog??w?</label>
                        <input type="checkbox" 
                            defaultChecked={brakProgow}
                            onChange={(e) => setBrakProgow(!brakProgow)}
                        />
                    </div>
                    <div>
                        <label>Czy g????wne funkcje tego miejsca s?? dost??pne dla osoby na w??zku aktywnym?</label>
                        <input type="checkbox" 
                            defaultChecked={swobodnyAkt}
                            onChange={(e) => setSwobodnyAkt(!swobodnyAkt)}
                        />
                    </div>
                    <div>
                        <label>Czy g????wne funkcje tego miejsca s?? dost??pne dla osoby na w??zku elektrycznym?</label>
                        <input type="checkbox" 
                            defaultChecked={swobodnyElektr}
                            onChange={(e) => setSwobodnyElektr(!swobodnyElektr)}
                        />
                    </div>
                    <div>
                        <label>Czy drzwi s?? wystarczaj??co szerokie dla w??zka aktywnego?</label>
                        <input type="checkbox" 
                            defaultChecked={drzwiAkt}
                            onChange={(e) => setDrzwiAkt(!drzwiAkt)}
                        />
                    </div>
                    <div>
                        <label>Czy drzwi s?? wystarczaj??co szerokie dla w??zka elektrycznego?</label>
                        <input type="checkbox" 
                            defaultChecked={drzwiElektr}
                            onChange={(e) => setDrzwiElektr(!drzwiElektr)}
                        />
                    </div>
                    <div>
                        <label>Czy teren jest pozbawiony nier??wno??ci?</label>
                        <input type="checkbox" 
                            defaultChecked={rownyTeren}
                            onChange={(e) => setRownyTeren(!rownyTeren)}
                        />
                    </div>
                </div>
                { !loading && <button onClick={setAddress}>Dodaj miejsce</button>}
                { loading && <button disabled>Dodawanie miejsca...</button>}
            </form>}
        </div>
    );
}
 
export default AddPlace;