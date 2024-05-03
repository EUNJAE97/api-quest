import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPostDetail} from "../api/PostAPI";

function PostDetail() {
    const {id} = useParams();

    const [post, setPost] = useState();

    useEffect( () => {
        getPostDetail(id).then(data => setPost(data));
    },[])

    return(
        <div className="content-col">
            { post &&
            <>
                    <h1>INFO</h1>
                    <p>Title : {post.title}</p>
                    <p>Content : {post.content}</p>
                    <p>Created : {post.createdAt}</p>

            </>

            }

        </div>
    )

}
export default PostDetail;