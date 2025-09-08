import React from "react";
import { Link } from "react-router-dom";


function PlantCard({ data, isSelected, onSelect, onToggleFavorite, isFavorite, showSelect = true }) {

    const { id, title, category } = data;

    //creazione slug per miglior leggibilità url
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    return (
        <>
            <Link to={`/plant/${slug}-${id}`}>
                <h4 className="card-title">{title}</h4>
                <p className="card-category">Categoria: <em>{category}</em></p>
            </Link>

            {/* checkbox per selezionare 2 elementi da confrontare */}

            <div className="checkbox-container">
                {showSelect && (
                    <>
                        <input type="checkbox"
                            checked={isSelected}
                            onChange={() => onSelect(data)}
                        />
                        <span>Confronta</span>
                    </>

                )}
            </div>


            {/* pulsantino per aggiungere l'elemento ai preferiti */}
            <img className="favorite-img" src={isFavorite ? '/icons/sprout.png' : '/icons/sprout-line-white.png'}
                alt={isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
                onClick={() => onToggleFavorite(data)}
            />
        </>

    )
}

export default React.memo(PlantCard);