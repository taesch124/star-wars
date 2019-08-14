import React from 'react';

//Mpdels
import MasterDetailContainer from './../MasterDetail/MasterDetailContainer';
import SpeciesPanel from './SpeciesPanel';
import SimpleListItem from './../Lists/SimpleListItem';

//CSS

function SpeciesContainer(props) {
    return (
        <MasterDetailContainer
            {...props}
            startingUrl="https://swapi.co/api/species"
            panelComponent={SpeciesPanel}
            listItemComponent={SimpleListItem}
        />
    )
}

export default SpeciesContainer;