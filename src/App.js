import './App.css';
import { Routes,Route } from 'react-router-dom';
import ThemeContextComponent from './Context/ThemeContext/ThemeContext';
import { MainLayout } from './Layouts';
import { Categories,Home,Product,Products,NotFound } from './pages';

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
