import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Info from "./components/info";
import SignUpPage from "./pages/signUpPage";
import SignInPage from "./pages/signInPage";
import HomePage from "./pages/homePage";


class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={SignInPage}/>
                <Route path="/signin" component={SignInPage}/>
                <Route path="/signup" component={SignUpPage}/>
                <Route path="/info" component={Info}/>
                <Route path="/home" component={HomePage}/>
            </Switch>
        );
    }
}

export default App;
