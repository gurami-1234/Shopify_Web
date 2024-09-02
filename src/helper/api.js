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

async function getSingleProduct(id){
    return axios.get(`${endpoint}products/${id}`)
    .then(
        (data)=>data.data
    )
}

async function getToken(userIfno){
    const resp =await axios.post("https://dummyjson.com/auth/login",userIfno)
    return resp.data.token
}

async function loginUsingToken(token){
    const resp = await axios.get("https://dummyjson.com/user/me",
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )
    return resp.data
}

async function getAllCategories(){
    const resp = await axios.get(endpoint+"products/categories")
    return resp.data
}

async function getSingleCategory(slug){
    const resp = await axios.get(endpoint+"products/category/"+slug)
    return resp.data.products
}

export {
    getAllProduct,
    getSingleProduct,
    getToken,
    loginUsingToken,
    getAllCategories,
    getSingleCategory
}