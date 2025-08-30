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

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg" />
);
const Title = () => <h2>The Let Them Theory: A Life-Changing Tool</h2>;
const Author = () => <h4>Mel Robbins</h4>;

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <BookList />
    </>
  );
}

export default App;
