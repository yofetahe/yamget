import React from 'react'

import Comment from './Comment';

import './comments.css';

function Comments() {
    const comments = [
        { id: 1, content: "Content 1", givenBy: "Given By" },
        { id: 2, content: "Content 2", givenBy: "Given By" },
        { id: 3, content: "Content 3", givenBy: "Given By" }
    ];
    return (
        <div className="PeopleComment">
            <div className="Title">What people say about us?</div>
            <div className="Comments">
                {comments.map(comment => <Comment comment={comment} />)}
            </div>
        </div>
    )
}

export default Comments;