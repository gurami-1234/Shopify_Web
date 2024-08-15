import axios from "axios";

const endpoint = 'https://dummyjson.com/'
const productEndpoint = "products"
async function getAllProduct(limit=8,skip=0){
    return axios.get(`${endpoint}${productEndpoint}`,{
        params:{
            limit,
            skip
        } 
    })
    .then(
        (data)=>{
            return data.data
        }
    ).catch((err)=>console.log(err))
    
}

function getSingleProduct(id){
    return axios.get(`${endpoint}products/${id}`)
    .then(
        (data)=>data.data
    )
}

export {getAllProduct,getSingleProduct}