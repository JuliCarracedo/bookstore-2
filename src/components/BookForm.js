import React from 'react';

const BookForm = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <input type="text" name="title" placeholder="Add book title" />
    <select name="category" defaul="idle">
      <option disabled value="idle">Select Category</option>
    </select>
    <input type="submit" value="Submit" />
  </form>
);

export default BookForm;
