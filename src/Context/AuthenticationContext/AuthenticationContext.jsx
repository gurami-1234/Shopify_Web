import { createContext, useState } from "react";

export const AuthenticationContext = createContext()
function AuthenticationComponent({children}) {
    const [isOpen,setIsOpen] = useState(false)
    let obj = {
        isOpen,
        setIsOpen
    }
    return (  
        <AuthenticationContext.Provider value={obj}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationComponent;