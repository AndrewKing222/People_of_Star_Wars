import "./App.css";
import { PeopleList } from "./components/PeopleList";

const App = () => {
  return (
    <div className="container">
      <h1>People of Star Wars</h1>
      <PeopleList />
    </div>
  );
};

export default App;
