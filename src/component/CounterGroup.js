import React, { Component } from 'react';
import Counter from "./Counter";
// import Counter from "./component/Counter";
export default class CounterGroup extends Component{
    constructor(props) {
        super(props);
        this.props=props;
        // let number=Array.from({length:this.props.counterNum}).map(x =>0);
        // this.state={num:number,sum:0};
        this.state={sum:0};
    }
   //使用箭头函数没有作用域，可以get到this.state
   //  add=(i)=>{
   //      let result=this.state.num;
   //      result[i]=this.state.num[i]+1;
   //      this.setState({sum:this.state.sum+1});
   //
   //  }
   //
   //  cut=(i)=>{
   //      let result=this.state.num;
   //      result[i]=this.state.num[i]-1;
   //      this.setState({num:result});
   //      this.setState({sum:this.state.sum-1});
   //
   //  }

    // render(){
    //     let list=(number)=>{
    //         let result=[];
    //         for (let i=0;i<number;i++){
    //             result.push(
    //                 <div>
    //                     <button onClick={()=>this.add(i)}>add</button>
    //                     <button onClick={()=>this.cut(i)}>cut</button>
    //                     <span key={i}>{this.state.num[i]}</span>
    //                 </div>
    //             )
    //         }
    //         return result;
    //     }
    //     return(
    //         <div>
    //             {list(this.props.counterNum)}
    //             <p>总和：{this.state.sum}</p>
    //         </div>
    //
    //     );
    // }



    render(){
        let list=(number)=>{
            let result=[];
            for (let i=0;i<number;i++){
                result.push(
                    <Counter addSumAllData={this.addSumAllData} cutSumAllData={this.cutSumAllData}/>
                )
            }
            return result;
        }
        return(
            <div>
                {list(this.props.counterNum)}
                <p>总和：{this.state.sum}</p>
            </div>

        );
    }

    addSumAllData =()=> {
        this.setState({sum:this.state.sum+1});
    }

    cutSumAllData =()=> {
        this.setState({sum:this.state.sum-1});
    }
}