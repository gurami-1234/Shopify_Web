import { createContext, useState } from "react";

export const AuthenticationContext = createContext()
function AuthenticationComponent({children}) {
    const [isOpen,setIsOpen] = useState(false)
    let obj = {
        isOpen,
        setIsOpen
    }
    console.log(isOpen);
    return (  
        <AuthenticationContext.Provider value={obj}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationComponent;