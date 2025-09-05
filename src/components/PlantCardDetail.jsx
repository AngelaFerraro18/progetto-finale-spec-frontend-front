import React from "react";

function PlantCardDetail({ data, onToggleFavorite, isFavorite, }) {

    const { title, image, category, description, sunlight, watering, careLevel, scientificName, temperature, humidity, fertilizer, growthRate, maxHeight, toxicity } = data;

    return (
        <div className="detail-card">
            <h3>{title}</h3>

            <img className="plant-image" src={`/plants/${image}`} alt={title} />

            <h4>Scheda della pianta:</h4>
            <ul>
                <li><strong>Nome scientifico:</strong> {scientificName}</li>
                <li><strong>Categoria:</strong> {category}</li>
                <li><strong>Descrizione:</strong> {description}</li>
                <li><strong>Luce:</strong> {sunlight}</li>
                <li><strong>Quantità d'acqua:</strong> {watering}</li>
                <li><strong>Temperature ideali:</strong> {temperature}</li>
                <li><strong>Umidità:</strong> {humidity}</li>
                <li><strong>Fertilizzazione:</strong> {fertilizer}</li>
                <li><strong>Velocità di crescita:</strong> {growthRate}</li>
                <li><strong>Altezza massima:</strong> {maxHeight} cm</li>
                <li className="leaves-rate-container"><strong>Difficoltà di gestione:</strong>
                    {/* rating di difficoltà con le foglie piene/vuote da 1 a 5 */}
                    <div>
                        {Array.from({ length: 5 }, (_, i) => (
                            <img key={i} className="leaves-rate"
                                src={i < careLevel ? "/icons/leaf-full.png" : "/icons/leaf-empty.png"}
                                alt={i < careLevel ? "Foglia piena" : "Foglia vuota"}
                            />
                        ))}
                    </div>
                </li>
                <li className="toxicity-container"><strong>E' una pianta tossica?:</strong> {toxicity
                    ? <div className="toxicity-image-container">Sì <img className="toxicity-icons" src="/icons/poisonous.png" alt="death-plant" /></div>
                    : <div className="toxicity-image-container">No <img className="toxicity-icons" src="/icons/nontoxic.png" alt="non-toxic-plant" /></div>}</li>
            </ul>


            {/* pulsantino per aggiungere l'elemento ai preferiti */}
            <img className="favorite-img" src={isFavorite ? '/icons/sprout.png' : '/icons/sprout-line.png'}
                alt={isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
                onClick={() => onToggleFavorite(data)}
            />
        </div>
    )
}

export default React.memo(PlantCardDetail);