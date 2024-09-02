import { useParams } from "react-router-dom";
import "./Category.css"
import { useEffect } from "react";
import { getSingleCategory } from "helper/api";

function Category() {
    const {categorySlug} = useParams()
    useEffect(()=>{
        getSingleCategory(categorySlug).then((data)=>console.log(data))
    },[])
    return (  
        <main>
            <h1>Category Page</h1>
            <h2>{categorySlug}</h2>
        </main>
    );
}

export default Category;