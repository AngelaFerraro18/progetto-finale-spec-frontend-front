import { useEffect, useState } from "react";

function PlantsList() {

    // variabile di stato per la lista delle piante 
    const [list, setList] = useState([]);

    // variabile di stato per la ricerca per titolo
    const [plantTitle, setPlantTitle] = useState('');

    //variabile di stato per categoria
    const [category, setCategory] = useState('');

    useEffect(() => {
        // funzione per ottenere i data dall'API
        const plantsFetch = async () => {

            try {

                //definisco le variabili per la ricerca tramite titolo e categoria
                const queryTitle = plantTitle ? `search=${plantTitle.toLowerCase()}` : '';
                const queryCategory = category ? `category=${category}` : '';

                //costruisco la query string in base a titolo e categoria selezionati
                let query = '';

                if (queryTitle && queryCategory) {
                    query = `?${queryTitle}&${queryCategory}`;
                } else if (queryTitle || queryCategory) {
                    query = `?${queryTitle || queryCategory}`
                }


                const response = await fetch(`http://localhost:3001/plants${query}`);
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
        , [plantTitle, category]);

    return (
        <>
            <h1>Le piante verdi più comuni!</h1>

            {/* campo per la ricerca tramite title  */}
            <input type="text"
                placeholder="Cerca per nome..."
                value={plantTitle}
                onChange={e => setPlantTitle(e.target.value)}
            />

            {/* select per filtrare le piante per categoria */}
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Filtra per categoria:</option>
                <option value="Piante da esterno">Piante da esterno</option>
                <option value="Piante da interno">Piante da interno</option>
                <option value="Piante grasse">Piante grasse</option>
            </select>

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