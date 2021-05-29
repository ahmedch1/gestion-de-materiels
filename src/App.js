import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import MaterielsList from "./components/materiels-list.component";
import EditMateriel from "./components/edit-materiels.component";
import CreateMateriel from "./components/create-materiel.component";
import MaterielsSearch from "./components/search-materiel.component";
import MaterielsSearch2 from "./components/search2-materiel.component";
import MaterielsSearch3 from "./components/search3-materiel.component";
import MaterielsEntree from "./components/materiels-list-entree.component";
import MaterielsEmprunte from "./components/materiels-list-empruntee.component";
import MaterielsStats from "./components/materiels-stats-component"
import MaterielLogin from "./components/Login-materiel-component"
import ReserverMateriel from './components/reserver-materiel.component';
import SignupMateriel from './components/signup-materiel-component';

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <br/>
                <Route path="/" exact component={MaterielLogin}/>
                <Route path="/materiels" component={MaterielsList}/>
                <Route path="/edit/:id" component={EditMateriel}/>
                <Route path="/create" component={CreateMateriel}/>
                <Route path="/recent" component={MaterielsEntree}/>
                <Route path="/empruntee" component={MaterielsEmprunte}/>
                <Route path="/reserver" component={ReserverMateriel}/>
                <Route path="/search" component={MaterielsSearch}/>
                <Route path="/search2" component={MaterielsSearch2}/>
                <Route path="/search3" component={MaterielsSearch3}/>
                <Route path="/inscription" component={SignupMateriel}/>
                <Route path="/statistiques" component={MaterielsStats}/>
            </div>
        </Router>
    );
}

export default App;
