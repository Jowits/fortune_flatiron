import React, { Component } from 'react';
import Navbar from './Navbar.js';
import FortuneContainer from './FortuneContainer'
import './App.css';

const fortunesURL = "http://localhost:3000/api/v1/user_fortunes"


class App extends Component {

  state = {
    fortunes: []
  }

  componentDidMount() {
    fetch(fortunesURL)
    .then(resp => resp.json())
    .then(fortunes => this.setState({fortunes}))
  }

  render() {
    return (
      <div className="app">
             <Navbar fortunes={this.state.fortunes}/>
             <FortuneContainer fortunes={this.state.fortunes}/>
      </div>
    );
  }
}

export default App;