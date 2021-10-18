import img from '../../image/about-coffee.jpg'

import Header from "../header/Header";
import Footer from "../footer/Footer";
import LogoImage from "../logo-image/LogoImage";

const Presto = () => {
    return (
        <>
            <Header classes='our-coffee'>
                <h2 className='our-coffee__title'>Our Coffee</h2>
            </Header>
            <div className="about-coffee">
                <div className="about-coffee_left">
                    <img src={img} alt=""/>
                </div>
                <div className="about-coffee_right">
                    <h3 className="about-coffee__title">About it</h3>
                    <div className="about-coffee__img">
                        <LogoImage color='black'/>
                    </div>
                    <p className="about-coffee__country"><span>Country</span>: Columbia</p>
                    <p className="about-coffee__text"><span>Description</span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="about-coffee__price">Price:  <span>15.99$</span></p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Presto;
