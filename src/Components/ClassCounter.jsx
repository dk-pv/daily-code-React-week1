import React,{Component} from "react";

class ClassCounter extends Component{

    state ={
        counter : 0
    }

    increment = () =>{
        this.setState({
            counter : this.state.counter + 1
        })
    }
    decrement = () =>{
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render(){
        return(
            <div>
                <h1>counter component</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

            </div>
        )
    }
}
export default ClassCounter;