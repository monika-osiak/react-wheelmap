import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";

const AddPoint = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    const points_url = 'https://new-fast-wheelmap.herokuapp.com/points/';
    const points_url_local = 'http://127.0.0.1:8000/points/';

    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat+ "&lon=" + lng
    const { error, isPending, data: addressData } = useFetch(url)

    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ nameChanged, setNameChanged ] = useState(false);
    const [ description, setDescription ] = useState('');
    const [ category, setCategory ] = useState('inne');

    const handleSubmit = (e) => {
        e.preventDefault();
        const point = { lat, lng, name, description, category };
        setLoading(true);
        
        fetch(points_url, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(point)
        }).then(() => {
          setLoading(false);
          navigate('/');
        })
      }

    return ( 
        <div className="create">
            <h2>Dodaj nowy punkt niedostępny</h2>
            { addressData && <form onSubmit={handleSubmit}>
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
                <label>Opis:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <label>Kategoria:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="na stałe">na stałe</option>
                    <option value="awaria">awaria</option>
                    <option value="remont">remont</option>
                    <option value="inne">inne</option>
                </select>
                { !loading && <button 
                    onClick={(e) => {
                        if (!nameChanged && addressData.name !== null) {
                            setName(addressData.name);
                        }
                    }
                }>Dodaj punkt</button>}
                { loading && <button disabled>Dodawanie punktu...</button>}
            </form>}
        </div>
    );
}
 
export default AddPoint;