import React from "react";

interface SearchProps {
  setSearchInput: any;
}

export const Search: React.FC<SearchProps> = ({ setSearchInput }) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};
