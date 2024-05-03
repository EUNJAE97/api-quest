import {Link} from "react-router-dom";

function PostInfo({post}) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className="item">
                <h3>제목 : {post.title}</h3>
                <h3>작성일 : {post.createdAt}</h3>
            </div>
        </Link>
    );
}

export default PostInfo;