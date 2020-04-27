import React, { useState } from 'react';
import Search from './components/Search';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';

const App: React.FC = () => {

  const [searchItem, setSearchItem] = useState<string>("");

  const clickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  }

  return (
    <React.Fragment>
      <Navbar />
      <Search clickHandler={clickHandler} />
      <CountryList countryName={searchItem}/>
    </React.Fragment>
  );
}

export default App;
