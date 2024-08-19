import { useContext } from "react";
import{Navbar, Footer} from "../../components";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
import "./MainLayout.css"
function MainLayout() {
    const {isDark} = useContext(ThemeContext)

    return (   
        <div className={isDark?"main-layout dark":"main-layout"}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainLayout;