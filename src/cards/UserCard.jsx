//dynamic user card with some contents//create html
import React from "react";
import UsersList from './../UserList';
const positions = ["Frontend", "Backend", "UI/UX", "Product Manager"];

// make dynamic
// const positions = {
//   developers: ['frontend', 'backend',],
//   designers: ['UX designer', 'interaction designer', 'product designer',  'service designer']
// }

// const{developers, designers}= positions

function createHtmlList() {
  // let fragment = new DocumentFragment();
  // 1.create the <elements>
  let div = document.createElement("div");
  //set id
  div.className = "main-container";
  //add list into div
  let ul = document.createElement("ul");
  ul.className = "position-lists";

  for (const position of positions) {
    let li = document.createElement("li");
    li.setAttribute("class", "positions");
    li.setAttribute(
      "id",
      `${position.replace(" ", "-").toLowerCase()}-positions`
    );
    //add content
    li.textContent = position;
    ul.append(li);
    div.append(ul);
    document.body.append(div);
  }
  return;
}

console.log(createHtmlList());

class User extends React.Component {
  constructor() {
    super();
    
    this.state = {
      user: "",
      users: [],

      // position: '',
      // location: 'City, State',
      // contact: 'phone-number',
      // availability: ['looking' ,'hired' , 'hiring']
    };
  }

  handleChange = ({ target: { value } }) => this.setState({ user: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: this.state.user,
      id: Date.now(),
    };
    this.setState((state) => ({
      users: [...state.users, newUser],
      user: "",
    }));
  };

  render() {
    const { user } = this.state
    const {stateName} = this.props
    return (
      <div>
        <h2>Make User </h2>
        <form onSubmit={this.handleSubmit} action="create-new-user-profile">
          <label htmlFor="newUser"></label>
          <br />

          <input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            value={this.state.user}
          />
          <button >username</button>
          {/* <div>{this.props.name}</div> */}
        </form>
        <label htmlFor="newUser"></label>
        <h2>Hello, {user}</h2>
        <h2 >Hello, {user}, {stateName}</h2>

        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default User;
