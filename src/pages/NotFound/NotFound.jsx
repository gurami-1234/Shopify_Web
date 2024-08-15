import { Link } from "react-router-dom";
function NotFound() {
    return (  
        <main>
            <h1>404 PAGE NOT FOUND</h1>
            <button><Link to="/">Back Home</Link></button>
        </main>
    );
}

export default NotFound;