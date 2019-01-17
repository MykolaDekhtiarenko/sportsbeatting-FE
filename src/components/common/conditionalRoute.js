import React from "react";
import {Redirect, Route} from "react-router-dom";

export const ConditionalRoute = ({component: Component, condition, redirectUrl, ...rest}) => (
    <Route
    {...rest}
    render = { props =>
        condition ? (<Component {...props}/>) : (
            <Redirect to={{
                pathname: redirectUrl,
                state: {from: props.location}
            }}/>
        )
    }
    />
);