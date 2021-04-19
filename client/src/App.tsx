import { useState } from "react";
import { PeopleList } from "./components/PeopleList";
import { Pagination } from "./components/Pagination";
import "./App.css";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="container">
      <h1>People of Star Wars</h1>
      <PeopleList page={selectedPage} />
      <Pagination setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
