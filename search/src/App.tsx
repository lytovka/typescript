import React, { useState } from 'react';
import Search from './components/Search';
import CountryList from './components/CountryList';

const App: React.FC = () => {

  const [searchItem, setSearchItem] = useState<string>("");

  const clickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  }

  return (
    <React.Fragment>
      <Search clickHandler={clickHandler} />
      <CountryList countryName={searchItem}/>
    </React.Fragment>
  );
}

export default App;
