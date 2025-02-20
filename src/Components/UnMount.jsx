// 680 lineNumber
import React from "react";

class UnMount extends React.Component {
    componentWillUnmount(){
        console.log("unmounted")
    }
  render() {
    return <div>hello</div>;
  }
}

export default UnMount;
