import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FaPlus} from "react-icons/all";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-info navbar-expand-lg">
                <Link to="/" className="navbar-brand">Gestion des matériels</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link"><FaPlus/></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/materiels" className="nav-link">Liste des matériels</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/empruntee" className="nav-link">Matériels empruntés</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/materiels" className="nav-link">Matériels en entrée</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/reserver" className="nav-link">Réserver un matériel</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/reservation" className="nav-link">Matériels réservés</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/search" className="nav-link">Rechercher un matériel</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}
