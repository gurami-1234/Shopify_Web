import { Link } from 'react-router-dom';
import './CartItem.css'
import { IoCartOutline} from "react-icons/io5";
import { useContext } from 'react';
import {ThemeContext} from '../../Context/ThemeContext/ThemeContext.jsx'
function CartItem({id,image, title,discount,old_price,type,new_price}) {
    const {isDark} = useContext(ThemeContext)
    return (   
        <div className={isDark?"cartItem dark":"cartItem"}> 
            <div className='image'>
                <img src={image} width={100} /> 
            </div>
            <div className='cart_item_text'>
                <span className='type'>{type}</span>
                <p className='title'><Link to={`product/${id}`}>{title}</Link></p>
                <div className='price_and_buy'>
                    <div className='price'>
                        
                        <span className='new_price'>${new_price}</span>
                        <br />
                        {discount!==0?<span className='discount_part'> <del>${old_price}</del> <b>-{discount}%</b> </span>:null}
                    </div>
                    <div className='buy'>
                        <button className='buy_btn'> <IoCartOutline/> Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;