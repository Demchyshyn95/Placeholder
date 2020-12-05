import React, {useEffect, useState} from 'react';
import {PostService} from "../../Services/PostsService";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import Post from "../Post/Post";
import {withRouter} from "react-router";


const Posts = (props) => {

    const [posts, setPosts] = useState();
    const [showPost, setShowPost] = useState(false);
    const [savedNewPost, setSavedNewPost] = useState(false);
    const [showCreatePost, setShowCreatePost] = useState(false);

    const postsService = new PostService();
    const {id:userId} = props;
    useEffect(() => getPosts(), [])

    async function getPosts() {
        const rezult = await postsService.getPostsByUserId(userId);

        setPosts(rezult);
    }

    const removePost = async (postId) => {
        const newPosts = await postsService.removePostById(postId, userId);

        setPosts(newPosts);
    }

    const createNewPost = async (e) => {
        e.preventDefault();
        const title = e.target.elements.newPost.value;
        const newPosts = await postsService.createNewPost(title, userId);
        setSavedNewPost(!savedNewPost);
        setPosts(newPosts);
    }

    const showCreatePostBtn = () => {
        setShowCreatePost(!showCreatePost)
    }

    return (
        <div>
            {
                (posts && showPost) ?
                    <div>NEWPost</div>
                    : (
                        <div>
                            <div>{
                                posts && posts.map(post => <Post post={post} removePost={ removePost } userId={userId}/>
                            )}
                            </div>
                            <div>
                                {
                                    showCreatePost ?
                                        <CreateNewPost createNewPost={createNewPost} savedNewPost={ savedNewPost } />
                                        :
                                        <button type="button" className="btn btn-success" id='btn'
                                                onClick={ showCreatePostBtn }>
                                            Create new post
                                        </button>
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
};
export default withRouter (Posts);

