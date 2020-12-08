import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ApplicationBar extends Component {
    render() { 
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/work">About</Link>
                        </li>
                        <li>
                        <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default ApplicationBar;