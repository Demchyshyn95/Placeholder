export class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts'

    async getPostsByUserId(id) {
        try {
            return ((await fetch(`${ this.url }?userId=${ id }`)).json())
        } catch (e) {
            console.log(e)
        }
    }

    async getPostById(id) {
        try {
            return ((await fetch(`${ this.url }/${ id }`)).json())
        } catch (e) {
            console.log(e)
        }
    }

    async removePostById(postId, userId) {
        try {
            await fetch(`${ this.url }/${ postId }`, {method: "delete"});
            return (await this.getPostsByUserId(userId));
        } catch (e) {
            console.log(e);
        }
    }

    async createNewPost(title, userId) {
        try {
            await fetch(`${ this.url }?userId=${ userId }`, {
                    method: 'post',
                    body: JSON.stringify({
                        id: 11,
                        title: title,
                    })
                }
            )
            return (await this.getPostsByUserId(userId));

        } catch (e) {
            console.log(e);
        }
    }
}
