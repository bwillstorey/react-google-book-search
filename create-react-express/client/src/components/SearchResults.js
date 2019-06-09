import React from "react";

const SearchResults = ({ book }) => (
    <div>
        <h2>{book.volumeInfo.title}</h2>
        <h3>Author(s): {book.volumeInfo.authors.join(", ")}</h3>
        <p>{book.volumeInfo.description}</p>
    </div>
)

export default SearchResults;