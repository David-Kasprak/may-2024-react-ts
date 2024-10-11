import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {postService} from "./service/dummyjson.api.service";
import {IPost} from "./models/IPost";
import Posts from "./components/posts/Posts";

const App: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const lift = async (id: number) => {
        setPosts(await postService.getPostsOfUser(id));
    }
    return (
        <>
            <Users lift={lift}/>
            <hr/>
            <Posts posts={posts}/>
            <hr/>
        </>
    );
}

export default App;