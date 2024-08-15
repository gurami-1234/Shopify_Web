import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (   
        <div className="main-layout">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainLayout;