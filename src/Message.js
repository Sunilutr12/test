import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:"Welcome to ower App"
        }
    }
    changeMessage(){
        this.setState({msg:"Thanks for Subscribing"})
    }
  render() {
    return (
      <div>
        <p onClick={()=>this.changeMessage()}>{this.state.msg} </p>
        
      </div>
    );
  }
}

