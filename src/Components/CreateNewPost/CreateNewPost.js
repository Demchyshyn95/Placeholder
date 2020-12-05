const CreateNewPost = ({savedNewPost, createNewPost}) => {
    return (
        <div>
            {
                savedNewPost ?
                    <div className="alert alert-success">
                        <strong>Success!</strong> Post Saved!
                    </div>
                    :
                    <form onSubmit={createNewPost}>
                        <input type='text' placeholder="Enter your new post" name="newPost" className="form-control"/>
                        <input type='submit' value="Save" className="btn-success btn-group-lg"/>
                    </form>
            }
        </div>
    )
}
export default CreateNewPost;
