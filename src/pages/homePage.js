import React from "react";
import Header from "../components/header";
import WagersTable from "../components/wagersTable";
import {connect} from "react-redux";
import {wagersRequest} from "../actions/generalActions";

class HomePage extends React.Component {

   
    render() {
        const {wagersRequest} = this.props;

        return (
            <div>
                <Header/>
                
                <div className="container">
                <WagersTable wagersRequest={wagersRequest}/>
                </div>
            </div>
        );
    }
}


export default connect((state) => {
    return {}
}, {wagersRequest})(HomePage);