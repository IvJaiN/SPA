import './App.scss';
import {Switch, Route, Link} from "react-router-dom";
import StartPage from "./components/start-page/StartPage";
import OurCoffee from "./components/our-coffee/OurCoffee";
import Aromistico from "./components/aromistico/Aromistico";
import Presto from "./components/presto/Presto";
import Solimo from "./components/solimo/Solimo";
import ForYour from "./components/for-your/ForYour";

function App() {
    const data = [
        {name: 'AROMISTICO Coffee', weight: '1', manufacturer: 'Kenya', price: '6.99$', path: '/our-coffee/aromistico'},
        {name: 'Solimo Coffee Beans', weight: '2', manufacturer: 'Brazil', price: '10.73$', path: '/our-coffee/solimo'},
        {name: 'Presto Coffee Beans', weight: '1', manufacturer: 'Columbia', price: '15.99$', path: '/our-coffee/presto'},
        {name: 'AROMISTICO Coffee', weight: '1', manufacturer: 'Columbia', price: '6.99$', path: '/our-coffee/aromistico'},
        {name: 'Solimo Coffee Beans', weight: '2', manufacturer: 'Kenya', price: '10.73$', path: '/our-coffee/presto'},
        {name: 'Presto Coffee Beans', weight: '1', manufacturer: 'Columbia', price: '15.99$', path: '/our-coffee/presto'},
        {name: 'Solimo Coffee Beans', weight: '2', manufacturer: 'Brazil', price: '10.73$', path: '/our-coffee/solimo'},
        {name: 'Presto Coffee Beans', weight: '1', manufacturer: 'Columbia', price: '15.99$', path: '/our-coffee/presto'},
        {name: 'AROMISTICO Coffee', weight: '1', manufacturer: 'Brazil', price: '6.99$', path: '/our-coffee/aromistico'},
    ]

    return (
        <div className="App">
            <Route exact path='/our-coffee'><OurCoffee data={data}/></Route>
            <Route exact path='/'><StartPage/></Route>
            <Route exact path='/our-coffee/aromistico/'><Aromistico/></Route>
            <Route exact path='/our-coffee/presto'><Presto/></Route>
            <Route exact path='/our-coffee/solimo'><Solimo/></Route>
            <Route exact path='/for-your-pleasure'><ForYour data={data}/></Route>

        </div>
    );
}

export default App;
