import React, { Component } from 'react';
import './App.css';
import CreateConsignment from './CreateConsignment';
import Authenticate from './Authenticate';

class App extends Component {

    state = {
        err: null,
        authenticate: false,
    }

    onAuth = (token) => {
        this.setState({
            authenticated: true,
        });
    }

    renderLogin = () => <Authenticate onAuth={this.onAuth} />

    renderAuthenticated = () => <CreateConsignment />

    getToken = () => {
        return localStorage.getItem('token') || false;
    }

    isAuthenticated = () => {
        return this.state.authenticated || this.getToken() || false;
    }

    render() {
        const authenticated = this.isAuthenticated();
        return (
            <div className="App">
            <div className="App-header">
            <h2>Shippy</h2>
            </div>
            <div className='app-intro container'>
            {(authenticated ? this.renderAuthenticated() : this.renderLogin())}
            </div>
            </div>
        );
    }
}

export default App;
