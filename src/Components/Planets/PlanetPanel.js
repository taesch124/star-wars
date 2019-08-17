import React from 'react';

import './PlanetPanel.scss';

//'jungle' 'grasslands' 'tundra' 'swamp' 'gas' 'forests' 'cityscape' 'ocean' 'mountains'

const terrainList = {
    'mountain': 'mountains',
    'mountains': 'mountains',
    'grasslands': 'grasslands',
    'grassy': 'grasslands',
    'grass': 'grasslands',
    'plains': 'grasslands',
    'verdant': 'grasslands',
    'tundra': 'tundra',
    'glaciers': 'tundra',
    'swamp': 'swamp',
    'swamps': 'swamp',
    'gas': 'gas',
    'rainforests': 'forests',
    'forests': 'forests',
    'jungle': 'jungle',
    'jungles': 'jungle',
    'cityscape': 'cityscape',
    'urban': 'cityscape',
    'ocean': 'ocean',
    'asteroid': 'asteroid',
    'savanna': 'savanna',
    'savannas': 'savanna',
    'islands': 'islands',
    'volcanoes': 'volcanoes',
    'ash': 'volcanoes',
    'desert': 'desert',
    'deserts': 'desert',
    'rocky': 'rocky'
};

function PlanetPanel (props) {
    let planetData = props.item;
    return (
        <div className='panel planet-panel' id='selected-item'>
            
            <div className={`front ${getPrimaryTerrain(planetData.terrain)}`}>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    <h2 className="planet-name-front">{planetData.name}</h2>
                </div>
            </div>
            <div className='back'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
                    <h5>{planetData.name}</h5>
                    <p>Terrain: {planetData.terrain}</p>
                    <p>Climate: {planetData.climate}</p>
                    <p>Surface Water: {planetData.surface_water}%</p>
                    <p>Diameter: {planetData.diameter}km</p>
                    <p>Day Length:{planetData.rotation_period} hours</p>
                    <p>Year Length: {planetData.orbital_period} days</p>
                    <p>Population: {planetData.population}</p>
                    <p>Gravity: {planetData.gravity} G</p>
                </div>
            </div>
        </div>
    )
}

function getPrimaryTerrain(terrains) {
    let classString = '';

    terrains.split(/, | /).some(terrain => {
        if(terrainList[terrain]) {
            classString = terrainList[terrain];
            return true;
        }
        return false;
    });

    return classString;
}

export default PlanetPanel;