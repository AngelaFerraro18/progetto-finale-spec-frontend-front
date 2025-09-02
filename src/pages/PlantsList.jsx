import { useCallback, useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavouritesContext";

function PlantsList() {

    // variabile di stato per la lista delle piante 
    const [list, setList] = useState([]);

    // variabile di stato per la ricerca per titolo
    const [plantTitle, setPlantTitle] = useState('');

    //variabile di stato per categoria
    const [category, setCategory] = useState('');

    //variabile di stato per ordinamento in ordine alfabetico
    const [sortedList, setSortedList] = useState(true);

    //variabile di stato per ordinare in base a 'title' o 'category'
    const [sortField, setSortField] = useState('title');

    //variabile di stato per la selezione di due elementi da comparare
    const [selectedPlants, setSelectedPlants] = useState([]);

    //gestione dei preferiti
    const { favorites, toggleFavorite } = useFavorites();


    const navigate = useNavigate();

    //memoizzo il fetch con useCallback 
    const plantsFetch = useCallback(async (search) => {

        try {

            //definisco le variabili per la ricerca tramite search(che poi sarà plantTitle) e categoria
            const queryTitle = search ? `search=${search.toLowerCase()}` : '';
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
    }, [category]);

    //funzione del debounce
    function debounce(func, delay) {
        let timer;
        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(value)
            }, delay);
        };
    };

    //fecth con il debounce applicato
    const debouncedFetch = useCallback(debounce(plantsFetch, 500), [plantsFetch]);

    //con useEffect applico il tutto per il filtro ricerca
    useEffect(() => {
        debouncedFetch(plantTitle);
    }, [plantTitle, debouncedFetch]);


    //funzione per ordinare la lista in ordine alfabetico
    function handleSort(field) {
        const sortedPlants = [...list].sort((a, b) => sortedList ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));

        setList(sortedPlants);
        setSortedList(!sortedList);
        setSortField(field);
    }

    //funzione per la selezione di due piante
    function handleSelect(plant) {
        setSelectedPlants(prev => {
            if (prev.find(p => p.id === plant.id)) {
                //se già esiste viene rimossa
                return prev.filter(p => p.id !== plant.id)
            }
            //altrimenti aggiungo le piante
            return [...prev, plant];
        })
    };

    //funzione per passare alla pagina di comparazione con il btn
    function handleCompare() {
        if (selectedPlants.length >= 2) {
            const ids = selectedPlants.map(p => p.id);
            navigate('/confronta-le-piante', { state: { ids } })
        }
    }

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

            {/* bottone per ordinare la lista in ordine alfabetico e viceversa per title*/}
            <button onClick={() => handleSort('title')}>Ordina per titolo: ({sortField === 'title' ? (sortedList ? 'A - z' : 'Z - a') : 'A - z'})</button>

            {/* bottone per ordinare la lista in ordine alfabetico e viceversa per category*/}
            <button onClick={() => handleSort('category')}>Ordina per categoria: ({sortField === 'category' ? (sortedList ? 'A - z' : 'Z - a') : 'A - z'})</button>

            {/* bottone per andare alla pagina di comparazione */}
            <button onClick={handleCompare} disabled={selectedPlants.length < 2}>Confronta!</button>

            <ul>
                {list.map(plant =>
                    <li key={plant.id}>
                        <PlantCard
                            data={plant}
                            onSelect={handleSelect}
                            isSelected={selectedPlants.some(p => p.id === plant.id)}
                            isFavorite={favorites.some(p => p.id === plant.id)}
                            onToggleFavorite={toggleFavorite}
                            showSelect={true}
                        />

                    </li>
                )}
            </ul>
        </>
    )
}

export default PlantsList;