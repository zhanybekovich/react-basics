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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="/images/book-1.jpg" />;
const Title = () => <h2>The Let Them Theory: A Life-Changing Tool</h2>;
const Author = () => {
  const inlineStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  return <h4 style={inlineStyles}>Mel Robbins</h4>;
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
