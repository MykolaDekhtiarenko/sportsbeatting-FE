import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Info from "./components/info";
import SignUpPage from "./pages/signUpPage";
import SignInPage from "./pages/signInPage";
import HomePage from "./pages/homePage";
import { PrivateRoute } from './components/common/privateRoute';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={SignInPage}/>
                <Route path="/signin" component={SignInPage}/>
                <Route path="/signup" component={SignUpPage}/>
                <PrivateRoute path="/info" component={Info}/>
                <PrivateRoute path="/home" component={HomePage}/>
            </Switch>
        );
    }
}

export default App;
