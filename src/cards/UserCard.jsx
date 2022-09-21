//dynamic user card with some contents//create html
import React from "react";


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
    li.setAttribute("class", "positions")
    li.setAttribute("id", `${position.replace(' ','-').toLowerCase()}-positions`);
    //add content
    li.textContent = position;
    ul.append(li);
    div.append(ul);
    document.body.append(div);
  }
  return
}

console.log(createHtmlList());

class User extends React.Component {
  constructor(props) {
    super();
    this.name = "name";
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}


export default User;
