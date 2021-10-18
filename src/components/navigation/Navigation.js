import {Link} from "react-router-dom";

import './Navigation.scss'

const Navigation = props => {
    const classes = ['menu', props.classes]

    return (
        <nav className={classes.join(' ')}>
            <ul className="menu__list">
                <li className="menu__item"><Link to='/' className="menu__item-link">Coffee house</Link></li>
                <li className="menu__item"><Link to='/our-coffee' className="menu__item-link">Our coffee</Link></li>
                <li className="menu__item"><Link to='/for-your-pleasure' className="menu__item-link">For your pleasure</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
