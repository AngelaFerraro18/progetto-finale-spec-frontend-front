function PlantCard({ data }) {

    const { title, category } = data;

    return (
        <>
            <h4>{title}</h4>
            <p>{category}</p>
        </>

    )
}

export default PlantCard;