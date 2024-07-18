import { IoSearchOutline, IoCartOutline} from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
import './Navbar.css'
import { useContext } from "react";
const Navbar = ()=>{
    const {isDark,setIsDark}= useContext(ThemeContext)
    return(
        <nav className={isDark?"nav-bar dark":"nav-bar light" }>
            <div className="logo">
                <span>Shopify</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for a product..." className="search"/>
                <button className="search-btn">
                    <IoSearchOutline />
                </button>
            </div>
            <ul className="nav-right-elems">
                <li className="page-item"><a href="#" className={isDark?"dark":'light'}>Products</a></li>
                <li className="page-item"><a href="#" className={isDark?"dark":'light'}>Categories</a></li>

                <li className="login-item">
                    <FaUser /> 
                    <button className={isDark?"nav-btn dark":"nav-btn light"}>Login</button>
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
    )
}

export default Navbar