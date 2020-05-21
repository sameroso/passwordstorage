import React from 'react'
import {Link} from 'react-router-dom';


function DashBoard() {
    return(
        <Link to="/new">
            <button>New</button>
        </Link>
    );
}

export default DashBoard;