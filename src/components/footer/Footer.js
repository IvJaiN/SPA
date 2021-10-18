import Navigation from "../navigation/Navigation";
import LogoImage from "../logo-image/LogoImage";

import './Footer.scss'

const Footer = props => {
    return (
        <footer className='footer'>
            <Navigation classes='footer-menu'/>
            <div className="footer-img">
                <LogoImage color='black'/>
            </div>
        </footer>
    );
};

export default Footer;
