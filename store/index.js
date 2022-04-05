import { fetchCartItmes } from "@/api"


// constants : 상수화 (규모가 커졌을 때 사용하면 좋음)
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'


// state : 여러 컴포넌트간에 공유되어야 하는 데이터
export const state = () => ({
    cartItems: [],
})

export const mutations = {
    addCartItem(state, cartItem) {
        const newCartItem = {
            ...cartItem, // json 을 덮어 쓰는 효과
            imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
        }
        state.cartItems.push(newCartItem)
    },
    setCartItems(state, cartItems) {
        state.cartItems = cartItems
    }
}

export const actions = {
    // [FETCH_CART_ITEMS] : ES6 문법, 동적 키값 정의 방식
    async [FETCH_CART_ITEMS]({ commit }) {
        const response = await fetchCartItmes();
        console.log(response)
        commit('setCartItems', response.data)
    }
}