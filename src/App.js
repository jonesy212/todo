import './App.css';
import Card from './cards/Card';
import UserCard from './cards/UserCard';
import './cards/UserCard.css';
import MyClassComp from './MyClassComp';


function App() {
  return (
    <div className="App">
      <header>
        <MyClassComp />
        <Card />
        <UserCard />
      </header>
    </div>
  );
}

export default App;
