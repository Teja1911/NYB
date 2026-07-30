import React, { Component } from 'react'

export default class ClassEvent extends Component {
    // Construction Method 
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        alert("Button Clicked")
    }
    handleOnClick=()=>{
        alert("Button Clicked")
    }
    handleonClick(){
        alert("Button Clicked")
    }
  render() {
    return (
      <div>
        <h2>Constructor Binding</h2>
        <button onClick={this.handleClick}>Click</button>
        <hr />
        <h2>Arrow Function Binding</h2>
        <button onClick={this.handleOnClick}>Click</button>
        <h2>Inline bind</h2>
        <button onClick={this.handleonClick.bind(this)}>Click</button>
      </div>
    )
  }
}
