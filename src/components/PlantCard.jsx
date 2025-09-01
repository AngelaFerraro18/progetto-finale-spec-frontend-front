import { Link } from "react-router-dom";


function PlantCard({ data, isSelected, onSelect }) {

    const { id, title, category } = data;

    return (
        <>
            <Link to={`/plant/${id}`}>
                <h4>{title}</h4>
                <p>{category}</p>
            </Link>

            {/* checkbox per selezionare 2 elementi da confrontare */}
            <input type="checkbox"
                checked={isSelected}
                onChange={() => onSelect(data)}
            />
        </>

    )
}

export default PlantCard;