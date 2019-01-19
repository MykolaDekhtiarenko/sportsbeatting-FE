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
        console.log("Mounted");
       
        this.props.wagersRequest(getAuthToken()).then((resp) => this.setState({wagers: resp.data}));
        // console.log(auth);
    }


    render(){
        return (
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
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.wagers.map(wager => {
                                return(<Wager key={wager.wagerId} wager={wager}/>)
                            })
                        }
                        </tbody>
                </table>
            </div>
        );
    }
}

export default WagersTable;

WagersTable.propTypes = {
    wagersRequest: PropTypes.func.isRequired
};