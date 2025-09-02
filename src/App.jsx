import "./App.css";
import { books } from "./books";
import Book from "./Book.jsx";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
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
