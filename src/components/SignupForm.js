import React, {useState} from "react";
import './style.css'
import {Link} from "react-router-dom";
function SignupForm({Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <div className="container-fluid row">
            <div className="col-sm-6">
                <div className="form-box">
                    <form onSubmit={submitHandler}>
                        <div className="form-inner">
                            <h2>Créer un compte</h2>
                            {(error != "") ? (<div className="error">{error}</div>) : ""}
                            {/*<div className="form-group">*/}
                            {/*    <label htmlFor="name">Name:</label>*/}
                            {/*    <input type="text" name="name" id="name"*/}
                            {/*           onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" placeholder="Email" type="email" name="email" id="email"
                                       onChange={e => setDetails({...details, email: e.target.value})}
                                       value={details.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe</label>
                                <input className="form-control" placeholder="Mot de passe" type="password" name="password"
                                       id="password"
                                       onChange={e => setDetails({...details, password: e.target.value})}
                                       value={details.password}/>
                            </div>
                            <div className="btn btn-block"> <Link to="/inscription" className="nav-link">S'inscrire</Link></div>
                        </div>


                    </form>
                </div>
                Vous avez un compte?
                <div className="">
                <input type="submit" value="Se Connecter" className="btn btn-block"/>
                </div>
                </div>
            <div className="col-sm-6 col right">

            </div>

        </div>
    )
}

export default SignupForm;
