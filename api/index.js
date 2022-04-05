import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.baseURL,
})

function fetchProduct() {
    return instance.get(`/products`)
}


function fetchProductById(id) {
    return instance.get(`/products/${id}`)
}

// function fetchProductsByKeyword(keyword) {
//     return instance.get(`/products?name_like=${keyword}`)
// }
function fetchProductsByKeyword(keyword) {
    return instance.get(`/products`,{
        params: {
            name_like: keyword,
        }
    })
}

function fetchCartItmes() {
    return instance.get('/carts')
}

function createCartItem(cartItem) {
    return instance.post(`/carts`, cartItem)
}

export { fetchProduct, fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItmes }