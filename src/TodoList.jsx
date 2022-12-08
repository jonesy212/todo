import React from "react";

class TodoList extends React.Component {

    render() {
      const { items, handleRemove } = this.props;
      
    return (
      <ul>
            {items.map((item) => (
        
          <li key={item.id}>
            <div>{item.content}</div>
            <div>
              <button onClick={handleRemove.bind(null, item)}>remove</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
