import React, {useEffect} from 'react';
import {postSliceActions, useAppDispatch, useAppSelector} from "../redux/store";

const PostsPage = () => {
    let {posts,post} = useAppSelector(state => state.postReducer);
    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postSliceActions.loadPosts());
    }, []);
    return (
        <div>
            {posts.map((post) => (<div key={post.id}>{post.id + '-'} {post.title}</div>))}
        </div>
    );
};

export default PostsPage;