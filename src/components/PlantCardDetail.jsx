function PlantCardDetail({ data }) {
    console.log(data);
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
        </div>
    )
}

export default PlantCardDetail;