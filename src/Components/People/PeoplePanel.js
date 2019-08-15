import React from 'react';

import './PeoplePanel.scss';

function PeoplePanel (props) {
    let person = props.item;
    console.log(person, person['image'], person.name, props.item);
    return (
        <div className='panel planet-panel' id='selected-item'>
            
            <div className='front'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    {person.image ?
                    <img src={process.env.PUBLIC_URL + '/assets/images/species/' + formatSpeciesName(person.image) + '.jpg'} alt="Species portrait" /> :
                    null
                    }
                    <h3 className="planet-name-front">{person.name}</h3>
                </div>
            </div>
            <div className='back'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
                    <h5>{person.name}</h5>
                    <p>Birth Year: {person.birth_year}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Gender: {person.gender}</p>
                    <p>Height: {person.height}cm</p>
                    <p>Weight: {person.mass}kg</p>
                    <p>Skin Color {person.skin_color}</p>
                </div>
            </div>
        </div>
    )
}
    

function formatSpeciesName(original) {
    let species = original.replace(/'s|'| |species/g, '');
    console.log(species);
    return species;
}

export default PeoplePanel;