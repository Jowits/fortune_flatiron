import React, { Component } from 'react';
import FortuneCard from './FortuneCard';

class FortuneList extends Component {
    render() {
        return (
            <div className='master-detail-element sidebar'>
                {
                    this.props.fortunes.reverse().map((fortune, i) => < FortuneCard fortune={fortune}/>)
                }
            </div>
        );
    }
}

export default FortuneList;