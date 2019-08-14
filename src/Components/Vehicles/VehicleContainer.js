import React from 'react';

import MasterDetailContainer from './../MasterDetail/MasterDetailContainer';

import VehiclePanel from './VehiclePanel';
import SimpleListItem from './../Lists/SimpleListItem';

function VehicleContainer(props) {
    return (
        <div className="vehicle-container">
            <MasterDetailContainer 
                {...props} 
                startingUrl="https://swapi.co/api/vehicles"
                panelComponent={VehiclePanel}
                listItemComponent={SimpleListItem}
            />
        </div>
    )
}

export default VehicleContainer;