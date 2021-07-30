import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL640_FMwebp_QL65_.jpg",
  title: "I Love you to the moon and back",
  author: "Tim Warnes",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book title="random Title" number={123} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);

  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
