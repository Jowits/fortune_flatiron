import React, { Component } from 'react';
import FortuneList from './FortuneList'

class FortuneContainer extends Component {
    render() {
        return (
            <div>
                <FortuneList fortunes={this.props.fortunes}/>
                
        
            </div>
        );
    }
}

export default FortuneContainer;