import React, {useEffect, useState} from "react";
import {PostService} from "../../Services/PostsService";
import '../SignIn/style.css';


const Selected_Post = ({match}) => {
    const [post, setPost] = useState();
    const postsService = new PostService();

    useEffect(() => getPost(), []);

    const getPost = async () => {
        const {id} = match.params;
        const post = await postsService.getPostById(id);
        setPost(post);
    }

    return (
        <div className="center"> {
            post ?
                <div>
                    <p><h2 className="red">Post - {post.id}</h2></p>
                    <p className="blue">userId: {post.userId}</p>
                    <p>title: {post.title}</p>
                    <p>body: {post.body}</p>
                    <hr/>
                </div>
                :
                ''
        }
        </div>
    )
}
export default Selected_Post;
