import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';

import NavBar from './Components/NavBar/NavBar';
import Welcome from './Components/Welcome/Welcome';
import PlanetContainer from './Components/Planets/PlanetContainer';
import StarshipContainer from './Components/Starships/StarshipContainer';
import VehicleContainer from './Components/Vehicles/VehicleContainer';
import SpeciesContainer from './Components/Species/SpeciesContainer';
import PeopleContainer from './Components/People/PeopleContainer';

function App(props) {
  return (
    <div className="App">
      <div className="navbar-content">
        <NavBar {...props} />
      </div>
      <div className="main-content">
        <Route exact path ="/" render={props => <Welcome {...props} />} />
        <Route exact path="/planets" render={props => <PlanetContainer {...props} />} />
        <Route exact path="/starships" render={props => <StarshipContainer {...props} />} />
        <Route exact path="/vehicles" render={props => <VehicleContainer {...props} /> } />
        <Route exact path="/species" render={props => <SpeciesContainer {...props} />} />
        <Route exact path="/people" render={props => <PeopleContainer {...props} /> } />
      </div>
      
    </div>
  );
}

export default App;
