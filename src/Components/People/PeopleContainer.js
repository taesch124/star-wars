import React from 'react';

//Mpdels
import MasterDetailContainer from './../MasterDetail/MasterDetailContainer';
import PeoplePanel from './PeoplePanel';
import SimpleListItem from './../Lists/SimpleListItem';

//CSS

function PeopleContainer(props) {
    return (
        <MasterDetailContainer
            {...props}
            startingUrl="https://swapi.co/api/people"
            panelComponent={PeoplePanel}
            listItemComponent={SimpleListItem}
        />
    )
}

export default PeopleContainer;