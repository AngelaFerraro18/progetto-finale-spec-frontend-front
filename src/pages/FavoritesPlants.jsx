import PlantCard from "../components/PlantCard";
import { useFavorites } from "../context/FavouritesContext";

function FavoritesPlants() {

    //destrutturo per ottenere ciò che mi serve per la gestione dei preferiti
    const { favorites, toggleFavorite, showSelect } = useFavorites();

    if (favorites.length === 0) {
        return <p>Non hai ancora scelto nessuna pianta!</p>
    }

    return (
        <>
            <h1>Le tue piante preferite!</h1>
            <ul>
                {favorites.map(plant =>
                    <li key={plant.id}>
                        <PlantCard
                            data={plant}
                            isFavorite={true}
                            onToggleFavorite={toggleFavorite}
                            showSelect={false}
                        />
                    </li>
                )}
            </ul>

        </>
    )
}

export default FavoritesPlants;