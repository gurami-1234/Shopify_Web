import { useContext } from "react";
import {ThemeContext} from '../../../Context/ThemeContext/ThemeContext'
import './Login.css'
function Login() {
    const {isDark} = useContext(ThemeContext)
    return (  
            <div className={isDark?"login-container dark":"login-container"}>
                <h1>LOGIN</h1>
            </div>
    );
}

export default Login;