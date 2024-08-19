import{Navbar, Footer} from "../../components";
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