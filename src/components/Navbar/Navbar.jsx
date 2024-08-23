import { IoSearchOutline, IoCartOutline} from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
import {AuthenticationContext} from '../../Context/AuthenticationContext/AuthenticationContext'
import './Navbar.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../Authentication/Layout/AuthLayout";
import Login from "../Authentication/Login/Login";
const Navbar = ()=>{
    const {isOpen,setIsOpen} = useContext(AuthenticationContext) 
    const {isDark,setIsDark} = useContext(ThemeContext)
    return(
        <>
            <nav className={isDark?"nav-bar dark":"nav-bar light" }>
                <div className="logo">
                    <span><Link to="/">SHOPIFY</Link></span>
                </div> 
                <div className="search-bar">
                    <input type="text" placeholder="Search for a product..." className="search"/>
                    <button className="search-btn">
                        <IoSearchOutline />
                    </button>
                </div>
                <ul className="nav-right-elems">
                    <li className="page-item"><Link to="/products" className={isDark?"dark":'light'}>Products</Link></li>
                    <li className="page-item"><a href="#" className={isDark?"dark":'light'}>Categories</a></li>

                    <li className="login-item" >
                        <FaUser /> 
                        <button className={isDark?"nav-btn dark":"nav-btn light"} onClick={()=>setIsOpen(true)}>Login</button>
                    </li>

                    <li className="cart-item icon">
                        <button className={isDark?"nav-btn dark":"nav-btn light"}>
                            <IoCartOutline/> 
                        </button>
                        
                        <div className="counter">0</div> 
                    </li>

                    <li className="theme-item icon"> 
                        <button className={isDark?"nav-btn dark":"nav-btn light"} onClick={()=>setIsDark(!isDark)}>
                            {
                                isDark?<CiLight/>:<FiMoon/>
                            }
                            
                            
                        </button>
                    </li>
                </ul>
                
            </nav>
            {
                isOpen&&(<AuthLayout>
                    <Login/>
                </AuthLayout>)
            }
            
        </>
    )
}

export default Navbar