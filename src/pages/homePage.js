import React from "react";
import Header from "../components/header";
import WagersTable from "../components/wagersTable";
import AccountDetails from "../components/accountDetails"
import {connect} from "react-redux";
import {wagersRequest, deleteWagerRequest, getUserRequest, updateUserInfo} from "../actions/apiUserActions";


class HomePage extends React.Component {

   
    render() {
        const {wagersRequest, deleteWagerRequest, getUserRequest, updateUserInfo} = this.props;

        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">
                            <WagersTable wagersRequest={wagersRequest} deleteWagerRequest={deleteWagerRequest}/>
                        </div>
                        <div className="col-lg-3">
                            <AccountDetails getUserRequest={getUserRequest} updateUserInfo={updateUserInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect((state) => {
    return {}
}, {wagersRequest, deleteWagerRequest, getUserRequest, updateUserInfo})(HomePage);