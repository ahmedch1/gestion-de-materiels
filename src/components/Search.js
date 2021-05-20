// import React from "react";
// import {useState} from 'react'
//
// function Searchmateriel(){
//     const [searchTerm,setSearchTerm]=useState("");
//     return <div className="Search">
//         <input type="text" placeholder="Search..."
//                onChange={(event)=>{
//
//                }}/>
//
//     </div>
// }
// export default Searchmateriel;

import React, {useState} from 'react'
function Search(){

    const [searchTerm,setSearchTerm]=useState("");

    // {this.state.materiels.map((val, key) => {
    //     return <div className="user" key={key}><p>{val.nom}</p>

    return(

        <div className="Search">
            <input type="text" placeholder="Search..." onChange={(event => {
                setSearchTerm(event.target.value);
            })}/>



        </div>
    )
}

export default Search;
