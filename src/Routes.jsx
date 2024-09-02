import { MainLayout } from './Layouts';
import { Categories,Home,Product,Products,NotFound,Profile } from './pages';
import { useContext } from 'react';
import { AuthContext } from 'Context/AuthContext/AuthContext';
import { Routes,Route, Navigate } from 'react-router-dom';
import Category from 'pages/Category/Category';

function MyRoutes() {
    const {isAuth} = useContext(AuthContext)
    return ( 
        <Routes>
              <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='categories' element={<Categories/>} />
                <Route path='products' element={<Products/>} />
                <Route path='product/:productId' element={<Product/>} />
                <Route path='category/:categorySlug' element={<Category/>}/>
                <Route path='profile' element={ isAuth?<Profile/>:<Navigate to="/"/>} />
                <Route path='/*' element={<NotFound/>} />
              </Route>
        </Routes>
     );
}

export default MyRoutes;