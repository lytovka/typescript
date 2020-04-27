import React, { useState, useEffect } from 'react'
import serviceCountries from '../services/services';
import { ICountry } from '../interfaces/country';

type CountryListProps = {
    countryName: string
}

const CountryList: React.FC<CountryListProps> = ({ countryName }) => {

    const [countryList, setCountryList] = useState<ICountry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await serviceCountries.getAll();
            setCountryList(result as ICountry[]);
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <ul>
                {countryList.filter(c => c.name.includes(countryName)).map(c => <li>{c.name}</li>)}
            </ul>
        </React.Fragment>
    )
}

export default CountryList;