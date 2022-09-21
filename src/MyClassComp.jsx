import React from "react";

class MyClassComp extends React.Component {
  constructor() {
    super();
      this.name = "Dude";
      //init state
  }

    //lifecycle hooks -look up
    popup() {
        alert('hello world')
    }
  render() {
    return (
      <div>
        <div>{this.name}</div>
        <button onClick={this.popup}>Click me</button>
      </div>
    );
  }
}

export default MyClassComp;
