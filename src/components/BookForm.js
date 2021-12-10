import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { sendBook } from '../redux/books/asyncBooks';

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
    dispatch(sendBook(newBook));
    return null;
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Add book title" />
      <select name="category" defaultValue="idle" onChange={(e) => { setCategory(e.target.value); }}>
        <option disabled value="idle">Select Category</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Sci-fi">Sci-fi</option>
        <option value="Documentary">Documentary</option>
      </select>
      <input type="button" onClick={(e) => submitBookToStore(e)} value="Submit" />
    </div>
  );
};

export default BookForm;
