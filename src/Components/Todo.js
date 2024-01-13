import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const array = ["apple", "banana", "cat", "dog", "elm", "frog", "grand", "hype", "i", "j", "k"];
    const itemsPerPage = 3; 
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredArray = array.filter(item => item.toLowerCase().includes(search.toLowerCase()));

    const totalPages = Math.ceil(filteredArray.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsToDisplay = filteredArray.slice(startIndex, endIndex);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1); 
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div>
            <label htmlFor="search">Search</label>
            <input type="text" value={search} onChange={(e) => handleSearch(e)} className='search-field' name='search'/>
            <h1>Todo</h1>
            <ul className='items'>
                {itemsToDisplay.map((item, i) => (
                    <li key={i} className='item'>{item}</li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
}

export default Todo;
