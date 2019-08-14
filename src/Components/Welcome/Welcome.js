import React from 'react';

import './Welcome.scss';

function Welcome(props) {
    return (
        <div className="welcome-message">
            <h3>Star Wars Encyclopedia</h3>
            <p>Welcome to the Star Wars Encyclopedia, which allows you to search all information on the Star Wars API.</p>
        </div>
    )
}

export default Welcome;