import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import MaterielsList from "./components/materiels-list.component";
import EditMateriel from "./components/edit-materiels.component";
import CreateMateriel from "./components/create-materiel.component";
import MaterielsSearch from "./components/search-materiel.component";
import MaterielsEntree from "./components/materiels-list-entree.component";
import MaterielsEmprunte from "./components/materiels-list-empruntee.component";



function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <br/>
                <Route path="/" exact component={MaterielsList}/>
                <Route path="/edit/:id" component={EditMateriel}/>
                <Route path="/create" component={CreateMateriel}/>
                <Route path="/recent" component={MaterielsEntree}/>
                <Route path="/empruntee" component={MaterielsEmprunte}/>
                <Route path="/search" component={MaterielsSearch}/>
            </div>
        </Router>
    );
}

export default App;
