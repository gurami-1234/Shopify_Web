import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
import CartItemsLayout from "../../Layouts/CartItemsLayout/CartItemsLayout";
import CartItem from "../../components/CartItem/CartItem";
import "./Home.css"
const productList = [
    {
        id:0,
        type:"fragrances",
        title:"Dolce Shine Eau de",
        old_price:69.99,
        discount:11.47,
        new_price:61.96
    },
    {
        id:1,
        type:"fragrances",
        title:"Secpmd",
        old_price:50,
        discount:5,
        new_price:47.5
    },
    {
        id:2,
        type:"furniture",
        title:"Sofa",
        old_price:500,
        discount:0,
        new_price:500
    },
    {
        id:3,
        type:"furniture",
        title:"Mdivani",
        old_price:400,
        discount:0,
        new_price:400
    }

]

function Home() {
    const {isDark} = useContext(ThemeContext)
    return (  
        <main className={isDark?"home-main dark":"home-main light" }>
            <span style={{fontSize:'40px'}}>Home</span>
            <CartItemsLayout name='New Arrivals'>
                
                {
                    productList.map((el)=><CartItem 
                        key={el.id}
                        id={el.id} 
                        title={el.title} 
                        discount={el.discount}
                        old_price={el.old_price}
                        type={el.type}
                        new_price={el.new_price}
                        />)
                }
                {
                    productList.map((el)=><CartItem 
                    key={el.id}
                    id={el.id} 
                    title={el.title} 
                    discount={el.discount}
                    old_price={el.old_price}
                    type={el.type}
                    new_price={el.new_price}
                    />)
                }
                
            </CartItemsLayout>
            
        </main>
    );
}

export default Home;