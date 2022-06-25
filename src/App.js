import logo from './logo.svg';
import './App.css';
import Categories from './routing/Categories'
import Home from './routing/Home'
import Jokes from './routing/Jokes'
import Search from './routing/Search'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/jokes' element={<Jokes />} />
      <Route path='/search' element={<Search />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
    
    
    </>
  );
}

export default App;
