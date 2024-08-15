import './App.css';
import { Routes,Route } from 'react-router-dom';
import ThemeContextComponent from './Context/ThemeContext/ThemeContext';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="App">
      <ThemeContextComponent>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='categories' element={<Categories/>} />
            <Route path='products' element={<Products/>} />
            <Route path='product/:productId' element={<Product/>} />
            <Route path='/*' element={<NotFound/>} />
          </Route>
        </Routes>
      </ThemeContextComponent>
      
    </div>
  );
}

export default App;
