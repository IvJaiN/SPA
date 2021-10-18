import {Link} from "react-router-dom";

import item1 from "../../image/content/content-1.jpg";
import item2 from "../../image/content/content-2.jpg";
import item3 from "../../image/content/content-3.jpg";
import './StartPage.scss'
import Navigation from "../navigation/Navigation";
import LogoImage from "../logo-image/LogoImage";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const StartPage = props => {
    return (
        <>
           <Header classes='header'>
               <h2 className='header__title'>Everything You Love About Coffee</h2>
               <div className="header__img">
                   <LogoImage color='white'/>
               </div>
               <p className='header__text'>We makes every day full of energy and taste</p>
               <p className='header__text'>Want to try our beans?</p>
               <Link className='header__link' to='/our-coffee'>More</Link>
           </Header>
            <section className="about section">
                <div className="section__container">
                    <h3 className="section__title">About Us</h3>
                    <div className="section__img">
                        <LogoImage color='black'/>
                    </div>
                    <p className="section__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p className="section__text">
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </section>
            <section className="our section">
                <h3 className="section__title">Our best</h3>
                <div className="our__container">
                    <Link className="our__card"
                            to='/our-coffee/presto'
                    >
                        <div className="our__card-img">
                            <img src={item1} alt=""/>
                        </div>
                        <h4 className="our__card-title">Solimo Coffee Beans 2 kg</h4>
                        <div className="our__card-price">10.73$</div>
                    </Link>
                    <Link className="our__card"
                          to='/our-coffee/presto'
                    >
                        <div className="our__card-img">
                            <img src={item2} alt=""/>
                        </div>
                        <h4 className="our__card-title">Presto Coffee Beans 1 kg</h4>
                        <div className="our__card-price">15.99$</div>
                    </Link>
                    <Link className="our__card"
                          to='/our-coffee/aromistico'
                    >
                        <div className="our__card-img">
                            <img src={item3} alt=""/>
                        </div>
                        <h4 className="our__card-title">AROMISTICO Coffee 1 kg</h4>
                        <div className="our__card-price">6.99$</div>
                    </Link>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default StartPage;
