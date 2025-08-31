import "./App.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const author = "Mel Robbins";

const Book = () => {
  const title = "The Let Them Theory: A Life-Changing Tool";

  return (
    <article className="book">
      <img src="/images/book-1.jpg" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
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
