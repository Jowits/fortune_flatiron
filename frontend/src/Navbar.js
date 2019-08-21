import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar"> 
                <h1 className="nav-item"><span>//</span> Flatiron Fortune Teller</h1>
                <form onSubmit={this.props.handleSubmit} onChange={(event) => this.props.handleChange(event)}>
                <label className="textColor">
                    {"Name: "} 
                    <input className="username" type="text" name="name" value={this.props.user}/>
                </label>
                <input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-navy button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Navbar;