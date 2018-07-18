import React, { Component } from 'react';
export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.props=props;
        this.addSumAllData=props.addSumAllData;
        this.cutSumAllData=props.cutSumAllData;
        this.state={num:0};
    }
    //使用箭头函数没有作用域，可以get到this.state
    add=()=>{
        this.setState({num:this.state.num+1});
        this.addSumAllData();

    }

    cut=()=>{
        this.setState({num:this.state.num-1});
        this.cutSumAllData();

    }

    render(){
        return(
            <div>
                <button onClick={this.add}>add</button>
                <button onClick={this.cut}>cut</button>
                <span>{this.state.num}</span>
            </div>
        );

    }
}