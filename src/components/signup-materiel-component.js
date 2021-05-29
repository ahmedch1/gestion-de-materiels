import React, {useState, Component} from 'react';
import LoginForm from "./LoginForm"
import MaterielsList from "./materiels-list.component";

function LoginMateriels() {
    const adminUser = {
        email: "rania@mail.com",
        password: "admin123"
    }


    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("logged in");
            setUser({
                name:details.name,
                email: details.email
            });
        } else {
            console.log("details do not match")
            setError("Detaills not match")
        }

    }
    const Logout = () => {
        console.log("Logout");
        setUser({name: "",email: ""});
    }
    return (

        <div className="App">
            {(user.email !== "") ? (<div className="welcome">
                    <MaterielsList/>
                    <button className="btn btn-block" onClick={Logout}>Se déconnecter</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}

        </div>
    );
}

export default LoginMateriels;

