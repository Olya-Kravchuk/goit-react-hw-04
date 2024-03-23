import React from "react";
import css from "./SearchBar.module.css";

const SearchBar = (onSearch) => {
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const form = evt.target;
  //   const topic = form.elements.topic.value;

  //   if (form.elements.topic.value.trim() === "") {
  //     alert("Please enter search term!");
  //     return;
  //   }

  //   onSearch(topic);
  //   form.reset();
  // };

  return (
    <header>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
