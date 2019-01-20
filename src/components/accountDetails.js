import React from "react";
import PropTypes from "prop-types";
import TextFieldGroup from "./common/textFieldGroup";
import ErrorAlert from "./common/errorAlert";
import { getAuthToken, processValidationServerError} from "../utils/utils";
 
class AccountDetails extends React.Component {

    constructor(state){
        super(state);
        this.state = {
            name: "",
            dateOfBirth: "",
            accountNumber: "",
            currency: "",
            balance:"",
            errors: []
        }
    }

    componentWillMount(){
        this.props.getUserRequest(getAuthToken()).then((resp) =>{
            this.setState({
                name: resp.data.name,
                dateOfBirth: resp.data.dateOfBirth,
                accountNumber: resp.data.accountNumber,
                currency: resp.data.currency,
                balance: resp.data.balance
            })
        })
    }
    
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, this.checkPasswordsMatch);
    };

    onSubmit = (event) => {
        event.preventDefault();
        
            this.setState({errors: {}});
            this.props.updateUserInfo(getAuthToken(), this.state).then(resp =>{
                this.setState({
                    name: resp.data.name,
                    dateOfBirth: resp.data.dateOfBirth,
                    accountNumber: resp.data.accountNumber,
                    currency: resp.data.currency,
                    balance: resp.data.balance
                })
            }).catch(error => {
                    this.processServerError(error.response.data);
                }
            );
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

    render(){
        return( 
            <div className="block">
                <div className="header paddind border-bottom">Account Details</div>
                <form onSubmit={this.onSubmit}>
                    <TextFieldGroup name="name" 
                                    label="Name" 
                                    value={this.state.name} 
                                    onChange={this.onChange} 
                                    error={this.state.errors.name}
                                    formClasses="details-element no-marging"
                                    />
                    <TextFieldGroup name="dateOfBirth"
                                    type="date"
                                    label="Date of birth"
                                    value={this.state.dateOfBirth} 
                                    onChange={this.onChange}
                                    error={this.state.errors.dateOfBirth} 
                                    formClasses="details-element"/>
                    <TextFieldGroup name="accountNumber"
                                    label="Account number"
                                    value={this.state.accountNumber}
                                    onChange={this.onChange}
                                    error={this.state.errors.accountNumber}
                                    formClasses="details-element"/>
                    <TextFieldGroup name="currency"
                                    label="Currency"
                                    value={this.state.currency}
                                    onChange={this.onChange}
                                    error={this.state.errors.currency}
                                    formClasses="details-element"/>
                    <TextFieldGroup name="balance"
                                    label="Balance"
                                    value={this.state.balance}
                                    onChange={this.onChange}
                                    error={this.state.errors.balance}
                                    formClasses="details-element"
                                    />
                    <div className="details-element">
                        <ErrorAlert value ={this.state.errors.general}/>
                    </div>
                    <div className="details-element">
                        <button type="submit" className="btn btn-primary btn-block">Update</button>
                    </div>
                </form>
            </div>
    )}

}
export default AccountDetails;

AccountDetails.propTypes = {
    getUserRequest: PropTypes.func.isRequired,
    updateUserInfo: PropTypes.func.isRequired
};