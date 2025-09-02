function PlantCardDetail({ data, onToggleFavorite, isFavorite, }) {

    const { title, category, description, sunlight, watering, careLevel, scientificName, temperature, humidity, fertilizer, growthRate, maxHeight, toxicity } = data;

    return (
        <div>
            <h3>{title}</h3>
            <p>Nome scientifico: {scientificName}</p>
            <p>Categoria: {category}</p>
            <p>Descrizione: {description}</p>
            <p>Luce: {sunlight}</p>
            <p>Quantità d'acqua: {watering}</p>
            <p>Temperature ideali: {temperature}</p>
            <p>Umidità: {humidity}</p>
            <p>Fertilizzazione: {fertilizer}</p>
            <p>Velocità di crescita: {growthRate}</p>
            <p>Altezza massima: {maxHeight} cm</p>
            <p>Difficoltà di gestione: {careLevel}</p>
            <p>E' una pianta tossica? : {toxicity ? 'Sì o.o' : 'No :-)'}</p>

            {/* pulsantino per aggiungere l'elemento ai preferiti */}
            <img className="favorite-img" src={isFavorite ? '/icons/sprout.png' : '/icons/sprout-line.png'}
                alt={isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
                onClick={() => onToggleFavorite(data)}
            />
        </div>
    )
}

export default PlantCardDetail;