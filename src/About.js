import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <h2>Wheelmap 2.0</h2>
            <p>Celem aplikacji jest umożliwienie zaznaczania miejsc niedostępnych w mieście, np. kładka bez windy, remont chodnika, niedziałająca winda, aby ostrzec innych.</p>
            <p>Aplikacja umożliwia również ocenę dostępności danej lokalizacji, np. urzędu czy restauracji.</p>
            <div className="pins">
                <div className="pin">
                    <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png" alt="Fioletowa pinezka" />
                    <p>Twoja lokalizacja</p>
                </div>
                <div className="pin">
                    <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png" alt="Niebieska pinezka" />
                    <p>Miejsce kliknięcia na mapę</p>
                </div>
                <div className="pin">
                    <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png" alt="Czerwona pinezka" />
                    <p>Punkt niedostępny</p>
                </div>
                <div className="pin">
                    <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png" alt="Żółta pinezka" />
                    <p>Miejsce z oceną dostępności</p>
                </div>
            </div>
            <p>Aby dodać punkt, kliknij w wybrane miejsce na mapie i wybierz odpowiednią opcję.</p>
            <p>Możesz również skorzystać z wyszukiwarki miejsc w prawym górnym rogu.</p>
            <button style={{display:"grid", margin:"40px auto"}}><Link to="/" style={{color:"white", textDecoration:"none"}}>Przejdź do mapy</Link></button>
        </div>
    );
}
 
export default About;