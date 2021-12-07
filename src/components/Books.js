import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookLog from './BookLog';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      { books.map((book) => (
        <BookLog
          key={book.title}
          title={book.title}
          category={book.category}
          id={book.id}
        />
      ))}
      <BookForm />
    </div>
  );
};

export default Books;
