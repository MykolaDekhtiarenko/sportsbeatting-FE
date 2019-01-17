import React from "react";
import Header from "../components/header";
import SignUpForm from "../components/signUpForm";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {userSignUpRequest} from "../actions/signUpActions";

class SignUpPage extends React.Component {
    render() {
        const {userSignUpRequest} = this.props;
        return (
            <div>
                <Header/>
                <SignUpForm userSignUpRequest={userSignUpRequest}/>
            </div>
        );
    }
}

SignUpPage.propTypes = {
    userSignUpRequest: PropTypes.func.isRequired
};

export default connect((state) => {
    return {}
}, {userSignUpRequest})(SignUpPage);