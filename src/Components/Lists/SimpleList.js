import React from 'react';

function SimpleList({children}) {
    return (
        <div id="list" className="simple-list">
            <ul className="simple-list-group">
                {children}
            </ul>
        </div>
    )
}

export default SimpleList;