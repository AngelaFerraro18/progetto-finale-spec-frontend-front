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
                <li><strong>Difficoltà di gestione:</strong> {careLevel}</li>
                <li><strong>E' una pianta tossica?:</strong> {toxicity ? 'Sì o.o' : 'No :-)'}</li>
            </ul>


            {/* pulsantino per aggiungere l'elemento ai preferiti */}
            <img className="favorite-img" src={isFavorite ? '/icons/sprout.png' : '/icons/sprout-line.png'}
                alt={isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
                onClick={() => onToggleFavorite(data)}
            />
        </div>
    )
}

export default PlantCardDetail;