<template>
   <div class="list-wrapper">
      <ul>
        <li v-for="(cartItem, index) in $store.state.cartItems" :key="cartItem.id + '/'+ index" class="list-item">
          <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
          <div class="description">
            <p>{{ cartItem.name }}</p>
            <span>{{ cartItem.price }}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '~/store'
export default {
    // asyncData : Page Component 에서만 호출 가능하므로 조회 안 됨
    // async asyncData({store}) {
    //     await store.dispatch(FETCH_CART_ITEMS)
    // },
    // fetch : 페이지 컴포넌트 뿐만 아니라 일반 뷰 컴포넌트에서도 사용할 수 있는 데이터 호출 속성, https://nuxtjs.org/docs/features/data-fetching/
    async fetch() {
        await this.$store.dispatch(FETCH_CART_ITEMS)
    }
}
</script>


<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>