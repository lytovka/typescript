import React from 'react';
import '../styles/card.css';

type CountryCardProps = {
    name: string;
    flag: string
}

const CountryList: React.FC<CountryCardProps> = ({ name, flag }) => {

    return (
        <React.Fragment>
            <div className="card-container">
                <div className="card-body">
                    <img src={flag} alt="flag" />
                    <hr />
                    <li>{name}</li>
                </div>
            </div>
        </React.Fragment>
    );

}

export default CountryList;