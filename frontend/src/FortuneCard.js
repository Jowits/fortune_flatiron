import React from 'react';

const FortuneCard  = ({fortune}) => {

    return (
        <div>
            <h3>{fortune.user.username}</h3>
            <p>{fortune.fortune.content}</p>
        </div>
    )
}

export default FortuneCard;