import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlantCardDetail from "../components/PlantCardDetail";
import { useFavorites } from "../context/FavouritesContext";


function PlantDetail() {

    //seleziono l'id corrispondente all'elemento scelto 
    const { id } = useParams();

    //variabile di stato per rappresentare i dettagli di una pianta
    const [plant, setPlant] = useState([]);

    //salvo useNavigate in una variabile per tornare alla pagina precedente
    const navigate = useNavigate();

    //gestione dei preferiti
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {

        const plantFetch = async () => {

            try {
                const response = await fetch(`http://localhost:3001/plants/${id}`);
                const dataPlant = await response.json();

                console.log(dataPlant);
                setPlant(dataPlant.plant);

            } catch (error) {
                console.error('Errore nel recuperare i dati del fetch', error);
            }

        }

        //richiamo la funzione
        plantFetch();

    }, [id]);


    return (

        <div>
            <h2 className="plant-list-title">Scopri di più su questa pianta!  <img src="/icons/discover.png" alt="discover" /></h2>

            <div className="card-detail-container">

                <div>
                    <PlantCardDetail data={plant}
                        isFavorite={favorites.some(p => p.id === plant.id)}
                        onToggleFavorite={toggleFavorite}
                    />
                    <button className="btn-sort-items margin-bottom" onClick={() => navigate(-1)}>Torna indietro</button>
                </div>

            </div>
        </div>

    )
}

export default PlantDetail;