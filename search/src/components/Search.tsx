import React from 'react';
import '../styles/search.css';

type SearchProps = {
    clickHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Search: React.FC<SearchProps> = ({clickHandler}) => {  

    return (
        <>
            <div className="search-container">
                <div id="search-element">
                    <input onChange={clickHandler} type="text" name="search" id="1"/>
                </div>
            </div>
        </>
    )
}

export default Search;