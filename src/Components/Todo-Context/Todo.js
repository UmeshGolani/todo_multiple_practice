import React from 'react';
import { useTodoContext } from './TodoContext';

const Todo = () => {
  const {
    search,
    itemsToDisplay,
    currentPage,
    totalPages,
    handleSearch,
    handlePageChange,
  } = useTodoContext();

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className='search-field'
        name='search'
      />
      <h1>Todo</h1>
      <ul className='items'>
        {itemsToDisplay.map((item, i) => (
          <li key={i} className='item'>{item}</li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Todo;