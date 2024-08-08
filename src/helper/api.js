import axios from "axios";

const endpoint = 'https://dummyjson.com/'
const productEndpoint = "products"
async function getAllProduct(){
    return axios.get(`${endpoint}${productEndpoint}`,{
        params:{
            limit:8,
            skip:10
        }
    })
    .then(
        (data)=>{
            return data.data
        }
    ).catch((err)=>console.log(err))
    
}

function getSingleProduct(){

}

export {getAllProduct,getSingleProduct}