import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
import CartItemsLayout from "../../Layouts/CartItemsLayout/CartItemsLayout";
import { getAllProduct } from "../../helper/api";
import CartItem from "../../components/CartItem/CartItem";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Home.css"
function Home() {
    const {isDark} = useContext(ThemeContext)
    const [isLoading,setIsLoading] = useState(false)
    const [productList, setProductList] = useState(
        []
    )
    useEffect(()=>{
        setIsLoading(true)
        getAllProduct()
            .then((data)=>setProductList( data.products ))
            .finally(()=>setIsLoading(false))
    },[])
    return (  
        <main className={isDark?"home-main dark":"home-main light" }>
            <span style={{fontSize:'40px'}}>Home</span>
            {
                isLoading?(
                    <ClimbingBoxLoader color="#1a5e86" size={25} style={{margin:"0 auto"}} />
                ):
                (
                    <CartItemsLayout name='New Arrivals'>
                        {
                            productList.map((el)=><CartItem 
                            key={el.id}
                            image={el.thumbnail}
                            id={el.id} 
                            title={el.title} 
                            discount={el.discountPercentage}
                            old_price={el.price}
                            type={el.category}
                            new_price={(el.price-(el.price*(el.discountPercentage/100))).toFixed(2)}
                            />)
                        }
                    
                    </CartItemsLayout>
                )
            }
            
           
            
        </main>
    );
}

export default Home;