import React from 'react';
import bedoka from '../styles/bedoka.png';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md bg-primary">
                <div className="container container-fluid">
                    <a className="navbar-brand" href="google.com">
                        <img className="navbar-img" src={bedoka} alt="mylogo" width="100px"></img>
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#my-navbar-button">
                        <i className="fas fa-fingerprint"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="my-navbar-button">
                        <ul className="nav navbar-nav text-center">
                            <li><a className="active" href="google.com">- About me -</a></li>
                            <li><a className="active" href="google.com">- Portfolio -</a></li>
                            <li><a className="active" href="google.com">- Contact -</a></li>
                            <li className="nav-item-dropdown">
                                <a className="nav-link dropdown-toggle" href="google.com" data-toggle="dropdown">
                                    - Language -
                                </a>
                                <div className="dropdown-menu text-center right">
                                    <a className="dropdown-item" href="google.com">Polski</a>
                                    <a className="dropdown-item" href="google.com">Deutsch</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;