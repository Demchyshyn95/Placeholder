import {UsersService} from "../../Services/UsersService";
import './style.css'

const SignIn = (props) => {

    const userService = new UsersService()

    const findUser = async (e) => {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const users = await userService.getUsers();
        const findUser = users.find(user => user.name.toLowerCase() === username.toLowerCase());

        if (findUser) {
            const { id } = findUser;

            props.history.push({
                pathname: `/user/${ id }`
            })
            return;
        }
        props.history.push({
            pathname: '/error'
        })
    }

    return (
        <div className='center'>
            <form onSubmit={ findUser }>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" name="username"/>
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input type="text" className="form-control" name="password"/>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Submit"/>
            </form>
        </div>

    )
};

export default SignIn;
