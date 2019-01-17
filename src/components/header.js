import React from "react";
import PropTypes from "prop-types"

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Sports beatting game</span>
                { this.isSignedIn() && <button type="button" className="btn btn-outline-info my-2 my-sm-0" onClick={this.signOut}>Sign out</button> }
            </nav>
        )
    }
    
    isSignedIn = () => {
        return localStorage.getItem("authToken");
    }

    signOut = () => {
        localStorage.removeItem("authToken");
        this.context.router.history.push("/signin");
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired
};
