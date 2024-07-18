import './App.css';
import ThemeContextComponent from './Context/ThemeContext/ThemeContext';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <ThemeContextComponent>
        <Navbar/>
        <Home/>
        {/* <Categories/> */}
        {/* <Products/> */}
        <Footer/>
      </ThemeContextComponent>
      
    </div>
  );
}

export default App;
