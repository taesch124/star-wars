import React from 'react';

import './StarshipPanel.scss';

const companiesList = {
    'Kuat': 'kuat',
    'Sienar': 'sienar',
    'Corellian': 'corellia',
    'Imperial': 'imperial',
    'Koensayr': 'koensayr',
    'Incom': 'incom',
    'Calamari': 'mon-calamari',
    'Slayne': 'slayn-korpil',
    'Korpil': 'slayn-korpil',
    'Theed': 'theed',
    'Rendili': 'rendili',
    'Gallofree': 'gallofree',
    'Hoersch-Kessel': 'hoersch-kessel',
    'Kessel': 'hoersch-kessel',
    'Rothana': 'rothana',
    'Huppla': 'huppla-pasa'
};

function StarshipPanel (props) {
    let starshipData = props.item;
    let company = getCompany(starshipData.manufacturer);
    return (
        <div className='panel starship-panel' id='selected-item'>
            
            <div className={`front`}>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    {company !== '' ?
                        <img 
                            className="company-logo" 
                            src={process.env.PUBLIC_URL + '/assets/images/company-logos/' + company + '.png'} 
                            alt="Company logo" 
                        /> :
                        null
                    }
                    <h2 className="starship-name-front">{starshipData.name}</h2>
                </div>
            </div>
            <div className={`back`}>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
                    <h5>{starshipData.name}</h5>
                    <p>Model: {starshipData.model}</p>
                    <p>Class: {starshipData.starship_class}</p>
                    <p>Manufacturer: {starshipData.manufacturer}</p>
                    <p>Length: {starshipData.length}m</p>
                    <p>Crew: {starshipData.crew} poeple</p>
                    <p>Passengers: {starshipData.passengers} people</p>
                    <p>Hyperdrive Rating: {starshipData.hyperdrive_rating}</p>
                    <p>Cargo Capacity: {starshipData.cargo_capacity} kg</p>
                </div>
            </div>
        </div>
    )
}

function getCompany(companies) {
    let classString = '';

    companies.split(/, | /).some(company => {
        if(companiesList[company]) {
            classString = companiesList[company];
            return true;
        }
        return false;
    });

    return classString;
}

export default StarshipPanel;