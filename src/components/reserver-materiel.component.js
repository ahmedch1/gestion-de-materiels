import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';


export default class ReserverMaterielComponent extends Component {
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
        this.onChangeFournisseur=this.onChangeFournisseur.bind(this);
        this.onChangeDateentree=this.onChangeDateentree.bind(this);
        this.onChangeEmprunteepar=this.onChangeEmprunteepar.bind(this);
        this.onChangeCodebarre=this.onChangeCodebarre.bind(this);
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
            statut:false,
            fournisseur:'',
            dateentree: new Date(),
            emprunteepar:'',
            codebarre:'',
            emprunt:false,
            recent:false

        }
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
    onChangeEmprunteepar(e){
        this.setState({
            emprunteepar: e.target.value
        });
    }

    onChangeDerniereutilisation(derniereutilisation) {
        this.setState({
            derniereutilisation: derniereutilisation
        });
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
    onChangeFournisseur(e){
        this.setState({
            fournisseur: e.target.value
        });
    }
    onChangeCodebarre(e){
        this.setState({
            codebarre:e.target.value
        })
    }
    onChangeDateentree(dateentree){
        this.setState({
            dateentree: dateentree
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
            emprunteepar:this.state.emprunteepar,
            derniereutilisation: this.state.derniereutilisation,
            prochaineutilisation: this.state.prochaineutilisation,
            prix: this.state.prix,
            etat: this.state.etat,
            statut:false,
            fournisseur:this.state.fournisseur,
            codebarre: this.state.codebarre,
            dateentree:this.state.dateentree,


        }

        console.log(materiel);
        axios.post('http://localhost:5000/materiels/add',materiel)
            .then(res=>console.log(res.data));

        window.location = '/empruntee';
    }

    render() {
        return (
            <div>
                <h3>Réserver un Materiel</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom:</label>
                        <input type="text" required className="form-control" value={this.state.nom}
                               onChange={this.onChangeNom}/>
                    </div>
                    <div className="form-group">
                        <label>Reference:</label>
                        <input type="text" required className="form-control" value={this.state.reference}
                               onChange={this.onChangeReference}/>
                    </div>
                    <div className="form-group">
                        <label>Quantité:</label>
                        <input type="text" required className="form-control" value={this.state.stockdispo}
                               onChange={this.onChangeStockdispo}/>
                    </div>
                    <div className="form-group">
                        <label>Demandé par :</label>
                        <input type="text" required className="form-control" value={this.state.emprunteepar}
                               onChange={this.onChangeEmprunteepar}/>
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Date de Demande :</label>
                            <DatePicker selected={this.state.derniereutilisation} onChange={this.onChangeDerniereutilisation}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label>Date de retour:</label>
                            <DatePicker selected={this.state.prochaineutilisation} onChange={this.onChangeProchaineutilisation}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Prix:</label>
                        <input type="text" required className="form-control" value={this.state.prix}
                               onChange={this.onChangePrix}/>
                    </div>

                    <div className="form-group">
                        <label>code à barre</label>
                        <input type="text" required className="form-control" value={this.state.Codebarre}
                               onChange={this.onChangeCodebarre}/>
                    </div>

                    {/*fournisseur*/}
                    {/*dateentree*/}
                    {/*emprunteepar*/}
                    {/*codebarre*/}






                    <div className="form-group">
                        <input type="submit" value="Réserver Materiel" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }

}
