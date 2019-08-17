import React from 'react';
import axios from 'axios';

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
            customPostLoad={populateSpecies}
        />
    )
}

async function populateSpecies(person) {
    return new Promise((res, rej) => {
        if(person.species.length > 0) {
            axios.get(person.species[0])
            .then(response => {
                person.image = response.data.name;
                return res(response.data.name);
            })
            .catch(error => {
                console.error(error);
                return rej(error);
            });
        } else return res(null);
    })
    
}

export default PeopleContainer;