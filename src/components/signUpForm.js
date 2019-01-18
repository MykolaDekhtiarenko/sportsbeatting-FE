import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../components/common/textFieldGroup"
import {processValidationServerError} from "../utils/serverResponceUtils";
import ErrorAlert from "./common/errorAlert";

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: "",
            passwordConfirmation: "",
            accountNumber: "",
            dateOfBirth: "",
            errors: {}
        };
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, this.checkPasswordsMatch);
    };

    checkPasswordsMatch = () => {
        this.setState({errors: {passwordConfirmation: undefined}});
        if (this.state.password !== this.state.passwordConfirmation) {
            this.setState({errors: {passwordConfirmation: "Passwords should match each other."}});
        }
    };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.passwordConfirmation) {
            this.setState({errors: {}});
            this.props.userSignUpRequest(this.state)
                .then(() => this.context.router.history.push("/signin"))
                .catch(error => {
                        this.processServerError(error.response.data);
                    }
                );
        }
    };

    processServerError = (data) => {
        console.log(data);
        if (data.type === "VALIDATION") {
            this.setState({errors: processValidationServerError(data.errors)});
        } else if (data.type === "BUSINESS_LOGIC") {
            this.setState({errors: {"general": data.message}});
        } else {
            this.setState({errors: {"general": "Something wrong happened, please reload page or contact system administrator."}});
        }
    };

    render() {
        const {errors} = this.state;
        return (

                <div className="row justify-content-md-center justify-content-lg-center">
                    <div className="col-md-8 col-lg-4">
                        <form className="form" onSubmit={this.onSubmit}>
                            <h3>Sign up</h3>
                            <h5>Please fill following form to create am account or <Link to="/signin">login</Link>.</h5>
                            <TextFieldGroup label="Your name"
                                            onChange={this.onChange}
                                            value={this.state.name}
                                            name="name"
                                            error={errors.name}
                            />
                            <TextFieldGroup label="Email address"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            name="email"
                                            error={errors.email}
                            />
                            <TextFieldGroup label="Password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            name="password"
                                            type="password"
                                            error={errors.password}

                            />
                            <TextFieldGroup label="Password confirmation"
                                            onChange={this.onChange}
                                            value={this.state.passwordConfirmation}
                                            name="passwordConfirmation"
                                            type="password"
                                            error={errors.passwordConfirmation}
                            />
                            <div className="form-row">
                                <TextFieldGroup label="Account number"
                                                onChange={this.onChange}
                                                value={this.state.accountNumber}
                                                name="accountNumber"
                                                error={errors.accountNumber}
                                                formClasses="form-group col-md-12 col-lg-6"
                                />
                                <TextFieldGroup label="Date of birth"
                                                onChange={this.onChange}
                                                value={this.state.dateOfBirth}
                                                name="dateOfBirth"
                                                error={errors.dateOfBirth}
                                                formClasses="form-group col-md-12 col-lg-6"
                                                type="date"
                                />
                            </div>
                            <ErrorAlert value ={errors.general}/>                        
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

SignUpForm.propTypes = {
    userSignUpRequest: PropTypes.func.isRequired
};

SignUpForm.contextTypes = {
    router: PropTypes.object.isRequired
};


export default SignUpForm;