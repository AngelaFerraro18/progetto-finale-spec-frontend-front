import { useEffect, useState } from "react";

function PlantsList() {

    const [list, setList] = useState([]);



    useEffect(() => {
        // funzione per ottenere i data dall'API
        const plantsFetch = async () => {

            try {
                const response = await fetch('http://localhost:3001/plants');
                const dataPlants = await response.json();
                console.log(dataPlants);
                setList(dataPlants);
            } catch (error) {
                console.error('Errore nel recuperare i dati del fetch', error);
            }

        }

        //richiamo la funzione
        plantsFetch();
    }
        , []);

    return (
        <>
            <h1>Le piante verdi più comuni!</h1>

            <ul>
                {list.map(plant => <li key={plant.id}>
                    <h4>{plant.title}</h4>
                    <p>{plant.category}</p>
                </li>)}
            </ul>
        </>
    )
}

export default PlantsList;