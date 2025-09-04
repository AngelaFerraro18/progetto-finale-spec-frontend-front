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

    //variabile di stato per la gestione del caricamento(loader)
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    //memoizzo il fetch con useCallback 
    const plantsFetch = useCallback(async (search) => {

        try {
            //imposto il loading a true
            setLoading(true);

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

            //imposto una durata del loading 
            setTimeout(() => {
                setLoading(false);
            }, 400);

        } catch (error) {
            console.error('Errore nel recuperare i dati del fetch', error);
            setLoading(false);
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
        setLoading(true);
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
            <h1 className="plant-list-title">Le piante verdi più comuni!
                <img src="/icons/plant.png" alt="plant" />
            </h1>
            <div className="filters-container">

                <div className="sort-container">
                    {/* campo per la ricerca tramite title  */}
                    <input className="filter-input" type="text"
                        placeholder="Cerca per nome..."
                        value={plantTitle}
                        onChange={e => setPlantTitle(e.target.value)}
                    />

                    {/* select per filtrare le piante per categoria */}
                    <select className="filter-input" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">Filtra per categoria:</option>
                        <option value="Piante da esterno">Piante da esterno</option>
                        <option value="Piante da interno">Piante da interno</option>
                        <option value="Piante grasse">Piante grasse</option>
                    </select>

                    {/* bottone per andare alla pagina di comparazione */}
                    <button className="btn-sort-items" onClick={handleCompare} >{selectedPlants.length < 1
                        ? 'Comparatore vuoto'
                        : selectedPlants.length === 1
                            ? <span>Aggiungi un altro elemento! <span className="compare-num">{selectedPlants.length}</span></span>
                            : <span>Vai al comparatore! <span className="compare-num">{selectedPlants.length}</span></span>}</button>
                </div>


                <div>
                    <p>Ordina per: </p>

                    <div className="sort-btn-container">
                        {/* bottone per ordinare la lista in ordine alfabetico e viceversa per title*/}
                        <button className="btn-sort-items display-flex-leaves-btn" onClick={() => handleSort('title')}>
                            Titolo: {sortField === 'title' ? (sortedList ? (<img className="leaf-sort" src="/icons/leaf-up.png" alt="leaf-up" />) : (<img className="leaf-sort" src="/icons/leaf-down.png" alt="leaf-down" />)) : (<img className="leaf-sort" src="/icons/leaf-up.png" alt="leaf-up" />)}</button>

                        {/* bottone per ordinare la lista in ordine alfabetico e viceversa per category*/}
                        <button className="btn-sort-items display-flex-leaves-btn" onClick={() => handleSort('category')}>
                            Categoria: {sortField === 'category' ? (sortedList ? (<img className="leaf-sort" src="/icons/leaf-up.png" alt="leaf-up" />) : (<img className="leaf-sort" src="/icons/leaf-down.png" alt="leaf-down" />)) : (<img className="leaf-sort" src="/icons/leaf-up.png" alt="leaf-up" />)}</button>
                    </div>
                </div>

            </div>

            <ul className="plant-list-display">
                {loading
                    ? (
                        <div className="loader-container">
                            <p>Caricamento in corso...</p>
                            <img src="/icons/leaves-round.png" alt="leaves-round" />
                        </div>
                    )
                    : list.length > 0 ? (list.map(plant =>
                        <li className="plant-list-el" key={plant.id}>
                            <PlantCard
                                data={plant}
                                onSelect={handleSelect}
                                isSelected={selectedPlants.some(p => p.id === plant.id)}
                                isFavorite={favorites.some(p => p.id === plant.id)}
                                onToggleFavorite={toggleFavorite}
                                showSelect={true}
                            />

                        </li>
                    )) :
                        (<div className="empty-list">
                            <p>Non è stato trovato un elemento corrispondente.</p>
                            <img src="/icons/plant-search.png" alt="plant-search" />
                        </div>)}
            </ul>
        </>
    )
}

export default PlantsList;