<template>
  <div class="app">
    <main>
      <!-- <search-input :search-keyword='searchKeyword' @input="updateSearchKeyword" /> -->
      <search-input v-model="searchKeyword" @search="searchProducts"/>
      <ul>
        <li class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name}}</p>
          <span>{{ product.price}}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>

import SearchInput from '@/components/SearchInput.vue'; // ~ 는 webpack 관련 resolve 옵션 속성 ( @ 해도 됨 )
import { fetchProductsByKeyword, fetchProduct } from '@/api';

export default {
  components: { SearchInput },
  name: 'MainPage',
  async asyncData() {
    const response = await fetchProduct()
    console.log(response)
    const products = response.data.map(item => ({
      ...item, // json 을 덮어 쓰는 효과
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    return { products }
  },
  data() {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    moveToDetailPage(id) {
      console.log(id)
      this.$router.push(`detail/${id}`);
    },
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword
    // },
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword)
      console.log(response.data)
      this.products=response.data.map(item => ({
      ...item, // json 을 덮어 쓰는 효과
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    },
    moveToCartPage() {
      this.$router.push('/cart')
    }
  }
  
}
</script>


<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  /* 화면 고정 기능 */
  position: sticky; 
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>