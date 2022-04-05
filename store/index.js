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
    }
}