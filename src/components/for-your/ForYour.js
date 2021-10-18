import Header from "../header/Header";
import LogoImage from "../logo-image/LogoImage";
import Footer from "../footer/Footer";

import './ForYour.scss'
import img from '../../image/for-your.jpg'
import CoffeeList from "../coffee-list/CoffeeList";
import CoffeeListItem from "../coffee-list/coffee-list-item/CoffeeListItem";

const ForYour = props => {

    return (
        <>
            <Header classes='our-coffee'>
                <h2 className='our-coffee__title for-your'>For your pleasure</h2>
            </Header>
            <section className="about-beans">
                <div className="about-beans_left">
                    <img src={img} alt=""/>
                </div>
                <div className="about-beans_right">
                    <h4 className="about-beans__title">About our goods</h4>
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
            <div className="coffee-list__container">
                {props.data.map(item => {
                    return (
                        <CoffeeListItem
                            coffeeData={item}
                        />
                    )
                })}
            </div>
            <Footer/>
        </>
    );
};

export default ForYour;
