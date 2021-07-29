import React from "react";
import ReactDom from "react-dom";

//CSS

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL640_FMwebp_QL65_.jpg"
    alt=""
  />
);

const Title = () => <h1> I Love you to the moon and back </h1>;

const Author = () => (
  <h4>Tim Warnes</h4>
);
ReactDom.render(<BookList />, document.getElementById("root"));
