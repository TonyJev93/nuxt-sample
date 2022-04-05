<template>
  <div>
      <AppHeader />
      <Nuxt/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "defaultPage",
  components: { AppHeader },
}
</script>

<style>

</style>