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
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} getBook={getBook} />
      ))}
    </section>
  );
};

const Book = (props) => {
  const { image, title, author, getBook, id } = props;

  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Click me</button>
      <button onClick={getSingleBook}>Click me</button>
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
