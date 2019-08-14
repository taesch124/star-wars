import React from 'react';

const companiesList = {
    'Kuat': 'kuat',
    'Sienar': 'sienar',
    'Corellian': 'corellia',
    'Corellia': 'corellia',
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
    'Huppla': 'huppla-pasa',
    'SoroSuub': 'soro-suub',
    'Bespin': 'bespin'
};

function VehiclePanel(props) {
    let vehicle = props.item;
    let company = getCompany(vehicle.manufacturer);
    return (
        <div className='panel vehicle-panel' id='selected-item'>
            
            <div className='front'>
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
                    <h2 className="planet-name-front">{vehicle.name}</h2>
                </div>
            </div>
            <div className={`back`}>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
                    <h5>{vehicle.name}</h5>
                    <p>Model: {vehicle.model}</p>
                    <p>Class: {vehicle.vehicle_class}</p>
                    <p>Manufacturer: {vehicle.manufacturer}</p>
                    <p>Length: {vehicle.length}m</p>
                    <p>Crew: {vehicle.crew} poeple</p>
                    <p>Passengers: {vehicle.passengers} people</p>
                    <p>Atmospheric Speed: {vehicle.max_atmosphering_speed}</p>
                    <p>Cargo Capacity: {vehicle.cargo_capacity} kg</p>
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

export default VehiclePanel;