import React, { Component } from 'react';
import FortuneList from './FortuneList';
import FortuneSelect from './FortuneSelect';


class FortuneContainer extends Component {
    render() {
        return (
            <div>
                <FortuneList fortunes={this.props.fortunes}/>
                <FortuneSelect />
            </div>
        );
    }
}

export default FortuneContainer;