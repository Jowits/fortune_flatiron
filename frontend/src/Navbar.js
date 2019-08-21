import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar"> 
                <h1 className="nav-item"><span className="textColor">//</span> Flatiron Fortune Teller</h1>
                <form onSubmit={this.props.handleSubmit} onChange={(event) => this.props.handleChange(event)}>
                <label className="textColor">
                    {"Name: "} 
                    <input type="text" name="name" value={this.props.user}/>
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Navbar;