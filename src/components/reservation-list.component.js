import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FaEdit} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";

/* To add react icons I have installed npm install react-icons */
const Materiel = props => (
    <tr>

        <td>{props.materiel.nom}</td>
        <td>{props.materiel.famille}</td>
        <td>{props.materiel.reference}</td>
        <td>{props.materiel.stockdispo}</td>
        <td>{props.materiel.emprunteepar}</td>
        <td>{props.materiel.derniereutilisation.substring(0, 10)}</td>
        <td>{props.materiel.prochaineutilisation.substring(0, 10)}</td>
        <td>{props.materiel.prix}</td>
        <td>{props.materiel.etat.toString()}</td>
        <td>{props.materiel.statut.toString()}</td>
        <td>{props.materiel.fournisseur}</td>
        <td>{props.materiel.codebarre}</td>
        <td>
            <Link to={"/edit/" + props.materiel._id}><FaEdit/></Link> | <a href="#" onClick={() => {
            props.deleteMateriel(props.materiel._id)
        }}><FaTrash/></a>
        </td>
    </tr>
)


export default class MaterielsList extends Component {
    constructor(props) {
        super(props);
        this.deleteMateriel = this.deleteMateriel.bind(this);
        this.state = {materielsreserves: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/materielsreserves/')
            .then(response => {
                this.setState({materielsreserves: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteMateriel(id) {
        axios.delete('http://localhost:5000/materielsreserves/' + id)
            .then(res => console.log(res.data));

        this.setState({
            materielsreserves: this.state.materielsreserves.filter(el => el._id !== id)
        })
    }


    materielList() {


        return this.state.materielsreserves.map(currentmateriel => {
            return <Materiel materiel={currentmateriel} deleteMateriel={this.deleteMateriel}
                             key={currentmateriel._id}/>;
        })

    }

    render() {
        return (
            <div>
                <h3>Liste de Materiels</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Nom</th>
                        <th>Famille</th>
                        <th>Reference</th>
                        <th>Quantité</th>
                        <th>Emprunté actuellement par:</th>
                        <th>Derniere Utilisation</th>
                        <th>Prochaine Utilisation</th>
                        <th>Prix</th>
                        <th>Etat</th>
                        <th>Statut</th>
                        <th>Fournisseur</th>
                        <th>Code à barre</th>

                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.materielList()}
                    </tbody>
                </table>
            </div>
        )
    }

}

