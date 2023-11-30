<template>
  <div>
    <Header />
    <div class="flex justify-center">
      <div class="list">
        <p v-for="count in 10" v-bind:key="count">{{ count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 100px;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 252px);
  grid-auto-rows: 252px;
  gap: 25px;
}
</style>