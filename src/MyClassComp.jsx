import React from "react";

class MyClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.names = [];
    this.state = {
      name: "",
      count: 0,
      //2.stateName was initiated in return with propName
      stateName: this.props.propName,
      date: new Date()
    };
  }

  //lifecycle hooks -look up
  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  tick = () => this.setState({ date: new Date()})
  shuffle = () => {
    const i = Math.floor(Math.random() * this.names.length);
    this.setState({
      name: this.names[i],
      //3.after adding to state, use where action is happening to update name
      stateName: this.names[i], //changes names rendered on screen
      count: this.state.count + 1,
    });
  };


  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    //destructreing for stated
    const { name, count, stateName,date} = this.state;
    // const { anotherProp } = this.props;
    return (
      <div>
        <div> hello, {name}</div>
        <div>Counting {count}</div>
        {/* 1.create a prop -- click to change name on screen*/}
        <h2>Prop {stateName}</h2>
        {/* <h2> {anotherProp}</h2> */}
        <button onClick={this.shuffle}>Click me</button>
        <button onClick={this.increment}>Click me</button>
        {/* <h2 >{date.toLocaleTimeString()} </h2> */}
      </div>
    );
  }
}

export default MyClassComp;