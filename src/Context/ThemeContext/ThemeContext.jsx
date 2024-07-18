import { createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeContextComponent({children}) {
    const [isDark,setIsDark] = useState(true)
    return ( 
        <ThemeContext.Provider value={{isDark,setIsDark}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextComponent;