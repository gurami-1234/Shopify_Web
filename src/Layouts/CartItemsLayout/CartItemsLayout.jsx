import { useContext } from 'react';
import {ThemeContext} from '../../Context/ThemeContext/ThemeContext'
import './CartItemsLayout.css'
function CartItemsLayout({children,name}) {
    const {isDark} = useContext(ThemeContext)
    return (  
        <div className={isDark?'layout_container dark':'layout_container light'}>
            <h1>{name}</h1>
            <div className="Cart_Items_Layout">
                {children}
            </div>
        </div>
       
    );
}

export default CartItemsLayout;