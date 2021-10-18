import './SearchPanel.scss'

const SearchPanel = props => {
    const {buttons, inputValue, onInputValue, onButtonClick} = props


    return (
        <div className='search-panel'>
            <div className='search-panel_left'>
                <label className='search-panel__label' htmlFor="search">Looking for</label>
                <input
                    className='search-panel__input'
                    id='search'
                    type="text"
                    placeholder='start typing here...'
                    value={inputValue}
                    onChange={onInputValue}
                />
            </div>
            <div className="search-panel_right">
                <span className='search-panel__text'>Or filter</span>
                <div className="search-panel__buttons">
                    {buttons.map(button => {
                        return (
                            <button
                                className={button.isActive ? 'search-panel__button _active': 'search-panel__button'}
                                onClick={() => onButtonClick(button.name)}
                            >
                                {button.name}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;
