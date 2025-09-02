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
            const response = await fetch(`http://localhost:3001/plants/${id}`);
            const dataPlant = await response.json();
            console.log(dataPlant);
            setPlant(dataPlant.plant);
        }

        //richiamo la funzione
        plantFetch();

    }, [id]);


    return (
        <>
            <PlantCardDetail data={plant}
                isFavorite={favorites.some(p => p.id === plant.id)}
                onToggleFavorite={toggleFavorite}
            />
            <button onClick={() => navigate(-1)}>Torna indietro</button>
        </>
    )
}

export default PlantDetail;