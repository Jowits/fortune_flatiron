import React, { Component } from 'react';
import front_crystal_ball from './fortune-ball-imgs/front_crystal_ball.png'
import back_crystal_ball from './fortune-ball-imgs/back_crystal_ball.png'

class FortuneSelect extends Component {

    state = {
        showBack: false
    }

    render() {
        return (
            <div onClick={() => this.setState({showBack: !this.state.showBack})}>
                <img src={this.state.showBack ? back_crystal_ball : front_crystal_ball} alt="Flatiron Fortune ball" />
            </div>
        );
    }
}

export default FortuneSelect;