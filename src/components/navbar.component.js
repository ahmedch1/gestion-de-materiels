import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Gestion de Materiels</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/materiels" className="nav-link">Liste des matériels</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/empruntee" className="nav-link">Matériels Empruntés</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/materiels" className="nav-link">Matérielsen Entrée</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Ajouter un ateriel</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/reserver" className="nav-link">Créer une réservation de Materiel</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/reservation" className="nav-link"> Réservations des Matériels</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}
