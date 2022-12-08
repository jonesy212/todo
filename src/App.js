import UserCard from './cards/UserCard';
import "./css/App.css";
import './css/UserCard.css';
import TodoApp from "./TodoApp";

function App() {
  return (
    <div className="App">
      <header>
        <TodoApp />
        {/* <MyClassComp  /> */}
        <UserCard  />
      </header>
    </div>
  );
}

export default App;
