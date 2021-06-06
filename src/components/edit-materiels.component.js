import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';



export default class EditMateriels extends Component {
    constructor(props) {
        super(props);

        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeFamille = this.onChangeFamille.bind(this);
        this.onChangeReference = this.onChangeReference.bind(this);
        this.onChangeStockdispo = this.onChangeStockdispo.bind(this);
        this.onChangeDerniereutilisation = this.onChangeDerniereutilisation.bind(this);
        this.onChangeProchaineutilisation = this.onChangeProchaineutilisation.bind(this);
        this.onChangePrix = this.onChangePrix.bind(this);
        this.onChangeEtat = this.onChangeEtat.bind(this);
        this.onChangeStatut = this.onChangeStatut.bind(this);
        this.onChangeFournisseur = this.onChangeFournisseur.bind(this);
        this.onChangeDateentree = this.onChangeDateentree.bind(this);
        this.onChangeEmprunteepar = this.onChangeEmprunteepar.bind(this);
        this.onChangeCodeBarre = this.onChangeCodeBarre.bind(this);
        this.onChangeEmprunt=this.onChangeEmprunt.bind(this);
        this.onChangeRecent=this.onChangeRecent.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nom: '',
            famille: '',
            reference: 0,
            stockdispo: 0,
            derniereutilisation: new Date(),
            prochaineutilisation: new Date(),
            prix: 0,
            etat: false,
            statut: false,
            fournisseur:'',
            dateentree:new Date(),
            emprunteepar:'',
            codebarre:'',
            emprunt:false,
            recent:false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/materiels/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    nom: response.data.nom,
                    famille: response.data.famille,
                    reference: response.data.reference,
                    stockdispo: response.data.stockdispo,
                    derniereutilisation: new Date(response.data.derniereutilisation),
                    prochaineutilisation: new Date(response.data.prochaineutilisation),
                    prix: response.data.prix,
                    etat: response.data.etat,
                    statut: response.data.statut,
                    fournisseur:response.data.fournisseur,
                    dateentree:new Date(response.data.dateentree),
                    emprunteepar:response.data.emprunteepar,
                    codebarre:response.data.codebarre,
                    emprunt:response.data.emprunt,
                    recent:response.data.recent
                })
            })
    }


    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        });
    }

    onChangeFamille(e) {
        this.setState({
            famille: e.target.value
        });
    }

    onChangeReference(e) {
        this.setState({
            reference: e.target.value
        });
    }

    onChangeStockdispo(e) {
        this.setState({
            stockdispo: e.target.value
        });
    }

    onChangeDerniereutilisation(derniereutilisation) {
        this.setState({
            derniereutilisation: derniereutilisation
        });
    }

    onChangeDateentree(dateentree){
        this.setState({
            dateentree:dateentree
        })
    }

    onChangeProchaineutilisation(prochaineutilisation) {
        this.setState({
            prochaineutilisation: prochaineutilisation
        });
    }



    onChangePrix(e) {
        this.setState({
            prix: e.target.value
        });
    }

    onChangeEtat(e) {
        this.setState({
            etat: e.target.checked
        });
    }

    onChangeStatut(e) {
        this.setState({
            statut: e.target.checked
        });
    }

    onChangeFournisseur(e) {
        this.setState({
            fournisseur: e.target.value
        });
    }


    onChangeEmprunteepar(e) {
        this.setState({
            emprunteepar: e.target.value
        });
    }


    onChangeCodeBarre(e) {
        this.setState({
            codebarre: e.target.value
        });
    }

    onChangeEmprunt(e){
        this.setState({
            emprunt: e.target.checked
        })
    }

    onChangeRecent(e){
        this.setState({
            recent: e.target.checked
        })
    }




    onSubmit(e) {
        e.preventDefault();
        const materiel = {
            nom: this.state.nom,
            famille: this.state.famille,
            reference: this.state.reference,
            stockdispo: this.state.stockdispo,
            derniereutilisation: this.state.derniereutilisation,
            prochaineutilisation: this.state.prochaineutilisation,
            prix: this.state.prix,
            etat: this.state.etat,
            statut: this.state.statut,
            fournisseur:this.state.fournisseur,
            dateentree:this.state.dateentree,
            emprunteepar:this.state.emprunteepar,
            emprunt: this.state.emprunt,
            recent:this.state.recent
        }

        console.log(materiel);
        axios.post('http://localhost:5000/materiels/update/' + this.props.match.params.id, materiel)
            .then(res => console.log(res.data));

        window.location = '/materiels';
    }

    render() {
        return (
            <div>
                <h3>Modifier matériel</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom:</label>
                        <input type="text" required className="form-control" value={this.state.nom}
                               onChange={this.onChangeNom}/>
                    </div>
                    <div className="form-group">
                        <label>Famille:</label>
                        <input type="text" required className="form-control" value={this.state.famille}
                               onChange={this.onChangeFamille}/>
                    </div>
                    <div className="form-group">
                        <label>Empruntee par:</label>
                        <input type="text" required className="form-control" value={this.state.emprunteepar}
                               onChange={this.onChangeEmprunteepar}/>
                    </div>
                    <div className="form-group">
                        <label>Référence:</label>
                        <input type="text" required className="form-control" value={this.state.reference}
                               onChange={this.onChangeReference}/>
                    </div>
                    <div className="form-group">
                        <label>Stock Disponible:</label>
                        <input type="text" required className="form-control" value={this.state.stockdispo}
                               onChange={this.onChangeStockdispo}/>
                    </div>

                    <div className="form-group">
                        <div>
                            <label>Derniere utilisation:</label>
                            <DatePicker selected={this.state.derniereutilisation}
                                        onChange={this.onChangeDerniereutilisation}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label>Prochaine utilisation:</label>
                            <DatePicker selected={this.state.prochaineutilisation}
                                        onChange={this.onChangeProchaineutilisation}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Prix:</label>
                        <input type="text" required className="form-control" value={this.state.prix}
                               onChange={this.onChangePrix}/>
                    </div>
                    <div className="form-group">
                        <label>Etat:</label>
                        <input type="checkbox" className="form-control" value={this.state.etat}
                               onChange={this.onChangeEtat}/>
                    </div>
                    <div className="form-group">
                        <label>Statut:</label>
                        <input type="checkbox" className="form-control" value={this.state.statut}
                               onChange={this.onChangeStatut}/>
                    </div>
                    <div className="form-group">
                        <label>Emprunté </label>
                        <input type="checkbox" className="form-control" value={this.state.emprunt}
                               onChange={this.onChangeEmprunt}/>
                    </div>
                    <div className="form-group">
                        <label>Récent </label>
                        <input type="checkbox" className="form-control" value={this.state.recent}
                               onChange={this.onChangeRecent}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Materiel" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }

}
