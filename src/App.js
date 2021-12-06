import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </div>
);

export default App;
