import React from 'react';

const BookDetails = ({ book, onReturn }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>by {book.author_name.join(', ')}</p>
      <p>Published: {book.first_publish_year}</p>
      <p>Pages: {book.number_of_pages}</p>
      <p>Subjects: {book.subject.join(', ')}</p>
      <button onClick={onReturn}>Back to Search Results</button>
    </div>
  );
};

export default BookDetails;
