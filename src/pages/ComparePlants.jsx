import { useLocation, useNavigate } from "react-router-dom";
import PlantCardDetail from "../components/PlantCardDetail";
import { useState, useEffect } from "react";
import { useFavorites } from "../context/FavouritesContext";

function ComparePlants() {

    const location = useLocation();
    const navigate = useNavigate();
    const ids = location.state?.ids ?? [];
    const [plants, setPlants] = useState([]);
    console.log('Id passati:', ids);

    //gestione dei preferiti
    const { favorites, toggleFavorite } = useFavorites();


    useEffect(() => {

        //se non ci sono elementi, torniamo alla home
        if (ids.length < 2) {
            navigate('/');
            return;
        }


        //funzione per ottenere i dati dall'API
        const selectedPlantsFetch = async () => {

            try {
                const data = await Promise.all(
                    ids.map(async (id) => {
                        const response = await fetch(`http://localhost:3001/plants/${id}`);
                        const dataJson = await response.json();
                        return dataJson.plant;
                    })
                );
                console.log('Array di elementi selezionati', data);
                setPlants(data);
                console.log('plants è =', plants)
            } catch (error) {
                console.error('Errore nel recupero dati delle piante', error);
            }

        };

        selectedPlantsFetch();

    }, [ids, navigate])

    return (
        <div>
            <h2 className="plant-list-title">Confronta le piante! <img src="/icons/compare.png" alt="compare" /></h2>


            <div className={`compare-list-container ${plants.length === 4 ? 'four-compare-items' : ''}`}>

                {plants.length > 0 ? plants.map((p, index) => <PlantCardDetail key={p.id ?? index}
                    data={p}
                    isFavorite={favorites.some(fav => p.id === fav.id)}
                    onToggleFavorite={toggleFavorite}
                />) : <p>Comparatore vuoto!</p>}

            </div>

            <button className="btn-sort-items margin-bottom" onClick={() => navigate(-1)}>Torna indietro</button>
        </div>

    )
}

export default ComparePlants;