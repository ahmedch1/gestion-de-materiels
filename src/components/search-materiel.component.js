import React, {Component} from 'react';
import {useState} from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../SearchApp.css'
import Search2 from 'react-search'

const Materiel = props => (
    <tr>

        <td>{props.materiel.nom}</td>
        <td>{props.materiel.famille}</td>
        <td>{props.materiel.reference}</td>
        <td>{props.materiel.stockdispo}</td>
        <td>{props.materiel.derniereutilisation.substring(0, 10)}</td>
        <td>{props.materiel.prochaineutilisation.substring(0, 10)}</td>
        <td>{props.materiel.prix}</td>
        <td>{props.materiel.etat.toString()}</td>
        <td>{props.materiel.statut.toString()}</td>
        <td>
            <Link to={"/edit/" + props.materiel._id}>edit</Link> | <a href="#" onClick={() => {
            props.deleteMateriel(props.materiel._id)
        }}>delete</a>
        </td>
    </tr>
)



export default class SearchMaterielComponent extends Component {
    HiItems(items) {
        console.log(items)
    }

    constructor(props) {

        super(props);
        this.deleteMateriel = this.deleteMateriel.bind(this);
        this.state = {materiels: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/materiels/')
            .then(response => {
                this.setState({materiels: response.data})
                console.log(JSON.stringify(this.state.materiels));
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
            return <Materiel materiel={currentmateriel} deleteMateriel={this.deleteMateriel}
                             key={currentmateriel._id}/>;


        })

    }

    render() {
        let items = [
            { id: 0, value: 'Materiel1' },
            { id: 1, value: 'Materiel2' },
            { id: 2, value: 'Materiel3' },
            { id: 3, value: 'Materiel4' },
            { id: 4, value: 'Materiel5' }
        ]
        return (

            <div className="Search">
                <div>
                    <Search2 items={items} />

                    <Search2 items={items}
                            placeholder='Choisir Le materiel'
                            maxSelected={3}
                            multiple={true}
                            onItemsChanged={this.HiItems.bind(this)} />
                </div>

                {/*<Search/>*/}
                {/*/!*<div className="searchpart">*!/*/}
                
                
                {/*    /!*    return this.state.materiels.map(currentmateriel=>{*!/*/}
                {/*    /!*    return <Materiel materiel={currentmateriel} deleteMateriel={this.deleteMateriel}*!/*/}
                {/*    /!*    key={currentmateriel._id}/>;*!/*/}
                {/*    /!*})*!/*/}
                {/*    {this.state.materiels.map((val, key) => {*/}
                {/*        return <div className="user" key={key}><p>{val.nom}</p></div>*/}
                {/*    })}*/}
                {/*</div>*/}

                <div>
                    <h3>Liste de Materiels</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Nom</th>
                            <th>Famille</th>
                            <th>Reference</th>
                            <th>Quantité</th>
                            <th>Derniere Utilisation</th>
                            <th>Prochaine Utilisation</th>
                            <th>Prix</th>
                            <th>Etat</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.materielList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
