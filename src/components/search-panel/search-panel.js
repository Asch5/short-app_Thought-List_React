import React from "react";

const SearchPanel = ({ onTextSearch }) => {
  return (
    <input
      className="form-control search-input"
      type={"text"}
      placeholder="Поиск по записям"
      onChange={(e) => {
        onTextSearch(e);
      }}
    />
  );
};

export default SearchPanel;
