import React from 'react';
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () =>{

    const history = useHistory();

    return(
        <>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto voluptatum explicabo! Perspiciatis libero, maxime consectetur molestias commodi voluptas labore!</p>
            <button className="btn" onClick={() => history.push('/')}></button>
        </>
    )
}