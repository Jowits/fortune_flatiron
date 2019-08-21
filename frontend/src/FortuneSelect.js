import React, { Component } from 'react';
import front_crystal_ball from './fortune-ball-imgs/front_crystal_ball.png'
import back_crystal_ball from './fortune-ball-imgs/back_crystal_ball.png'

class FortuneSelect extends Component {

    state = {
        showBack: false
    }

    handleClick = () => {
        this.setState({showBack: !this.state.showBack})
         if (this.state.showBack) return
            this.props.getRandomFortune()
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <img src={this.state.showBack ? back_crystal_ball : front_crystal_ball} alt="Flatiron Fortune ball" />
                <p>{this.state.showBack ? this.props.selectedFortune.content : " "}</p>
            </div>
        );
    }
}

export default FortuneSelect;