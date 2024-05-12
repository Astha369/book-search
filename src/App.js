/* App.js */

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file
import SearchBar from './SearchBar';
import BookList from './BookList';
import BookDetails from './BookDetails';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBooks = async (query) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      setBooks(response.data.docs);
      setSelectedBook(null); // Clear selected book when performing a new search
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleReturnToSearch = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <header className="header">
        <h1>Book Search App</h1>
        <a href="/"><h2>Home</h2></a>
      </header>
      <div className="container">
        <div className="content">
          <div className="search-container">
            <SearchBar onSearch={searchBooks} />
          </div>
          {selectedBook ? (
            <div className="book-details">
              <h2>Book Details</h2>
              <BookDetails book={selectedBook} onReturn={handleReturnToSearch} />
            </div>
          ) : (
            <BookList books={books} onBookSelect={handleBookSelect} />
          )}
        </div>
      </div>
      <footer className="footer">
        <p>Created by [Your Name] - [Your Neptun Code]</p>
      </footer>
    </div>
  );
};

export default App;
