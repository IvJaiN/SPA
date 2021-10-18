import './Header.scss'

import Navigation from "../navigation/Navigation";

const Header = props => {
    return (
        <header className={props.classes}>
            <Navigation classes='header-menu'/>
            <div className="header__content">
                {props.children}
            </div>
        </header>
    );
};

export default Header;
