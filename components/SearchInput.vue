<template>
  <div>
      <!-- <input type="text" :value="searchKeyword" @input="$emit('input', $event.target.value)"/> -->
      <input type="text" :value="value" @input="$emit('input', $event.target.value)"/>
      <button>search</button>
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

<style>

</style>