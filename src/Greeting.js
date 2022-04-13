import React from "react"
import { Fragment } from "react"

export function Greeting(props){
    console.log(props)
    return(
        <Fragment>
        <h1>Welcome Greeting</h1>
        
        {props.name} {props.state} {props.dist}
        </Fragment>
    )
}