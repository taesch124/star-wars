import React from 'react';
import './../Lists/ListItem.scss';

function StarshipListItem(props) {
    let starship = props.item;
    return (
        <div key={starship.url} onClick={e => props.selectItem(e, starship.url)} className="list-item">
            <h3 >{starship.name}</h3>
        </div>
    )
}

export default StarshipListItem;