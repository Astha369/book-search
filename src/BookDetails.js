import React from 'react';

const BookDetails = ({ book, onReturn }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>by {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      <p>Published: {book.first_publish_year || 'N/A'}</p>
      <p>Pages: {book.number_of_pages || 'N/A'}</p>
      <p>Subjects: {book.subject ? book.subject.join(', ') : 'N/A'}</p>
      <br></br>
      <button onClick={onReturn}>Back to Search Results</button>
    </div>
  );
};

export default BookDetails;
