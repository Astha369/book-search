import React from 'react';

const openHighResImage = (book) => {
  if (book && book.cover_i) {
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
        <div key={book.key} onClick={() => onBookSelect(book)}>
          <img
            src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : ''}
            alt={book.title}
            onClick={() => openHighResImage(book)}
          />
          <h3>{book.title}</h3>
          <p>by {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
