import Header from "../header/Header";

import './OurCoffee.scss'
import image from '../../image/about-beans.jpg'
import LogoImage from "../logo-image/LogoImage";
import Footer from "../footer/Footer";
import CoffeeList from "../coffee-list/CoffeeList";

const OurCoffee = (props) => {
    return (
        <>
            <Header classes='our-coffee'>
                <h2 className='our-coffee__title'>Our Coffee</h2>
            </Header>
            <section className="about-beans">
                <div className="about-beans_left">
                    <img src={image} alt=""/>
                </div>
                <div className="about-beans_right">
                    <h4 className="about-beans__title">About our beans</h4>
                    <LogoImage color='black'/>
                    <p className="about-beans__subtitle">Extremity sweetness difficult behaviour he of. On disposal of
                        as landlord horrible.</p>
                    <p className="about-beans__text">Afraid at highly months do things on at. Situation <br/> recommend
                        objection do intention <br/>
                        so questions.<br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                        met spot shy want. Children me laughing we <br/> prospect answered followed. At it went <br/>
                        is song that held help face.</p>
                </div>
            </section>
            <CoffeeList data={props.data}/>
            <Footer/>
        </>
    );
};

export default OurCoffee;
