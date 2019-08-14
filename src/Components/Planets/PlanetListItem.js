import React from 'react';
import './PlanetListItem.scss';

function PlanetListItem(props) {
    let planet = props.item;
    return (
        <div onClick={e => props.selectItem(e, planet.url)} className="list-item">
            <h3 >{planet.name}</h3>
        </div>
    )
}

export default PlanetListItem;