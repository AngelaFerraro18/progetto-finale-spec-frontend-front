import { Link } from "react-router-dom";


function PlantCard({ data, isSelected, onSelect, onToggleFavorite, isFavorite, showSelect = true }) {

    const { id, title, category } = data;

    return (
        <>
            <Link to={`/plant/${id}`}>
                <h4>{title}</h4>
                <p>{category}</p>
            </Link>

            {/* checkbox per selezionare 2 elementi da confrontare */}
            {showSelect && (
                <input type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelect(data)}
                />
            )}

            {/* pulsantino per aggiungere l'elemento ai preferiti */}
            <button onClick={() => onToggleFavorite(data)}>
                {isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
            </button>
        </>

    )
}

export default PlantCard;