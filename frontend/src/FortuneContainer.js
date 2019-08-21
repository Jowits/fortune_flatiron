import React, { Component } from 'react';
import FortuneList from './FortuneList';
import FortuneSelect from './FortuneSelect';


class FortuneContainer extends Component {
    render() {
        return (
            <div>
                <FortuneList fortunes={this.props.fortunes}/>
                <FortuneSelect 
                    getRandomFortune={this.props.getRandomFortune} 
                    selectedFortune={this.props.selectedFortune}
                />
            </div>
        );
    }
}

export default FortuneContainer;