import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

import { ICountry } from './interfaces/country';

import serviceCountries from './services/services';

const App: React.FC = () => {

  const [searchItem, setSearchItem] = useState<string>('');
  const [countryList, setCountryList] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);

  const [flag, setFlag] = useState<boolean>(true);

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
    setSelectedCountry(null);
    setFlag(false);
  }

  return (
    <React.Fragment>
      <Navbar />
      <Search clickHandler={searchInputClickHandler} />
      <CountryList filteredList={filteredList} handleClick={cardClickHandler} selected={selectedCountry} />
      {/* {flag && selectedCountry ? <Modal closeModal={closeModal} selectedCountry={selectedCountry} /> : <></>} */}
      <Modal flag={flag} closeModal={closeModal} selectedCountry={selectedCountry} />
    </React.Fragment>
  );
}

export default App;
