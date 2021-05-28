import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';






const Reserver=props=>(
    <tr>

        <td>{props.Reserver.nom}</td>
        <td>{props.Reserver.reference}</td>
        <td>{props.Reserver.quantite}</td>
        <td>{props.Reserver.demandepar}</td>
        <td>{props.Reserver.datedelemprunt.substring(0,10)}</td>
        <td>{props.Reserver.datederetour.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.Reserver._id}>edit</Link> | <a href="#" onClick={()=>{props.deletereserver(props.Reserver._id)}}>delete</a>
        </td>
    </tr>
)




export default class ReservationList extends Component {
    constructor(props) {
        super(props);
        this.deletereserver = this.deletereserver.bind(this);
        this.state = {reservation: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/reservation/')
            .then(response => {
                this.setState({reservation: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletereservation(id) {
        axios.delete('http://localhost:5000/reservation/' + id)
            .then(res => console.log(res.data));

        this.setState({
           reservation: this.state.reservation.filter(el => el._id !== id)
        })
    }


    reservationList(){


        return this.state.reservation.map(currentreserver=>{
                return <Reserver reserver={currentreserver} deletereserver={this.deletereserver}
                                 key={currentreserver._id}/>;
        })

    }
    render() {
        return (
            <div>
                <h3>Liste deS R2SERVATIONS</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nom</th>
                            <th>Reference</th>
                            <th>Demandé par</th>
                            <th>Quantité</th>
                            <th>Date de réservation</th>
                            <th>Date de retour</th>
                           <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.reservationList()}
                    </tbody>
                </table>
            </div>
        )
    }

}
