import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookLog = (props) => {
  const { title, category, id } = props;
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h3 className="book-title">{title}</h3>
      <p>{category}</p>
      <button type="button" onClick={(e) => handleRemove(e)}>Remove</button>
    </div>
  );
};

BookLog.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookLog;
