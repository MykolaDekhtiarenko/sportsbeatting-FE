import React, {Component} from 'react';
import './App.css';
import {Switch} from "react-router-dom";
import Info from "./components/info";
import SignUpPage from "./pages/signUpPage";
import SignInPage from "./pages/signInPage";
import HomePage from "./pages/homePage";
import { ConditionalRoute } from './components/common/conditionalRoute';


class App extends Component {
    render() {
        return (
            <Switch>
                <ConditionalRoute exact={true} path="/" component={HomePage} condition={!this.isAnonymous()} redirectUrl="signin"/>
                <ConditionalRoute path="/signin" component={SignInPage} condition={this.isAnonymous()} redirectUrl="home"/>
                <ConditionalRoute path="/signup" component={SignUpPage} condition={this.isAnonymous()} redirectUrl="home"/>
                <ConditionalRoute path="/info" component={Info} condition={!this.isAnonymous()} redirectUrl="signin"/>
                <ConditionalRoute path="/home" component={HomePage} condition={!this.isAnonymous()} redirectUrl="signin"/>
            </Switch>
        );
    }

    isAnonymous = () => {
        return !localStorage.getItem("authToken");
    }



}

export default App;
