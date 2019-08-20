import React, { Component } from 'react';
import front_crystal_ball from './fortune-ball-imgs/front_crystal_ball.png'
import './App.css';

class FortuneSelect extends Component {
    render() {
        return (
            <div id="ballImage">
                <img src={front_crystal_ball} alt="Flatiron Fortune ball"/>
            </div>
        );
    }
}

export default FortuneSelect;