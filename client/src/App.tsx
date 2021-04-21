import { useState } from "react";
import { PeopleList } from "./components/PeopleList";
import { PeopleSearch } from "./components/PeopleSearch";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";
import { GlobalStyle, Title } from "./App.styles";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Title>People of Star Wars</Title>
          <Search setSearchInput={setSearchInput} />
        </div>
        {searchInput == "" ? (
          <>
            <PeopleList page={selectedPage} />
            <Pagination setSelectedPage={setSelectedPage} />
          </>
        ) : (
          <PeopleSearch search={searchInput} />
        )}
      </div>
    </>
  );
};

export default App;
