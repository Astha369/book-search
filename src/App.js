import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async () => {
    try {
      // Perform the search using the searchTerm
      const results = await searchBooks(searchTerm);

      // Update the searchResults state with the search results
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const searchBooks = async (keyword) => {
    // Implement your book search logic here
    // You can use any API or library to perform the search

    // For example, using the Open Library API
    const response = await fetch(`https://openlibrary.org/search.json?q=${keyword}`);
    const data = await response.json();

    // Extract the relevant information from the API response
    const books = data.docs.map((doc) => ({
      key: doc.key,
      title: doc.title,
      authors: doc.author_name,
      cover: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
      subjects: doc.subject,
    }));

    return books;
  };

  return (
    <div>
      <h1>Book Search Application</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {selectedBook ? (
        <div>
          <h2>{selectedBook.title}</h2>
          <p>Authors: {selectedBook.authors.join(', ')}</p>
          <img src={selectedBook.cover} alt={selectedBook.title} />
        </div>
      ) : (
        <ul>
          {searchResults.map((book) => (
            <li key={book.key} onClick={() => handleBookClick(book)}>
              <h2>{book.title}</h2>
              <p>Authors: {book.authors.join(', ')}</p>
              <img src={book.cover} alt={book.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
