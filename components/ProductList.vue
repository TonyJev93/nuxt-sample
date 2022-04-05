<template>
    <div>
        {{ products }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    // asyncData 는 page component 이기 때문에 pages 하위에서만 동작. 해당 함수는 동작 하지 않음.
    async asyncData() {
        const response = await axios.get('http://localhost:3000/products')
        console.log(response)
        const products = response.data
        return { products }
    },
    name: 'ProductList',
}
</script>

<style>

</style>