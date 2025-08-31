import { Children } from "react";
import "./App.css";

const books = [
  {
    author: "The Let Them Theory: A Life-Changing Tool",
    title: "Mel Robbins",
    image: "/images/book-1.jpg",
  },
  {
    title: "The Color of Death: A Novel",
    author: "Trey Growdy",
    image: "/images/book-2.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={books[0].title}
        author={books[0].author}
        image={books[0].image}
      />
      <Book
        title={books[1].title}
        author={books[1].author}
        image={books[1].image}
      />
    </section>
  );
};

const Book = ({ title, author, image }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

function App() {
  return (
    <>
      <h1 style={{ textAlign: "Center", margin: "50px 0", fontSize: "3rem" }}>
        Best Selling Books
      </h1>
      <BookList />
    </>
  );
}

export default App;
