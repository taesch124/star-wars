import React from 'react';

import MasterDetailContainer from './../MasterDetail/MasterDetailContainer';
import StarshipListItem from './StarshipListItem';
import StarshipPanel from './StarshipPanel';

function StarshipContainer(props) {
    return (
        <MasterDetailContainer
            {...props}
            startingUrl="https://swapi.co/api/starships"
            panelComponent={StarshipPanel}
            listItemComponent={StarshipListItem}
        />
    )
}

export default StarshipContainer;