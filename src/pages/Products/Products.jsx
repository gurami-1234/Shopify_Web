import { useEffect, useState } from "react";
import CartItemsLayout from "../../Layouts/CartItemsLayout/CartItemsLayout";
import { getAllProduct } from "../../helper/api";
import CartItem from "../../components/CartItem/CartItem";
import "./Products.css"
function Products() {
    const [productsData,setProductsData] = useState([])
    const [page,setPage] = useState(1)
    const limit = 8
    useEffect(()=>{
        let skip = (limit*page)-limit
        console.log(skip);
        getAllProduct(limit,skip)
            .then(
                (data)=>setProductsData(data.products)
            )
    },[page])
    return (  
        <div>
            <CartItemsLayout name="products">
            {
                productsData.map((el)=>(
                    <CartItem
                    key={el.id}
                    image={el.thumbnail}
                    id={el.id} 
                    title={el.title} 
                    discount={el.discountPercentage}
                    old_price={el.price}
                    type={el.category}
                    new_price={(el.price-(el.price*(el.discountPercentage/100))).toFixed(2)}
                    />
            ))
            }
        </CartItemsLayout>

        <div className="page-count">
            <button onClick={()=>setPage(1)}>1</button>
            <button onClick={()=>setPage(2)}>2</button>
            <button onClick={()=>setPage(3)}>3</button>
            <button onClick={()=>setPage(4)}>4</button>
            <button onClick={()=>setPage(5)}>5</button>
        </div>
        </div>
    );
}

export default Products;