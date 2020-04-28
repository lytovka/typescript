import React from 'react'
import CountryCard from './CountryCard';
import { ICountry } from '../interfaces/country';

import '../styles/countryList.css';

type CountryListProps = {
    filteredList: ICountry[],
    handleClick(country: ICountry): void,
    selected: ICountry | null
}

const CountryList: React.FC<CountryListProps> = ({ filteredList, handleClick, selected }) => {

    const listLen: number = filteredList.length;

    if (listLen >= 1 && listLen < 50) {
        return (
            <React.Fragment>
                <ul className='list-container'>
                    {filteredList.map(c =>
                        <CountryCard key={c.name} country={c} clickOnCard={(c) => handleClick(c)} />
                    )}
                </ul>
            </React.Fragment>
        )
    }

    else if (listLen === 0) {
        return (
            <React.Fragment>
                <h1>None</h1>
            </React.Fragment>
        )
    }

    else {
        return (
            <React.Fragment>
                <h1>Please enter few more characters...</h1>
            </React.Fragment>
        )
    }

}

export default CountryList;