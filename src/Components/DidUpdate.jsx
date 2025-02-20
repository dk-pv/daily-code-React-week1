import React from "react";

class DidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    console.log("mountig");
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.count !== this.state.count) {
      console.log("updating");
      this.setState({ time: new Date().toLocaleTimeString() });
    }
  }

  counting = () => {
    this.setState((previous) => {
      return {
        count: previous.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.time}</h1>
        {console.log("rendering")}
        <button onClick={this.counting}>Add</button>
      </div>
    );
  }
}

export default DidUpdate;
