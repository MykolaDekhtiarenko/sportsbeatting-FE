import React from "react";
import {Link} from 'react-router-dom';
import base64 from "base-64";
import PropTypes from 'prop-types';
import TextFieldGroup from "../components/common/textFieldGroup";
import {processValidationServerError} from "../utils/serverResponceUtils";

class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: ""
        };
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.userSignInRequest("Basic " + base64.encode(this.state.email + ":" + this.state.password))
            .then(() => this.context.router.history.push("/home"))
            .catch(error => {
                this.processServerError(error.response.data);
            });

    };

    processServerError = (data) => {
        console.log(data);
        if (data.type === "VALIDATION") {
            this.setState({errors: processValidationServerError(data.errors)});
        } else {
            this.setState({errors: {"general": "User with such combination of email and password does not exists!"}});
        }
    };

    render() {
        const {errors} = this.state;
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center justify-content-lg-center">
                    <div className="col-md-8 col-lg-4">
                        <form className="form" onSubmit={this.onSubmit}>
                            <h3>Sign in</h3>
                            <h5>Please fill following form to sign in or <Link to="/signup">register here</Link>.</h5>
                            <TextFieldGroup label="Email address"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            name="email"
                            />
                            <TextFieldGroup label="Password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            name="password"
                                            type="password"
                            />
                            {errors.general && <div className="form-error">{errors.general}</div>}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

SignInForm.propTypes = {
    userSignInRequest: PropTypes.func.isRequired
};

SignInForm.contextTypes = {
    router: PropTypes.func.isRequired
};

export default SignInForm;