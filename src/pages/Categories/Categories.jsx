import CategoryItem from "./Components/CategoryItem";
import './Categories.css'
import { useEffect, useState } from "react";
import { getAllCategories } from "helper/api";
function Categories() {
    const [categoryList,setCategoryList] = useState([])
    useEffect(()=>{
        getAllCategories().then((data)=>setCategoryList(data))
    },[])

    return (  
        <main className="categories-main">
            <div className="header">
                <span>Categories</span>
            </div>
            <div className="categories-list">
                {
                    categoryList.length===0?<h1>Loading</h1>:(
                        categoryList.map((el)=>(
                            <CategoryItem name={el.name} link={el.slug} key={el.slug}/>
                        ))
                    )
                }

            </div>
        </main>
    );
}

export default Categories;