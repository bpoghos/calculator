import { Component } from "react";
import Display from "../Display";
import Keyboard from "../Keyboard";

class CalculatorFunction extends Component {
state = {
    value: 0,
    action: false,
    result: 0
}

onValue = (e) => {
    if(this.state.value == 0){
        this.setState({
            value: e.target.textContent
        })
    }else{
    this.setState({
        value: this.state.value += e.target.textContent
    })
}}

onAction = (e) => {
    this.setState({
        result: this.state.value,
        value: 0
    }, () => {
        console.log(this.state.result);
    });
}



render(){
    const {value} = this.state
    
  

        return (
            <>
            <Display value={value}/>
            <Keyboard onValues={this.onValue} onAction={this.onAction}/>
            </>
        )
    }
}

export default CalculatorFunction