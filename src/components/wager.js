import React from "react"

export const Wager = (props) => (
    <tr>
        <td>{props.wager.eventTitle}</td>
        <td>{props.wager.eventType}</td>
        <td>{props.wager.betType}</td>
        <td>{props.wager.outcomeValue}</td>
        <td>{props.wager.outcomeOdd}</td>
        <td>{props.wager.wagerAmount} {props.wager.wagerCurrency}</td>
        <td>{props.wager.win}</td>
        <td>{props.wager.processed}</td>
    </tr>
);