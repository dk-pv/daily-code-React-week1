import React, { Component } from 'react';

export default class ClassComponenet extends Component {
  render() {
    return (
      <div>
        <h1>This is my first week</h1>
        <h1>{this.props.sendingData}</h1>
      </div>
    )
  }
}
