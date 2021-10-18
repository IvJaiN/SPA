import './CoffeeList.scss'
import SearchPanel from "./search-panel/SearchPanel";
import {useState} from "react";
import CoffeeListItem from "./coffee-list-item/CoffeeListItem";

const CoffeeList = (props) => {


    const [buttons, setButtons] = useState([
        {name: 'Brazil', isActive: false},
        {name: 'Kenya', isActive: false},
        {name: 'Columbia', isActive: false}
    ])
    const [inputValue, setInputValue] = useState('')

    const onInputValue = e => {
        setInputValue(inputValue => (e.target.value).toLowerCase())
    }
    let filterManufacturer = props.data
    const onButtonClick = button => {
        const buttonsArr = buttons.map(item => {
            if (item.name === button) return ({name: item.name, isActive: !item.isActive})
            else return ({name: item.name, isActive: false})
        })
        setButtons(buttonsArr)
    }
    buttons.forEach(button => {
        if (button.isActive) {
            filterManufacturer = props.data.filter(item => item.manufacturer === button.name)
        }
    })
    const filterArray = filterManufacturer.filter(item => item.name.toLowerCase().includes(inputValue))

    return (
        <section className='coffee-list'>
            <SearchPanel
                buttons={buttons}
                inputValue={inputValue}
                onInputValue={onInputValue}
                onButtonClick={onButtonClick}
            />
            <div className="coffee-list__container">
                {filterArray.map(item => {
                    return (
                        <CoffeeListItem
                            coffeeData={item}
                        />
                    )
                })}
            </div>
        </section>
    );
};

export default CoffeeList;
