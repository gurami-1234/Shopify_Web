import { useContext, useState } from "react";
import {ThemeContext} from 'Context/ThemeContext/ThemeContext'
import { IoMdClose } from "react-icons/io";
import { FaUnlock,FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AuthenticationContext } from "Context/AuthenticationContext/AuthenticationContext";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
    const {isDark} = useContext(ThemeContext)
    const {setIsOpen} = useContext(AuthenticationContext)
    const [userInfo,setUserInfo] = useState({
        username:"",
        password:""
    })

    const login = ()=>{
        console.log("USERNAME:",userInfo.username);
        console.log("PASSWORD:",userInfo.password);
        setUserInfo({username:'',password:''})

    }

    return (  
            <div className={isDark?"login-container dark":"login-container"}>
                <button onClick={()=>setIsOpen(false)} className="exit"><IoMdClose /></button>
                <p className="login-title"><FaUnlock/> LOGIN <FaUnlock/></p>
                <div className="inputs">
                    <div className="input-place">
                        <FaUserAlt/>
                        <input 
                            type="text" 
                            placeholder="Your username here..." 
                            value={ userInfo.username }
                            onChange={(e)=>setUserInfo({...userInfo,username:e.target.value})}
                        />
                    </div>
                    <div className="input-place">
                        <RiLockPasswordFill />
                        <input 
                            type="password" 
                            placeholder="Your password here..." 
                            value={userInfo.password}
                            onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})}
                        />
                    </div>
                </div>
                <button className="login-btn" onClick={login}>Submit</button>
                <p className="register">No Account? <Link>Register</Link></p>
            </div>
    );
}

export default Login;