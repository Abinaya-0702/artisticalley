
import './App.css';
import Header from './components/header/header';
import Category from './components/home/categorycard';
import CategoryPage from './components/products/categoryproducts';
import Home from './components/home/home';
import {Routes,Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/main/main';
function App() {
  return (
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
    // <CategoryPage/>
  );
}

export default App;
