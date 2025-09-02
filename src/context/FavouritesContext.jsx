import { createContext, useState, useContext, useEffect } from "react";

const FavouritesContext = createContext();

//context per la gestione dei preferiti
function FavouritesProvider({ children }) {

    //variabile di stato per leggere gli elementi preferiti in localStorage
    const [favorites, setFavorites] = useState(() => {
        const storedPlants = localStorage.getItem('favorites');
        return storedPlants ? JSON.parse(storedPlants) : [];
    });

    //ogni volta che la lista dei preferiti si aggiorna, aggiorniamo localStorage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);


    function toggleFavorite(plant) {

        setFavorites(prev =>
            prev.find(p => p.id === plant.id) ? prev.filter(p => p.id !== plant.id) : [...prev, plant]
        );
    }

    return (
        <FavouritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavouritesContext.Provider>
    )
}


function useFavorites() {
    return useContext(FavouritesContext);
}

export { FavouritesProvider, useFavorites };