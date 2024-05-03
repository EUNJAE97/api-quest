import {useEffect, useState} from "react";
import {getPostList} from "../api/PostAPI";
import UserInfo from "../components/UserInfo";
import PostInfo from "../components/PostInfo";

function PostList() {

    const [postList, setPostList] = useState();

    useEffect(() => {
        getPostList().then(data => setPostList(data));
    }, []);

    return (
        <div className="content-row">
            { postList && postList.map(post => <PostInfo key={post.id} post={post}/>)}
        </div>
    );
}

export default PostList;