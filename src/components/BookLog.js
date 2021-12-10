import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/asyncBooks';

const BookLog = (props) => {
  const { title, category, id } = props;
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(deleteBook(id));
  };
  return (
    <div className="log">
      <div className="log-left">
        <p className="book-cat">{category}</p>
        <h3 className="book-title">{title}</h3>
        <div className="book-author remove">Suzanne Collins</div>
        <div className="buttons">
          <button className="remove" type="button">Comments</button>
          |
          <button className="remove" type="button" onClick={(e) => handleRemove(e)}>Remove</button>
          |
          <button className="remove" type="button">Edit</button>
        </div>
      </div>
      <div className="log-mid">
        <div className="wheel" />
        <div>
          <p className="percentage">100%</p>
          <p className="completed"> completed</p>
        </div>
      </div>
      <div className="Line-2" />
      <div className="right">
        <p className="current">Current</p>
        <p className="chapter">Chapter 19: Epilogue</p>
        <button className="update" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookLog.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookLog;
