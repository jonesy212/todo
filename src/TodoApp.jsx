import React from "react";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  //because there is a buutton hee that changes item..
  //this is where we track state at

  constructor() {
    super();

    // function SetDueDateField() {
    //   if (Xrm.Page.ui.getFormType() == 1) {
    //     var dueDate = Xrm.Page.data.entity.attributes.get("scheduledend");
    //     var now = new Date();
    //     var endDate = new Date().setDate(now.getDate() + 7);
    //     dueDate.setValue(endDate);
    //   }
    // }
    this.state = {
      // assignedTo: this.state.user,
      // dueDate: this.state.SetDueDateField(),
      createdAt: new Date(),
      status: "pending",
      content: "",
      newItem: "",
      items: [],
    };
  }

handleChange = ({ target: { value } }) => this.setState({ content: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      createdAt: new Date(),
      status: "pending success",
      content: this.state.content,
      // assignTo: this.state.user,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: [...state.items, newItem],
      content: "",
    }));
    console.log("adding", newItem);
  };

  handleRemove = (itemToBeDeleted) => {
    console.log("removing", itemToBeDeleted);
    let newItems = this.state.items.filter((item) => {
      return item != itemToBeDeleted;
    });

    this.setState({ items: newItems });
  };

  render() {
    return (
      <div>
        <h2>Todo</h2>
        <form onSubmit={this.handleSubmit} action="create-task-item">
          <label htmlFor="newTodo">What to be done</label>
          <br />
          <input
            onChange={this.handleChange}
            type="content"
            autoComplete="off"
            value={this.state.content}
          />
          <button>Add</button>
        </form>
        <TodoList
          handleRemove={this.handleRemove.bind(this)}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default TodoApp;
