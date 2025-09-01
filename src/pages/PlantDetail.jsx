import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlantCardDetail from "../components/PlantCardDetail";

function PlantDetail() {

    //seleziono l'id corrispondente all'elemento scelto 
    const { id } = useParams();

    //variabile di stato per rappresentare i dettagli di una pianta
    const [plant, setPlant] = useState([]);


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
            <PlantCardDetail data={plant} />
        </>
    )
}

export default PlantDetail;