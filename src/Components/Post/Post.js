import React from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

const Post = (props) => {
    const { id: postId, userId, title, body } = props.post;
    const { removePost } = props;

    return (
        <div>
            <p><h2>Post - { postId }</h2></p>
            <p>userId: { userId }</p>
            <p>title: { title }</p>
            <p>body: { body }</p>
            <Link to={`/user/post/${ postId }`}>
                <button className="btn btn-primary">More about
                </button>
            </Link>
            <button className="btn btn-danger" onClick={() => removePost(postId)}>delete</button>
            <hr/>
        </div>
    )
}
export default withRouter(Post);
