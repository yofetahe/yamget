import React from 'react'

import './comments.css';

function Comment(props) {
    return (
        <div className="Comment">
            <div> {props.comment.content} </div>
            <div> {props.comment.givenBy} </div>
        </div>
    )
}

export default  Comment