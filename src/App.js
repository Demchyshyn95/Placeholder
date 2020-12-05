import User from "./Components/User/User";
import SignIn from "./Components/SignIn/SignIn";
import {Redirect, Route, Switch} from "react-router";
import Selected_Post from "./Components/Selected_Post/Selected_Post";
import Error from "./Components/Error/Error";

function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact  component={ SignIn }/>
                <Route path='/user/:id' exact   component={ User }/>
                <Route path='/user/post/:id'   component={ Selected_Post }/>
                <Route path='/error'   component={ Error }/>
                <Redirect to='/'/>
            </Switch>
        </div>
    );
}

export default App;
