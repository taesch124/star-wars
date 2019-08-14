import React from 'react';

//Mpdels
import MasterDetailContainer from './../MasterDetail/MasterDetailContainer';
import PlanetPanel from './PlanetPanel';
import PlanetListItem from './PlanetListItem';

//CSS

function PlanetContainer(props) {
    return (
        <MasterDetailContainer
            {...props}
            startingUrl="https://swapi.co/api/planets"
            panelComponent={PlanetPanel}
            listItemComponent={PlanetListItem}
        />
    )
}

export default PlanetContainer;