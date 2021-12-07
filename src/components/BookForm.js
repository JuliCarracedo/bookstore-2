import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const submitBookToStore = (e) => {
    if (category === 'idle') { return null; }
    if (title === null) { return null; }
    e.stopPropagation();
    const newBook = {
      id: v4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    return null;
  };
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Add book title" />
      <select name="category" defaultValue="idle" onChange={(e) => { setCategory(e.target.value); }}>
        <option disabled value="idle">Select Category</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="adventure">Adventure</option>
      </select>
      <input type="button" onClick={(e) => submitBookToStore(e)} value="Submit" />
    </form>
  );
};

export default BookForm;
