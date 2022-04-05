<template>
  <div class="input-wrapper flex">
      <!-- <input type="text" :value="searchKeyword" @input="$emit('input', $event.target.value)"/> -->
      <input 
        type="text" 
        :value="value" 
        @input="$emit('input', $event.target.value)"
        class="search-input"
      />
      <button typ="button" @click="$emit('search')" class="btn">search</button>
  </div>
</template>

<script>
export default {
    // model: {
        // props 변수명 다르게 하고싶을 때 사용. 
        // (기본적으로 v-model 사용 시 props 는 value 를 써야함.)
    // },
    props: {
        value: {
            type: String,
            default: () => '',
        },
        searchKeyword: {
            type: String,
            default: () => '',
        },
    },
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>