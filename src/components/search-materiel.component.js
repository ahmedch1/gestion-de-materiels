import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../SearchApp.css'
import './search.css'

import '@fortawesome/fontawesome-svg-core';


export default class SearchMaterielComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '', results: {},
            loading: false,
            message: ''
        };
        this.cancel = '';
    }

    fetchSearchResults = (query) => {
        const searchUrl = `http://localhost:5000/materiels?q=${query}`;
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                const resultNotFoundMsg = !res.data.length
                    ? 'there are no more search results'
                    : '';
                this.setState({
                    results: res.data,
                    message: resultNotFoundMsg,
                    loading: false
                })
            })
            .catch(error => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'failed to fetch the data'
                    })
                }
            })
    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({query, results: {}, message: ''})
        } else {
            this.setState({query: query, loading: true, message: ''}, () => {
                this.fetchSearchResults(query);
            })
        }
    };

    renderSearchResults = () => {
        const {results} = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {results.map(result => {
                        console.log(document.getElementById("search-input").value);
                        if (result.nom === document.getElementById("search-input").value) {
                            return (
                                <div key={result._id} className="result-item">
                                    <h2>Nom du materiel:</h2> {result.nom}
                                    <h2>Famille du matériel:</h2> {result.famille}
                                    <h2>Reference:</h2>{result.reference}
                                </div>
                            )
                        } else {
                            return (
                                <div className="result-item">
                                    <h2>Existe pas</h2>
                                </div>
                            )
                        }


                    })}
                </div>
            )
        }
    };

    render() {
        const {query} = this.state;
        console.warn(this.state);
        return (

            <div className="container">
                {/*heading*/}
                <h2 className="heading">Live Search: react Application</h2>
                {/*Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input type="text" name="query" value={query} id="search-input"
                           placeholder="Search ..."
                           onChange={this.handleOnInputChange}/>
                    <i className="fa fa-search search-icon" aria-hidden="true"/>
                </label>

                {/*Result*/}
                {this.renderSearchResults()}

            </div>
        )
    }

}
