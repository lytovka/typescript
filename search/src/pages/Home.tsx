import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import CountryList from '../components/CountryList';
import Modal from '../components/Modal';

import { ICountry } from '../interfaces/country';

import serviceCountries from '../services/services';

const HomePage: React.FC = () => {
    const [countryList, setCountryList] = useState<ICountry[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
    const [searchItem, setSearchItem] = useState<string>('');


    const [flag, setFlag] = useState<boolean>(true);
    const [hideModal, setHideModal] = useState<boolean>(false);

    const filteredList: ICountry[] = countryList.filter(c => c.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));

    useEffect(() => {
        const fetchData = async () => {
            const result = await serviceCountries.getAll();
            setCountryList(result as ICountry[]);
            console.log(result);
        }
        fetchData();
    }, []);

    const searchInputClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setSelectedCountry(null);
        }
        setSearchItem(event.target.value);
    }

    const cardClickHandler = (card: ICountry): void => {
        setSelectedCountry(card);
        setFlag(true);
    }

    const closeModal = (event: React.MouseEvent): void => {
        event.preventDefault();
        setHideModal(true);

        setTimeout(() => {
            setSelectedCountry(null);
            setFlag(false);
            setHideModal(false);
        }, 200)
    }

    return (
        <React.Fragment>
            <Search clickHandler={searchInputClickHandler} />
            <CountryList filteredList={filteredList} handleClick={cardClickHandler} selected={selectedCountry} />
            {flag && selectedCountry ? <Modal hide={hideModal} closeModal={closeModal} selectedCountry={selectedCountry} /> : <></>}
        </React.Fragment>
    );
}

export default HomePage;