import React, {useEffect, useState} from 'react';

import {UsersService} from "../../Services/UsersService";
import Posts from "../Posts/Posts";
import '../SignIn/style.css'


const User = props => {
    const [user, setUser] = useState();
    const [showPost, setShowPost] = useState(false);
    const userService = new UsersService()

    useEffect(() => getUserById(), [])

    async function getUserById() {
        const id = props.match.params.id;
        const rezult = await userService.getUserById(id);
        setUser(rezult)
    }

    const changeShow = () => {
        setShowPost(!showPost);
    }
    const redirect = () => {
        props.history.push({
            pathname: '/'
        })
    }

return (
    <div className="center">
        {
            user && (
                <div>
                    <div>
                        <button onClick={ redirect } className="d-flex ml-auto p-2  btn-outline-info">Sign out</button>
                    </div>
                    <div>
                        <p><h2>{ user.name }</h2></p>
                        <p>phone:<em>{ user.phone }</em></p>
                        <p>website: <em>{ user.website }</em></p>
                        <button className='btn-success' onClick={ changeShow }>My posts</button>
                    </div>
                    <div>
                        {
                            showPost && (
                                <Posts id={ user.id }/>
                            )
                        }
                    </div>

                </div>

            )
        }
    </div>
)
}


export default User;

