import React, { useState, useEffect } from 'react'
import serviceCountries from '../services/services';
import CountryCard from './CountryCard';
import { ICountry } from '../interfaces/country';

import '../styles/countryList.css';

type CountryListProps = {
    countryName: string
}

const CountryList: React.FC<CountryListProps> = ({ countryName }) => {

    const [countryList, setCountryList] = useState<ICountry[]>([]);

    const filteredList: ICountry[] = countryList.filter(c => c.name.toLocaleLowerCase().includes(countryName.toLocaleLowerCase()));
    const listLen: number = filteredList.length;

    useEffect(() => {
        const fetchData = async () => {
            const result = await serviceCountries.getAll();
            setCountryList(result as ICountry[]);
            console.log(result);
        }
        fetchData();
    }, []);

    const reduceCountryName = (name:string):string => {
        if(name.length > 20){
            return name.slice(0,20) + "..."
        }
        else return name
    }

    if (listLen > 1 && listLen < 50) {
        return (
            <React.Fragment>
                <ul className="list-container">
                    {filteredList.map(c =>
                        <CountryCard key={c.name} name={reduceCountryName(c.name)} flag={c.flag}/>
                    )}
                </ul>
            </React.Fragment>
        )
    }

    else if (listLen === 1) {
        return (
            <React.Fragment>
                <h1>Bingo</h1>
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