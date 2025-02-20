import React from "react";

class DidMount extends React.Component {
  constructor() {
    super();
    this.state = {
      num : 0
    }
    console.log("constructor");
  }
  componentDidMount(){
    console.log("mounting ")
  }
  counting = () =>{
    this.setState({
      num : 1 
    })
  }
  render() {
    return (
      <div>
        {console.log("rendering")}
        <h1>{this.state.num}</h1>
        <button onClick={this.counting}>count</button>
      </div>
    );
  }
}
export default DidMount;


