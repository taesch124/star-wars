import React from 'react';

import './SpeciesPanel.scss';

function SpeciesPanel (props) {
    let speciesData = props.item;
    return (
        <div className='panel planet-panel' id='selected-item'>
            
            <div className='front'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    <img 
                        src={process.env.PUBLIC_URL + '/assets/images/species/' + formatSpeciesName(speciesData.name) + '.jpg'} 
                        alt="Species portrait"
                    />
                    <h2 className="planet-name-front">{speciesData.name}</h2>
                </div>
            </div>
            <div className='back'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
                    <h5>{speciesData.name}</h5>
                    <p>Classification: {speciesData.classification}</p>
                    <p>Designation: {speciesData.designation}</p>
                    <p>Average Height: {speciesData.average_height}cm</p>
                    <p>Average Lifespan: {speciesData.average_lifespan} years</p>
                    <p>Eye Color(s): {speciesData.eye_colors}</p>
                    <p>Hair Color(s): {speciesData.hair_colors}</p>
                    <p>Skin Color(s): {speciesData.skin_colors}</p>
                    <p>Language: {speciesData.language}</p>
                    <p>Homeworld: {speciesData.homeworld}</p>
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

export default SpeciesPanel;