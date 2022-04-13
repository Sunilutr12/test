import React, { Component } from 'react';

export default class Count extends Component {
    constructor(props){
        super(props)
        this.state= {
            count:0
        }
       //3  this.Update=this.Update.bind(this)
    }

//Update(){
 //   this.setState({
 //       count:this.state.count+1
 //   })
//}

Update = ()=>{
    this.setState({
        count:this.state.count+1
    })
}
  render() {
    return (
      <div>
       {/* 1 <p onClick={this.Update.bind(this)}> count {this.state.count} times</p>*/}
      
       {/* 2 <p onClick={()=>this.Update()}> count {this.state.count} times</p>*/}
      
       <p onClick={this.Update}> count {this.state.count} times</p>
      
      
       </div>
    );
  }
}
