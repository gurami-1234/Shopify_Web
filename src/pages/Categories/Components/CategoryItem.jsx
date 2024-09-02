import './CategoryItem.css'
import { Link } from 'react-router-dom';
function CategoryItem({name,link}) {
    return (  
        <div className="category-item">
            <p className="title">{name}</p>
            <p className="link"><Link to={`/category/${link}`}>View Details</Link></p>
        </div>
    );
}

export default CategoryItem;