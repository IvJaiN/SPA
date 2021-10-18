import {Link} from "react-router-dom";

import './CoffeeListItem.scss'
import img from '../../../image/coffee-item.jpg'

const CoffeeListItem = props => {

    const {name, weight, manufacturer, price, path} = props.coffeeData

    return (
        <Link to={path} className='coffee-list__item'>
            <div className="coffee-list__item-img">
                <img src={img} alt=""/>
            </div>
            <h4 className="coffee-list__item-title">{`${name} ${weight} kg`}</h4>
            <div className="coffee-list__item-manufacture">{manufacturer}</div>
            <div className="coffee-list__item-price">{price}</div>
        </Link>
    );
};

export default CoffeeListItem;
