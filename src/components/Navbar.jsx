import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './component.css';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/todoapp">Todo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar;