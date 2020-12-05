export class UsersService {
    url = 'https://jsonplaceholder.typicode.com/users'

    async getUsers (userName) {
     return (await fetch(`${ this.url }`)).json()

    }
    async getUserById (id) {
        return ((await fetch(`${ this.url }/${ id }`)).json())
    }

}


