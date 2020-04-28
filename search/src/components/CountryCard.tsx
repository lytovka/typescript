import React from 'react';
import { ICountry } from '../interfaces/country';
import '../styles/card.css';

type CountryCardProps = {
    country: ICountry,
    clickOnCard(c: ICountry): void
}

const CountryList: React.FC<CountryCardProps> = ({ country, clickOnCard }) => {

    const cardMouseClickHandler = (event: React.MouseEvent, c: ICountry) => {
        console.log(c);
        clickOnCard(c);
    }

    const reduceCountryName = (name: string): string => {
        if (name.length > 20) {
            return name.slice(0, 20) + '...'
        }
        else return name
    }

    return (
        <React.Fragment>
            <div className='card-container'>
                <div className='card-body' onClick={(event) => cardMouseClickHandler(event, country)}>
                    <div className="card-body-container">
                        <div className="card-body-item">
                            <img src={country.flag} alt='flag' />
                        </div>
                        <div className="card-body-item">
                            <hr />
                            <li>{reduceCountryName(country.name)}</li>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default CountryList;