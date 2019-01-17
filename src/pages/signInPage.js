import React from "react";
import Header from "../components/header";
import SignInForm from "../components/signInForm";
import PropTypes from "prop-types";
import {userSignInRequest} from "../actions/signInActions"
import {connect} from "react-redux";

class SignInPage extends React.Component {


    render() {
        const {userSignInRequest} = this.props;

        return (
            <div>
                <Header/>
                <SignInForm userSignInRequest={userSignInRequest}/>
            </div>
        );
    }
}

SignInPage.propTypes = {
    userSignInRequest: PropTypes.func.isRequired
};

export default connect((state) => {
    return {}
}, {userSignInRequest})(SignInPage);