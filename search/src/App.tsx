import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';

import { ICountry } from './interfaces/country';

import serviceCountries from './services/services';

const DefaultSelectedCountry: ICountry = {
  name: '',
  capital: '',
  flag: '',
  population: -1,
  latlng: []
};

const App: React.FC = () => {

  const [searchItem, setSearchItem] = useState<string>('');
  const [countryList, setCountryList] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(DefaultSelectedCountry);

  const filteredList: ICountry[] = countryList.filter(c => c.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));

  useEffect(() => {
    const fetchData = async () => {
      const result = await serviceCountries.getAll();
      setCountryList(result as ICountry[]);
      console.log(result);
    }
    fetchData();
  }, []);

  const clickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value === ''){
      setSelectedCountry(DefaultSelectedCountry);
    }
    setSearchItem(event.target.value);
    console.log(searchItem)
  }

  const handleClick = (card: ICountry) => {
    // setSelectedCountry(card[0]);
    setSearchItem(card.name);
  }

  return (
    <React.Fragment>
      <Navbar />
      <Search clickHandler={clickHandler} />
      <CountryList filteredList={filteredList} handleClick={handleClick} selected={selectedCountry}/>
    </React.Fragment>
  );
}

export default App;
