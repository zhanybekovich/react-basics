import "./App.css";

const firstBook = {
  author: "The Let Them Theory: A Life-Changing Tool",
  title: "Mel Robbins",
  image: "/images/book-1.jpg",
};

const secondBook = {
  title: "The Color of Death: A Novel",
  author: "Trey Growdy",
  image: "/images/book-2.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <BookList />
    </>
  );
}

export default App;
