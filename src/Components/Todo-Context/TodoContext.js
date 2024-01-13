import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const array = ["apple", "banana", "cat", "dog", "elm", "frog", "grand", "hype", "i", "j", "k"];
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArray = array.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredArray.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredArray.slice(startIndex, endIndex);

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <TodoContext.Provider
      value={{
        search,
        itemsToDisplay,
        currentPage,
        totalPages,
        handleSearch,
        handlePageChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
