import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {apiService} from "../services/api.service";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        apiService.postService.getAll().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map(value => <div>{value.title}</div>)
            }
        </div>
    );
};

export default PostsPage;