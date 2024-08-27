import { loginUsingToken } from "helper/api";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

function AuthContextComponent({children}) {
    const [isAuth,setIsAuth] = useState(null)
    // useEffect(()=>{
    //     localStorage.setItem("isAuth",isAuth)
    // },[isAuth])
    useEffect(()=>{
        let myToken = localStorage.getItem('token')
        console.log(myToken);
        myToken!==null && (
            loginUsingToken(myToken).then((data)=>{
                console.log("Happend");
                setIsAuth(true)
            })
        )
        // 
    },[])
    
    return ( 
        <AuthContext.Provider value={{isAuth,setIsAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextComponent;