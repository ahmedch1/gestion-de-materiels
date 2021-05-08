import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import MaterielsList from "./components/materiels-list.component";
import EditMateriel from "./components/edit-materiels.component";
import CreateMateriel from "./components/create-materiel.component";
import MaterielsEntree from "./components/materiels-list-entree.component"

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <br/>
                <Route path="/" exact component={MaterielsList}/>
                <Route path="/edit/:id" component={EditMateriel}/>
                <Route path="/create" component={CreateMateriel}/>
                <Route path="/entree" component={MaterielsEntree}/>
            </div>
        </Router>
    );
}

export default App;
