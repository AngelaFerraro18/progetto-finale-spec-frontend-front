import { createContext, useState, useContext } from "react";

const FavouritesContext = createContext();

//context per la gestione dei preferiti
function FavouritesProvider({ children }) {

    //variabile di stato per settare gli elementi preferiti
    const [favorites, setFavorites] = useState([]);


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