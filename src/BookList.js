import React from 'react';

const BookList = ({ books, onBookSelect }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.key} onClick={() => onBookSelect(book)}>
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
          <h3>{book.title}</h3>
          <p>by {book.author_name.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
