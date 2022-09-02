import "./styles.css";
import React, { useState } from "react";

var booksList = {
  javascript: [
    { name: "Eloquent Javascript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  fiction: [
    { name: "Shiva Triology", rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" }
  ],

  business: [
    { name: "Never Split the Difference", rating: "3.5/5" },
    { name: "Loonshots", rating: "5/5" }
  ]
};
export default function App() {
  var [selectedGenre, setGenre] = useState("business");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <small>Checkout my favourite books.Select a genere to get started.</small>
      <div>
        {Object.keys(booksList).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksList[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div> {book.name} </div>
              <div> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
