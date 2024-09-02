import { useState } from "react";
import img from 'images/banner.jpg'
import './Banner.css'
import { IoClose } from "react-icons/io5";

function Banner() {
    const [isBannerOpen,setIsBannerOpen]=useState(true)
    return ( 
        <div className={isBannerOpen?"dark-background":"close"}>
            <div className="banner">
            <button className="close-btn" onClick={()=>setIsBannerOpen(false)}><IoClose/></button>
                <img src={img} alt="" />
            </div>
        </div> 
        
    );
}

export default Banner;