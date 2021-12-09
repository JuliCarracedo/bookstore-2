import { addBook, loadBooks, removeBook } from './books';

const appId = '6AY48En9E9g3rFOJh39t';

const fetchBooks = async () => {
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`);
  const obj = await response.json();
  const keys = Object.keys(obj);
  const list = [];
  keys.forEach((key) => { list.push({ ...obj[key][0], id: key }); });
  return list;
};

const importBooks = () => async (dispatch) => {
  dispatch(loadBooks(await fetchBooks()));
};

export const sendBook = (book) => async (dispatch) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: book.id, title: book.title, category: book.category }),
    });
  dispatch(addBook(book));
};

export const deleteBook = (id) => (dispatch) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(id));
};
export default importBooks;
