import React, { Component } from 'react';
import Navbar from './Navbar.js';
import FortuneContainer from './FortuneContainer'
import './App.css';

const fortunesURL = "http://localhost:3000/api/v1/user_fortunes"
const usersURL = "http://localhost:3000/api/v1/users"


class App extends Component {

  state = {
    fortunes: [],
    selectedUser: null,
    //newFortune
  }

  componentDidMount() {
    fetch(fortunesURL)
    .then(resp => resp.json())
    .then(fortunes => this.setState({fortunes}))
  }

  handleChange = (event) => {
    this.setState({selectedUser: event.target.value})
  } 

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(usersURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({username: this.state.selectedUser})
    }).then(resp => resp.json())
    .then(console.log)
    
  };

  render() {
    return (
      <div className="app">
             <Navbar user={this.state.selectedUser} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
             <FortuneContainer fortunes={this.state.fortunes}/>
      </div>
    );
  }
}

export default App;