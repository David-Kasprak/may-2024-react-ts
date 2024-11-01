import React, {useEffect} from 'react';
import {useStore} from "../store/store";

const CommentsPage = () => {
    let {commentSlice:{allComments, loadComments}} = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                loadComments(value);
            });
    });
    return (
        <div>
            {allComments.map(comment => (<li key={comment.id}>{comment.body}</li>))}
        </div>
    );
};

export default CommentsPage;