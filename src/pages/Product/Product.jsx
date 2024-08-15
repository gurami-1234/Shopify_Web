import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../helper/api";
function Product() {
    const {productId} = useParams()
    const [productData,setProductData] = useState({})
    useEffect(()=>{
        getSingleProduct(productId).then((data)=>{
            setProductData(data)
        })
    },[])


    return (  
        <main className="product-page">
            <h1>PRODUCT PAGE</h1>
            <p>Product ID IS {productId}</p>
            <img src={productData.thumbnail} width="200px"/>
            <h2>{productData.title}</h2>
        </main>
    );
}

export default Product;