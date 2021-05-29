import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


const Materiel = props => (
    <tr>
        <td>{props.materiel.nom}</td>
        <td>{props.materiel.reference}</td>
        <td>{props.materiel.stockdispo}</td>
        <td>{props.materiel.emprunteepar}</td>
        <td>{props.materiel.derniereutilisation.substring(0, 10)}</td>
        <td>{props.materiel.prochaineutilisation.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.materiel._id}>edit</Link> | <a href="#" onClick={() => {
            props.deleteMateriel(props.materiel._id)
        }}>delete</a>
        </td>
    </tr>
)


export default class MaterielsList extends Component {
    constructor(props) {
        super(props);
        this.deleteMateriel = this.deleteMateriel.bind(this);
        this.state = {materiels: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/materiels/')
            .then(response => {
                this.setState({materiels: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteMateriel(id) {
        axios.delete('http://localhost:5000/materiels/' + id)
            .then(res => console.log(res.data));

        this.setState({
            materiels: this.state.materiels.filter(el => el._id !== id)
        })
    }


    materielList() {

        return this.state.materiels.map(currentmateriel => {
            if (currentmateriel.emprunt === true) {
                return <Materiel materiel={currentmateriel} deleteMateriel={this.deleteMateriel}
                                 key={currentmateriel._id}/>;
            }
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
                        <th>Reference</th>
                        <th>Quantité</th>
                        <th>Empruntée par</th>
                        <th>Date d'emprunt</th>
                        <th>Date de retour</th>
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
