import React from "react";
// Destructing props in ES6 and react.

const Book = (props) => {
  // destucting props
  const [img, title, author] = props;
  return (
    <div>
      <img src={img} alt="/" />

      <h1>{title} </h1>
      <h4> {author}</h4>
    </div>
  );
};
export default Book;
