import './card.scss';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
        <div className="card">
            <Link to={`/products/${item.id}`}>
            <img className="card-img" src={item.image} alt="" />
            <h3 className="card-title">{item.title.length > 30
            ? item.title.substr(0, 27).trim() + '...'
            : item.title}</h3>
            <p className="card-text">{item.description.length > 30
                ? item.description.substr(0, 27).trim() + '...'
                : item.description
                }</p> </Link> 
            <div className="card-block">
                <p className="card-text">${item.price}</p>
                <button className="card-btn black-btn">buy</button>
            </div>
        </div>
    );
}

export default Card;