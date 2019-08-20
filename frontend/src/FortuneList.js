import React, { Component } from 'react';
import FortuneCard from './FortuneCard';

class FortuneList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.fortunes.map(fortune => < FortuneCard fortune={fortune}/>)
                }
            </div>
        );
    }
}

export default FortuneList;