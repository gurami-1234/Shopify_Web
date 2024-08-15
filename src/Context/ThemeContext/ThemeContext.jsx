import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

function ThemeContextComponent({children}) {
    let isDarkLocal = JSON.parse( localStorage.getItem("isDark") )
    console.log(isDarkLocal);
    const [isDark,setIsDark] = useState(isDarkLocal==null?false:isDarkLocal)
    let obj = {
        isDark,
        setIsDark
    }
    useEffect(()=>{
        localStorage.setItem("isDark",JSON.stringify(isDark))
    },[isDark])

    return ( 
        <ThemeContext.Provider value={ obj }>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextComponent;