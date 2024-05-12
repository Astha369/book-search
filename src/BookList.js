// BookList.js
import React from 'react';

// Function to open high-resolution image in a new window
const openHighResImage = (book) => {
  // Check if cover_i exists before constructing the URL
  if (book.cover_i) {
    // Construct the URL for the high-resolution image
    const highResImageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    // Open the high-resolution image in a new window
    window.open(highResImageUrl);
  }
};

const BookList = ({ books, onBookSelect }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.key} className="book-item" onClick={() => onBookSelect(book)}>
          {/* Conditional rendering for cover image */}
          {book.cover_i && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              onClick={() => openHighResImage(book)}
            />
          )}
          <div className="book-details">
            {/* Render title */}
            <h2>{book.title}</h2>


            {/* Conditional rendering for author name */}
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
