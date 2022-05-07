import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AddPoint = () => {
    // const { lat, lng } = useParams();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ category, setCategory ] = useState('inne');
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const point = { lat, lng, name, description, category };
        setLoading(true);
        
        fetch('http://localhost:8000/points', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(point)
        }).then(() => {
          setLoading(false);
          navigate('/');
        })
      }

    return ( 
        <div>
            <h2>Dodaj nowy punkt niedostępny</h2>
            <form onSubmit={handleSubmit}>
                <label>Lat: </label>
                <p>{ lat }</p>
                <label>Long: </label>
                <p>{ lng }</p>
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
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="na stałe">na stałe</option>
                    <option value="awaria">awaria</option>
                    <option value="remont">remont</option>
                    <option value="inne">inne</option>
                </select>
                { !loading && <button>Dodaj punkt</button>}
                { loading && <button disabled>Dodawanie punktu...</button>}
            </form>
        </div>
    );
}
 
export default AddPoint;