import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './NavBar.scss';

function NavBar(props) {
    const currentPath = props.location.pathname;
    highlightSelected(currentPath);
    return (
        <div id="navbar-content" className="navbar">
            <div id="navbar-open" onClick={toggleNavbar}>
                <div className="navbar-shrink">
                    <img className="icon navbar-button" src={process.env.PUBLIC_URL + "/assets/images/icons/left-arrow.png"} alt="Shrink Navbar" onClick={toggleNavbar}></img>
                </div>

                <div className="navbar-links">
                    <Link to="/planets">
                        <div id="planets-link" className={`navbar-link`}>
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/planet-icon.png"} alt="Planets icon"/>
                            <h4>Planets</h4>
                        </div>
                    </Link>

                    <Link to="/starships">
                        <div id="starships-link" className={`navbar-link`}>
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/starship-icon.png"} alt="Starships icon" />
                            <h4>Starships</h4>
                        </div>
                    </Link>
                    
                    <Link to="/vehicles">
                        <div id="vehicles-link" className={`navbar-link`}>
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/speeder-icon.png"} alt="Vehicles icon" />
                            <h4>Vehicles</h4>
                        </div>
                    </Link>

                    <Link to="/species">
                        <div id="species-link" className={`navbar-link`}>
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/species-icon.png"} alt="Species icon" />
                            <h4>Species</h4>
                        </div>
                    </Link>

                    <Link to="/people">
                        <div id="people-link" className={`navbar-link`}>
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/people-icon.png"} alt="People icon" />
                            <h4>People</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div id="navbar-closed" className="hidden">
                <img id="navbar-expand" className="icon navbar-button" src={process.env.PUBLIC_URL + '/assets/images/icons/hamburger.png'} alt="Hanburger icon" onClick={toggleNavbar} />
            </div>
        </div>
    )
}

function toggleNavbar(e) {
    if(!document.getElementById('navbar-content').classList.contains('navbar-hidden')) {
        document.getElementById('navbar-content').classList.add('navbar-hidden');
        document.getElementById('navbar-closed').classList.remove('hidden');
        document.getElementById('navbar-open').classList.add('hidden');
    } else if (e.target.id === "navbar-expand"){
        document.getElementById('navbar-content').classList.remove('navbar-hidden');
        document.getElementById('navbar-open').classList.remove('hidden');
        document.getElementById('navbar-closed').classList.add('hidden');
    }
}

function highlightSelected(route) {
    let links = document.getElementsByClassName('navbar-link');
    for(let i = 0; i < links.length; i++) {
        let current = links[i];
        current.classList.remove('link-selected');
    }
    route = route.replace('/', '').concat('-link');
    let link = document.getElementById(route);
    if(link) link.classList.add('link-selected');

}

export default withRouter(NavBar);