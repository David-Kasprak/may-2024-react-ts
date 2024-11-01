import React, {useEffect, useState} from 'react';
import {useStore} from "../store/store";
import {IPost} from "../models/IPost";

const TotalPage = () => {
    let {postSlice:{allPosts}, commentSlice:{allComments}} = useStore();
     const[posts, setPosts] = useState<IPost[]>([]);
     useEffect(() => {

     });
    return (
        <ul>
            {
                posts.map((post)=><li>
                    <div>{post.title}</div>
                    <ol>
                        {
                            post.comments?.map((comment)=>(<li>{comment.id}</li>))
                        }
                    </ol>
                </li>)
            }
        </ul>
    );
};

export default TotalPage;