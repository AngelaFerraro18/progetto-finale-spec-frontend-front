import { createContext, useState, useContext } from "react";

const FavouritesContext = createContext();

//context per la gestione dei preferiti
function FavouritesProvider({ children }) {

    //variabile di stato per settare gli elementi preferiti
    const [favourites, setFavourites] = useState([]);


    function toggleFavourite(plant) {

        setFavourites(prev =>
            prev.find(p => p.id === plant.id) ? prev.filter(p => p.id !== plant.id) : [...prev, plant]
        );
    }

    return (
        <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
            {children}
        </FavouritesContext.Provider>
    )
}


function useFavorites() {
    return useContext(FavouritesContext);
}

export { FavouritesProvider, useFavorites };