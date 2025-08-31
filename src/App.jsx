import "./App.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title="The Let Them Theory: A Life-Changing Tool"
        author="Mel Robbins"
        image="/images/book-1.jpg"
      />
      <Book
        title="The Color of Death: A Novel"
        author="Trey Growdy"
        image="/images/book-2.jpg"
      />
      <Book
        title="My First Learn-to-Write Workbook"
        author="Crystal Radke"
        image="/images/book-3.jpg"
      />
      <Book
        title="Forgotten Home Apothecary"
        author="Dr. Nicole Apelian"
        image="/images/book-4.jpg"
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
