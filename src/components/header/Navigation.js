import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expand-sm">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-list-2">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/training-plan" className="nav-link">Training Plan</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/new-question" className="nav-link">New Question</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/seminars" className="nav-link">Seminars</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/manage-question" className="nav-link">Manage Questions</NavLink>
                            </li>   
                        </ul>
                    </div>
                </nav>

                               
            </div>
        );
    }
}

export default Navigation;