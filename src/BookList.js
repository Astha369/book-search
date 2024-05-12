import React from 'react';

const openHighResImage = (book) => {
  if (book.cover_i) {
    // Construct the URL for the high-resolution image
    const highResImageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    
    // Open the high-resolution image in a new window
    window.open(highResImageUrl);
  } else {
    // Handle case where cover image is not available
    console.log('Cover image not available');
  }
};

const BookList = ({ books, onBookSelect }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.key} onClick={() => onBookSelect(book)}>
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              onClick={() => openHighResImage(book)}
            />
          ) : (
            <img
              src="/placeholder-image.jpg" // Replace with your placeholder image URL
              alt="Placeholder"
              onClick={() => openHighResImage(book)}
            />
          )}
          <h3>{book.title}</h3>
          <p>by {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          <hr /> {/* Horizontal line */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
