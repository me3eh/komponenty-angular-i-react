import axios from "axios";

export const getProducts = () => {
    return axios.get("http://localhost:7777/products")
            .then(function(res){
                console.log(res.data);
                return res.data;
       });
}
export const addProducts = (body) => {
    return axios.post("http://localhost:7777/products", body)
        .then((response) =>{
            return response;
        })
        .catch(err=>{
            console.log(err.response.data);
        });
}
export const getProductById = (index) => {
    return axios.get("http://localhost:7777/products/" + index).then(function(res2){
        console.log(res2.data);
        return res2.data;
    })
}
export const deleteProductById = (id) => {
    return axios.delete("http://localhost:7777/products/" + id).then(function(res){
        console.log(res.data);
        return res
    })
}
export const editProductById = (id, body) => {
    return axios.put("http://localhost:7777/products/" + id, body).then(function(res){
        console.log(res.data);
        return res
    })
}