import React from "react";
import PropTypes from "prop-types";
import { getAuthToken } from "../utils/utils";
import { Wager } from "./wager";
class WagersTable extends React.Component {


    constructor(state){
        super(state);
        this.state = {
            wagers:[]
        }
    }

    componentWillMount(){
        this.props.wagersRequest(getAuthToken()).then((resp) => this.setState({wagers: resp.data}));
    }

    deleteWager = (wagerId) => {
        this.props.deleteWagerRequest(getAuthToken(), wagerId)
        .then(() => {
            let wagers = Object.assign([], this.state.wagers);
            wagers.splice(wagers.findIndex(elem => elem.wagerId === wagerId), 1);
            this.setState({wagers: wagers});
        })
        .catch(error => console.log(error));
    }



    render(){
        return (
            <div className="block">
                <div className="header paddind">Wagers</div>
                <div className="table-responsive">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Event title</th>
                                    <th scope="col">Event type</th>
                                    <th scope="col">Bet type</th>
                                    <th scope="col">Outcome value</th>
                                    <th scope="col">Outcome odd</th>
                                    <th scope="col">Wager amount</th>
                                    <th scope="col">Winner</th>
                                    <th scope="col">Processed</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.wagers.map(wager => {
                                    return(<Wager key={wager.wagerId} wager={wager} delete={this.deleteWager.bind(this, wager.wagerId)}/>)
                                })
                            }
                            </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default WagersTable;

WagersTable.propTypes = {
    wagersRequest: PropTypes.func.isRequired,
    deleteWagerRequest: PropTypes.func.isRequired
};