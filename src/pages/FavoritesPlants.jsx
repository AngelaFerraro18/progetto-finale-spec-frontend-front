import PlantCard from "../components/PlantCard";
import { useFavorites } from "../context/FavouritesContext";

function FavoritesPlants() {

    //destrutturo per ottenere ciò che mi serve per la gestione dei preferiti
    const { favorites, toggleFavorite } = useFavorites();

    if (favorites.length === 0) {
        return <div className="empty-list">
            <p >La tua lista è vuota. </p>
            <img src="/icons/flower.png" alt="flower" />
        </div>
    }

    return (
        <>
            <h1 className="plant-list-title">Le tue piante preferite! <img src="/icons/plant-love.png" alt="plant-love" /> </h1>

            <ul className="plant-list-display">
                {favorites.map(plant =>
                    <li className="plant-list-el" key={plant.id}>
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