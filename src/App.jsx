import { Children } from "react";
import "./App.css";

const books = [
  {
    author: "The Let Them Theory: A Life-Changing Tool",
    title: "Mel Robbins",
    image: "/images/book-1.jpg",
    id: 1,
  },
  {
    title: "The Color of Death: A Novel",
    author: "Trey Growdy",
    image: "/images/book-2.jpg",
    id: 2,
  },
  {
    title: "My First Learn-to-Write Workbook",
    author: "Crystal Radke",
    image: "https://m.media-amazon.com/images/I/71c+ReofeoL._SL1500_.jpg",
    id: 3,
  },
  {
    title: "Forgotten Home Apothecary",
    author: "Dr. Nicole Apelian",
    image: "https://m.media-amazon.com/images/I/81+efMYN9wL._SL1500_.jpg",
    id: 4,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
};

const EventExamples = () => {
  const handleButtonClick = function () {
    alert("Hello");
  };

  const handleFormInput = () => {
    alert("handle form input");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          onChange={handleFormInput}
          type="text"
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click</button>
    </section>
  );
};

const Book = ({ book }) => {
  return (
    <article className="book">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <h4>{book.author.toUpperCase()}</h4>
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
